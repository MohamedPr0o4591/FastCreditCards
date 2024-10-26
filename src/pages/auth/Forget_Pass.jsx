import React, { useState } from "react";
import "./Auth.css";
import { Box, Button, Paper, Stack, useTheme } from "@mui/material";
import FlashCircle from "../../components/utilities/FlashCircle";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router";

function Forget_Pass() {
  const initialState = {
    veriCode: "",
    newPass: "",
    confirmPass: "",
  };

  const [email, setEmail] = useState("");
  const [updatesInput, setUpdatesInput] = useState(initialState);
  const [error, setError] = useState("");

  const [codeReq, setCodeReq] = useState("");

  const nav = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (codeReq !== "" && codeReq == updatesInput.veriCode) {
      if (
        updatesInput.newPass === updatesInput.confirmPass &&
        updatesInput.newPass.length >= 8
      ) {
        const data = new URLSearchParams();

        data.append("u_newPass", updatesInput.newPass);
        data.append("u_email", email);

        try {
          await axios.post(
            `${import.meta.env.VITE_API_HOST}/auth/forgetPass.php`,
            data,
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          notify("success", "Password updated successfully");

          setTimeout(() => {
            nav("/login");
          }, 3000);
        } catch (err) {
          setError("Error updating password");
        }
      } else {
        setError("password must be at least 8 characters long and match");
      }
    } else if (codeReq !== "" && updatesInput.veriCode != codeReq) {
      setError("Invalid verification code");
    } else {
      const data = new URLSearchParams();

      data.append("u_email", email);

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_HOST}/auth/checkEmailExists.php`,
          data,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        setError("This e-mail not found");
      } catch (err) {
        const verificationCode = Math.floor(100000 + Math.random() * 900000);
        const templateParams = {
          to_user: email,
          reset_code: verificationCode,
        };

        emailjs
          .send(
            import.meta.env.VITE_SERVICE_SUPER_ID,
            import.meta.env.VITE_TEMPLATE_SUPER_RESET_PASSWORD_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_SUPER_PUBLIC_KEY
          )
          .then((_) => {
            setCodeReq(verificationCode);
          });
      }
    }
  }

  const notify = (status, msg) => {
    toast[status](msg, {
      position: "top-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const theme = useTheme();

  return (
    <div className="auth-page">
      <FlashCircle />

      <form
        onSubmit={handleFormSubmit}
        style={{ minWidth: 320 + "px", flexGrow: 0.25 }}
        className="forget-pass-form"
      >
        <Stack gap={2}>
          <h4>Forget Password</h4>

          {error !== "" ? (
            <Paper
              sx={{
                background: theme.palette.error.main,
                color: theme.palette.error.contrastText,
                p: 1.5,
              }}
            >
              {error}
            </Paper>
          ) : null}

          {codeReq !== "" ? (
            <Paper
              sx={{
                background: theme.palette.success.main,
                color: theme.palette.success.contrastText,
                p: 1.5,
              }}
            >
              Reset code sent to your e-mail
            </Paper>
          ) : null}

          <div className="position-relative">
            <div className={`input-box ${codeReq !== "" && "disabled"}`}>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                required
              />

              <span>Enter your e-mail</span>

              <div className="underLine" />
            </div>

            {codeReq !== "" && (
              <Button
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 10 + "px",
                }}
                color="success"
                onClick={(_) => setCodeReq("")}
              >
                Edit email
              </Button>
            )}
          </div>

          {codeReq !== "" && (
            <>
              <div className="input-box">
                <input
                  type="password"
                  value={updatesInput.newPass}
                  onChange={(e) =>
                    setUpdatesInput({
                      ...updatesInput,
                      newPass: e.target.value,
                    })
                  }
                  required
                />

                <span>Enter your new password</span>

                <div className="underLine" />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  value={updatesInput.confirmPass}
                  onChange={(e) =>
                    setUpdatesInput({
                      ...updatesInput,
                      confirmPass: e.target.value,
                    })
                  }
                  required
                />

                <span>Confirm password</span>

                <div className="underLine" />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  value={updatesInput.veriCode}
                  onChange={(e) =>
                    setUpdatesInput({
                      ...updatesInput,
                      veriCode: e.target.value,
                    })
                  }
                  required
                />

                <span>Enter the verification code</span>

                <div className="underLine" />
              </div>
            </>
          )}

          <Box>
            <Button variant="contained" type="submit" color="success">
              Reset Password
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  );
}

export default Forget_Pass;
