import { Box, Stack, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addEvent } from "../action/AddEvent";
import { referredId } from "../action/ReferralLink";

function Confirm_details() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordResult, setPasswordResult] = useState("");

  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [referralsCount, setReferralsCount] = useState("");

  const lowercaseRegex = /[a-z]/g;
  const uppercaseRegex = /[A-Z]/g;
  const characterscaseRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
  const numbersRegex = /[0-9]/g;

  const handleFormSubmit = async (e) => {
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

    if (flag) {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1; // الشهر يبدأ من 0
      const year = currentDate.getFullYear();

      localStorage.currentDate = `${month < 10 ? `0${month}` : month}/${
        day < 10 ? `0${day}` : day
      }/${year}`;

      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
          localStorage.email,
          password
        );

        if (localStorage.referrerId !== undefined) {
          const dataInvitation = db
            .collection("users")
            .doc(localStorage.referrerId)
            .collection("invitation");

          try {
            await dataInvitation.add({
              referrals: userCredential.user.uid,
              total_earnings: db
                .collection("users")
                .doc(localStorage.referrerId)
                .get()
                .then((doc) => doc.data().total_earnings),
            });

            console.log("Referred Id added successfully!");
          } catch (error) {
            console.error("Error adding referred Id:", error);
          }
        }

        await db
          .collection("users")
          .doc(userCredential.user.uid)
          .set({
            email: localStorage.email,
            username: localStorage.userName,
            birthdate: `${localStorage.month}/${localStorage.day}/${localStorage.year}`,
            gender: localStorage.gender,
            fullname: localStorage.full_name,
            account: "active",
            country: localStorage.country,
            total_earnings: 0,
            earnings: 0,
            deposit: 0,
            referrals: 0,
          });

        await userCredential.user.sendEmailVerification();
        notifySuccess();
        setTimeout(() => {
          location.pathname = "/login";
          localStorage.clear();
        }, 5500);
      } catch (err) {
        notifyErr();
        setIsLoading(false);
      }
      addEvent({ event: "You have successfully registered" });
      referredId();

      localStorage.clear();
    }
  };

  useEffect(() => {
    console.log(db.collection("users"));
  }, []); // يتم تشغيل هذا التأثير مرة واحدة عند تحميل المكون

  const notifySuccess = (_) => {
    toast.success(
      " Account has been successfully registered ,please check your email or spam for verification",
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      }
    );
  };

  const notifyErr = (_) => {
    toast.error(" Registration failed!!, please try again", {
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

  const theme = useTheme();

  return (
    <div className="auth">
      <ToastContainer />

      <Box className="borderLine" />

      <form onSubmit={handleFormSubmit}>
        <label>
          <h3 style={{ letterSpacing: ".05rem" }}>
            Complete the registration process
          </h3>
        </label>

        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <Box flexGrow={1} />

          {localStorage.referrer ? (
            <span>
              Referrer:{" "}
              <span style={{ color: theme.palette.info.light }}>
                {localStorage.referrer}
              </span>{" "}
            </span>
          ) : null}
        </Stack>

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

        <Stack direction={"row"}>
          <Box flexGrow={1} />

          <input
            type="submit"
            style={{ pointerEvents: isLoading ? "none" : "auto" }}
            value="Sign up"
          />
        </Stack>
      </form>
    </div>
  );
}

export default Confirm_details;
