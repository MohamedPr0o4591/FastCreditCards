import { Box, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { decryptToken, encryptToken } from "../Utilities/token/Token_Crypt";
import { useDispatch, useSelector } from "react-redux";
import { getIpData } from "../redux/actions/allActions";

function Confirm_details() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordResult, setPasswordResult] = useState("");
  const [verificationInput, setVerificationInput] = useState("");

  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifyReq, setIsVerifyReq] = useState("");

  // cookie permission
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [cookieEnabled, setCookieEnabled] = useState(navigator.cookieEnabled);

  const lowercaseRegex = /[a-z]/g;
  const uppercaseRegex = /[A-Z]/g;
  const characterscaseRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
  const numbersRegex = /[0-9]/g;

  const nav = useNavigate();
  const ipData = useSelector((state) => state.GET_IP_DATA.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIpData());
  }, []);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setActive(true);

    let lowerCase;
    let upperCase;
    let charCase;
    let numbers;

    let flag;

    // lower case

    const lowercaseMatches = password.match(lowercaseRegex);
    if (lowercaseMatches) {
      lowerCase = true;
    } else lowerCase = false;

    // upper case

    const uppercaseMatches = password.match(uppercaseRegex);
    if (uppercaseMatches) {
      upperCase = true;
    } else upperCase = false;

    // characters case

    const characterscaseMatches = password.match(characterscaseRegex);
    if (characterscaseMatches) {
      charCase = true;
    } else charCase = false;

    // numbers

    const numbersMatches = password.match(numbersRegex);
    if (numbersMatches) {
      numbers = true;
    } else numbers = false;

    // submit
    if (
      lowerCase &&
      upperCase &&
      charCase &&
      numbers &&
      confirmPassword === password
    ) {
      flag = true;
      setIsLoading(true);
    } else flag = false;

    if (isVerifyReq !== "") {
      if (verificationInput == isVerifyReq) {
        checkUserVerification();
      } else {
        notify("error", "Verification Failed!!");
        setIsLoading(false);
      }
    } else {
      if (flag) {
        if (
          localStorage.email !== "" &&
          localStorage.userName !== "" &&
          localStorage.full_name !== "" &&
          localStorage.gender !== "" &&
          localStorage.country !== "" &&
          localStorage.day !== "" &&
          localStorage.month !== "" &&
          localStorage.year !== ""
        ) {
          createUser();
        } else {
          notify("error", "Please fill all the details");
        }
      }
    }

    setIsLoading(false);
  }

  async function checkUserVerification() {
    const data = new URLSearchParams();
    data.append("u_verify", "yes");
    try {
      await axios.patch(
        `${
          import.meta.env.VITE_API_HOST
        }/fastCreditCards/auth/updateVerify.php`,
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${decryptToken(localStorage.token)}`,
          },
        }
      );

      activeUser(ipData.ip);

      notify("success", "Verification Successful");
      setTimeout(() => {
        nav("/dashboard");
      }, 2000);
    } catch (err) {
      notify("error", "Verification Failed");
    }
  }

  async function createUser() {
    const formData = new FormData();
    formData.append("u_email", localStorage.email);
    formData.append("u_name", localStorage.userName);
    formData.append("u_password", password);
    formData.append("fullName", localStorage.full_name);
    formData.append("gender", localStorage.gender);
    formData.append(
      "birth",
      `${localStorage.year}-${
        localStorage.month > 10 ? localStorage.month : `0${localStorage.month}`
      }-${localStorage.day}`
    );
    formData.append("country", localStorage.country);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_HOST}/fastCreditCards/auth/registerUsr.php`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      notify(
        "success",
        "Account has been successfully registered ,please check your email"
      );

      sendVerificationCode();

      localStorage.clear();

      localStorage.token = encryptToken(res.data.token);
    } catch (err) {
      notify("error", "Registration failed!!, please try again");
    } finally {
      setIsLoading(false);
    }
  }

  function sendVerificationCode() {
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    const templateParams = {
      to_name: localStorage.full_name,
      to_user: localStorage.email,
      verification_code: verificationCode,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_SUPER_ID,
        import.meta.env.VITE_TEMPLATE_SUPER_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_SUPER_PUBLIC_KEY
      )
      .then(() => {
        setIsVerifyReq(verificationCode);
      });
  }

  async function activeUser(ip) {
    try {
      const res = await axios.get(
        `/api/ip-check?key=${import.meta.env.VITE_API_KEY_IP_QUALITY}&ip=${ip}`
      );

      let statusResult;

      if (res.data.fraud_score > 28) {
        statusResult = "ban";
      } else statusResult = "active";

      const data = new URLSearchParams();
      data.append("status", statusResult);

      try {
        await axios.post(
          `${
            import.meta.env.VITE_API_HOST
          }/fastCreditCards/user/activeAccount.php`,
          data,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${decryptToken(localStorage.token)}`,
            },
          }
        );
      } catch (error) {
        console.error("error message: " + error);
      }
    } catch (err) {
      console.error("error message: " + err);
    }
  }

  const notify = (status, msg) => {
    toast[status](msg, {
      position: "top-left",
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handlePassLevelChange = (_) => {
    if (
      password.match(numbersRegex) ||
      password.match(lowercaseRegex) ||
      password.match(uppercaseRegex) ||
      password.match(characterscaseRegex)
    ) {
      setPasswordResult("Very weak");
    } else setPasswordResult("");

    if (password.match(lowercaseRegex) && password.match(numbersRegex)) {
      setPasswordResult("Weak");
    }
    if (
      password.match(uppercaseRegex) &&
      password.match(numbersRegex) &&
      password.match(lowercaseRegex)
    ) {
      setPasswordResult("Normal");
    }
    if (
      password.match(uppercaseRegex) &&
      password.match(lowercaseRegex) &&
      password.match(numbersRegex) &&
      password.match(characterscaseRegex)
    ) {
      setPasswordResult("Strong");
    }
    if (
      password.match(uppercaseRegex) &&
      password.match(lowercaseRegex) &&
      password.match(numbersRegex) &&
      password.match(characterscaseRegex) &&
      password.length >= 8
    ) {
      setPasswordResult("Very Strong");
    }
  };

  // cookie request permission
  const handleCookieCheckboxChange = (e) => {
    if (e.target.checked) {
      setCookieAccepted(true);
      checkCookiesEnabled();
    } else {
      setCookieAccepted(false);
    }
  };

  const checkCookiesEnabled = () => {
    if (!navigator.cookieEnabled) {
      notify(
        "warning",
        "Cookies are disabled in your browser. Please enable cookies to continue."
      );
    }
  };

  return (
    <div className="auth">
      <Box className="borderLine" />

      <form onSubmit={handleFormSubmit}>
        <label>
          <h3 style={{ letterSpacing: ".05rem" }}>
            Complete the registration process
          </h3>
        </label>

        <div
          className={`password-container ${isVerifyReq !== "" && "disabled"}`}
        >
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              onKeyUp={handlePassLevelChange}
            />

            <strong
              className="position-absolute z-1"
              style={{
                top: 50 + "%",
                right: 10 + "px",
                transform: "translateY(-50%)",
                letterSpacing: 0.1 + "rem",
                color: `${
                  passwordResult === "Very weak"
                    ? "#e00"
                    : passwordResult === "Weak"
                    ? "#e00"
                    : passwordResult === "Normal"
                    ? "orange"
                    : passwordResult === "Strong"
                    ? "#0e6"
                    : "#0e6"
                }`,
                pointerEvents: "none",
              }}
            >
              {passwordResult}
            </strong>

            <span>Set password</span>

            <div className="underLine" />
          </div>

          <div className="input-box">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <span>Confirm the password</span>

            <div className="underLine" />
          </div>

          {confirmPassword !== password && active ? (
            <p
              className="text-danger mt-2"
              style={{ letterSpacing: 0.1 + "rem" }}
            >
              Password don't match!!
            </p>
          ) : null}

          <ul className="mt-3 text-info">
            <li>Numbers</li>

            <li>Lowercase letters</li>

            <li>Uppercase letters</li>

            <li>Symbols</li>

            <li>More than 8 characters</li>
          </ul>

          <div className="checkbox">
            <input type="checkbox" id="accept" required />
            <label htmlFor="accept">
              I accept the{" "}
              <a href="http://localhost:5173/service" target="_blank">
                terms and conditions
              </a>{" "}
              and{" "}
              <a href="http://localhost:5173/privacy" target="_blank">
                privacy policy
              </a>
            </label>
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              id="cookie"
              onChange={handleCookieCheckboxChange}
              checked={cookieAccepted}
              required
            />
            <label htmlFor="cookie">
              I accept the{" "}
              <a href="http://localhost:5173/cookies" target="_blank">
                cookies policy
              </a>{" "}
            </label>
          </div>

          {!cookieEnabled && (
            <p>
              Cookies are disabled in your browser. Please enable cookies to
              proceed.
            </p>
          )}
        </div>

        <Stack direction={"row"}>
          {isVerifyReq !== "" && (
            <div
              className="input-box verification-input"
              style={{ flexGrow: 1 }}
            >
              <input
                type="text"
                value={verificationInput}
                onChange={(e) => setVerificationInput(e.target.value)}
                required
              />

              <span>Verification code</span>

              <div className="underLine" />
            </div>
          )}

          <Box flexGrow={1} />

          <input
            type="submit"
            style={{ pointerEvents: isLoading ? "none" : "auto" }}
            value={`${
              isLoading
                ? "Loading..."
                : isVerifyReq !== ""
                ? "Verify"
                : "Sign up"
            }`}
          />
        </Stack>
      </form>
    </div>
  );
}

export default Confirm_details;
