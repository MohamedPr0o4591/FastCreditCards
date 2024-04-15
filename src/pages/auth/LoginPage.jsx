import React, { useEffect, useState } from "react";
import "./Auth.css";
import { Col, Row } from "react-bootstrap";
import { Box, Paper, Stack, useTheme } from "@mui/material";
import { auth, db } from "./../../config/firebase";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const initialState = {
    email: "",
    password: "",
  };

  const [input, setInput] = useState(initialState);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target }) => {
    let sanitizedInput;

    if (target.name === "email") {
      sanitizedInput = target.value.replace(
        /[\s~`!@#$%^&*()+={}[\]:;,<>?/"'|\\-]/g,
        ""
      );
    } else sanitizedInput = target.value;

    setInput({
      ...input,
      [target.name]: sanitizedInput,
    });
    setError(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        `${input.email}@gmail.com`,
        input.password
      );

      localStorage.setItem("user", userCredential.user.uid);
      localStorage.setItem("email", userCredential.user.email);
      localStorage.setItem(
        "created",
        userCredential.user.metadata.creationTime
      );

      if (userCredential.user.emailVerified) {
        const userData = await getUserDataFromFirestore(
          userCredential.user.uid
        );
        if (userData && !error) {
          localStorage.userName = userData.username;
          localStorage.bithDate = userData.birthdate;
          localStorage.gender = userData.gender;
          localStorage.fullName = userData.fullname;
        }

        setInput(initialState);
        notifySuccess();
        setTimeout(() => {
          location.pathname = "/dashboard";
        }, 2000);
      } else {
        setError("NotVerified");
      }
    } catch (err) {
      if (err.code === "auth/user-disabled") {
        setError("Banned");
      } else {
        notifyErr();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getUserDataFromFirestore = async (uid) => {
    try {
      const userDoc = await db.collection("users").doc(uid).get();
      if (userDoc.exists) {
        return userDoc.data();
      } else {
        console.error("User data not found in Firestore");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data from Firestore:", error.message);
      return null;
    }
  };

  const notifySuccess = () => {
    toast.success(" Acceptable login process", {
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

  const notifyErr = () => {
    toast.error(" Please, Enter a valid email and password!!", {
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

  useEffect(() => {
    document.title = "Login | FastCreditCards";
  }, []);

  const theme = useTheme();

  return (
    <div className="auth-page">
      <ToastContainer />
      <Row className="w-100">
        <Col sm={12} lg={6}>
          <div className="auth">
            <Box className="borderLine" />

            <form onSubmit={handleFormSubmit}>
              <label>
                <h3 style={{ letterSpacing: ".05rem" }}>Sign in</h3>
              </label>
              {error === "Banned" ? (
                <Paper
                  sx={{
                    p: 1.5,
                    backgroundColor: theme.palette.error.main,
                    color: theme.palette.error.contrastText,
                    mt: 1.5,
                  }}
                >
                  YOU ARE BANNED !!
                </Paper>
              ) : error === "NotVerified" ? (
                <Paper
                  sx={{
                    p: 1.5,
                    backgroundColor: theme.palette.error.main,
                    color: theme.palette.error.contrastText,
                    mt: 1.5,
                  }}
                >
                  YOU ARE NOT VERIFIED!! ,Please check your email or spam
                </Paper>
              ) : null}

              <Paper
                sx={{
                  backgroundColor: theme.palette.info.main,
                  color: theme.palette.info.contrastText,
                  p: 1.5,
                  mt: 1,
                }}
              >
                Enter your email without @gmail.com
              </Paper>

              <div className="input-box">
                <input
                  type="text"
                  value={input.email}
                  onChange={handleChange}
                  required
                  name="email"
                  autoComplete="off"
                />

                <div className="overlay">@gmail.com</div>

                <span>E-mail</span>

                <div className="underLine" />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  value={input.password}
                  onChange={handleChange}
                  required
                  name="password"
                />

                <span>Password</span>

                <div className="underLine" />
              </div>

              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Link to="/login/forget_password" style={{ color: "#0ef" }}>
                  Forget password
                </Link>

                <Box flexGrow={1} />

                <input
                  type="submit"
                  style={{ pointerEvents: isLoading ? "none" : "auto" }}
                  value="Login"
                />
              </Stack>
            </form>
          </div>
        </Col>

        <Col
          sm={12}
          lg={6}
          className="login-banner position-relative d-flex flex-column overflow-hidden"
        >
          <h2 className="animated-text">
            Earn rewards by: playing games .. taking surveys .. surfing websites
          </h2>

          <img src="../../../public/bitcoin.png" alt="" className="w-100" />
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
