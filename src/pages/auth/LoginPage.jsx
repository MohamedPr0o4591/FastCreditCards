import React, { useEffect, useState } from "react";
import "./Auth.css";
import { Col, Row } from "react-bootstrap";
import { Box, Stack } from "@mui/material";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import BTC from "../../../public/bitcoin.png";
import FlashCircle from "../../components/utilities/FlashCircle";
import axios from "axios";
import { decryptToken, encryptToken } from "../../Utilities/token/Token_Crypt";
import emailjs from "@emailjs/browser";

function LoginPage() {
  const initialState = {
    email: "",
    password: "",
  };

  const [input, setInput] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);
  const [userVerificationCode, setUserVerificationCode] = useState("");
  const [otpReq, setOtpReq] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (otpReq !== "" && userVerificationCode == otpReq) {
      const data = new URLSearchParams();
      data.append("u_verify", "yes");

      try {
        await axios.patch(
          `${import.meta.env.VITE_API_HOST}/auth/updateVerify.php`,
          data,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${decryptToken(
                sessionStorage.token || localStorage.token
              )}`,
            },
          }
        );

        setOtpReq("");
        notify("success", "Verification successful, Now you can login");
      } catch (err) {
        console.error("Error verifying email:", err.message);
      }
    } else if (otpReq !== "" && userVerificationCode !== otpReq) {
      notify("error", "Wrong verification code");
    }

    if (otpReq === "") {
      try {
        const formData = new FormData();
        formData.append("u_name", input.email);
        formData.append("u_pass", input.password);
        const res = await axios.post(
          `${import.meta.env.VITE_API_HOST}/auth/loginUsr.php`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (rememberMe) {
          localStorage.setItem("token", encryptToken(res.data.user.token));
        } else {
          sessionStorage.setItem("token", encryptToken(res.data.user.token));
        }

        if (res.data.user.verified === "yes") {
          notify("success", "Acceptable login process");
          setTimeout(() => {
            location.pathname = "/dashboard";
          }, 2000);
        } else {
          const verificationCode = Math.floor(100000 + Math.random() * 900000);
          const templateParams = {
            to_name: res.data.user.fullName,
            to_user: res.data.user.email,
            verification_code: verificationCode,
          };

          emailjs
            .send(
              import.meta.env.VITE_SERVICE_SUPER_ID,
              import.meta.env.VITE_TEMPLATE_SUPER_ID,
              templateParams,
              import.meta.env.VITE_EMAILJS_SUPER_PUBLIC_KEY
            )
            .then((_) => {
              setOtpReq(verificationCode);
            });

          notify("warning", "Please, check your email and verify your account");
        }
      } catch (err) {
        if (err.response) {
          if (err.response.status === 401) {
            notify(
              "error",
              "Please, Enter a valid email or username and password!"
            );
          } else {
            notify("warning", "User not found, please check your credentials");
          }
        }
      }
    }

    setIsLoading(false);
  }

  const notify = (status, msg) => {
    toast[status](msg, {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const [subText, setSubText] = useState("");
  const phrases = [
    "playing games",
    "taking surveys",
    "surfing websites",
    "watching movies",
    "reading books",
    "watching youtube videos",
  ];

  useEffect(() => {
    document.title = "Login | FastCreditCards";

    let currentPhrase = 0;
    let isDeleting = false;
    let charIndex = 0;
    const typingSpeed = 300; // سرعة الكتابة
    const deletingSpeed = 100; // سرعة الحذف

    const type = () => {
      if (!isDeleting && charIndex < phrases[currentPhrase].length) {
        // إذا لم يتم الحذف وكُتب جزء من النص
        setSubText(phrases[currentPhrase].substring(0, charIndex + 1));
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        // إذا تم البدء في الحذف
        setSubText(phrases[currentPhrase].substring(0, charIndex - 1));
        charIndex--;
      } else if (charIndex === phrases[currentPhrase].length) {
        // ابدأ الحذف بعد كتابة العبارة
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // عند الانتهاء من الحذف انتقل إلى العبارة التالية
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length; // العودة من جديد
      }

      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    };

    type(); // استدعاء دالة الكتابة
  }, []);

  return (
    <div className="auth-page">
      <FlashCircle />

      <Row className="w-100">
        <Col sm={12} lg={6}>
          <div className="auth">
            <Box className="borderLine" />

            <form onSubmit={handleFormSubmit}>
              <label>
                <h3 style={{ letterSpacing: ".05rem" }}>Sign in</h3>
              </label>

              <div className={`${otpReq !== "" && "disabled"}`}>
                <div className="input-box">
                  <input
                    type="text"
                    value={input.email}
                    onChange={(e) =>
                      setInput({ ...input, email: e.target.value })
                    }
                    required
                    name="email"
                    autoComplete="off"
                  />

                  <span>Username or E-mail Address</span>

                  <div className="underLine" />
                </div>

                <div className="input-box">
                  <input
                    type="password"
                    value={input.password}
                    onChange={(e) =>
                      setInput({ ...input, password: e.target.value })
                    }
                    required
                    name="password"
                  />

                  <span>Password</span>

                  <div className="underLine" />
                </div>

                <Stack direction={"row"} alignItems={"center"}>
                  <div className="remember checkbox">
                    <input
                      type="checkbox"
                      id="remember"
                      onChange={(_) => setRememberMe(!rememberMe)}
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>

                  <Box flex={1} />

                  <Link to="/login/forget_password" style={{ color: "#0ef" }}>
                    Forget password
                  </Link>
                </Stack>
              </div>

              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {otpReq !== "" && (
                  <div className="input-box" style={{ flexGrow: 1 }}>
                    <input
                      type="text"
                      value={userVerificationCode}
                      onChange={(e) => setUserVerificationCode(e.target.value)}
                      required
                    />

                    <span>Verification Code</span>

                    <div className="underLine" />
                  </div>
                )}

                <Box flexGrow={1} />

                <input
                  type="submit"
                  style={{ pointerEvents: isLoading ? "none" : "auto" }}
                  value={`${otpReq !== "" ? "Verify" : "Login"}`}
                />
              </Stack>
            </form>
          </div>
        </Col>

        <Col
          sm={12}
          lg={6}
          className="login-banner position-relative d-flex flex-column"
        >
          <div className="text-box">
            <span>Earn rewards by:</span> <span>{subText}</span>
          </div>

          <div className="img-box">
            <img src={BTC} alt="" className="w-100" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
