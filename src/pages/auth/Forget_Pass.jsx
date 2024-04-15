import React, { useState } from "react";
import "./Auth.css";
import { Box, Button, Paper, Stack, useTheme } from "@mui/material";
import { auth } from "../../config/firebase";

function Forget_Pass() {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(false);
    setResetSent(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // التحقق من وجود البريد الإلكتروني في Firebase
      const signInMethods = await auth.fetchSignInMethodsForEmail(email);
      if (signInMethods) {
        // إذا كان البريد الإلكتروني مسجل، قم بإرسال رسالة إعادة تعيين كلمة المرور
        await auth.sendPasswordResetEmail(email);
        setResetSent(true);
      } else {
        // إذا كان البريد الإلكتروني غير موجود، قم بعرض رسالة خطأ
        setError(true);
      }
    } catch (error) {
      console.error("Error sending reset email:", error.message);
    }
  };

  const theme = useTheme();

  return (
    <div className="auth-page">
      <form
        onSubmit={handleFormSubmit}
        style={{ minWidth: 320 + "px", flexGrow: 0.25 }}
      >
        <Stack gap={2}>
          <h2>Forget Password</h2>

          {error ? (
            <Paper
              sx={{
                background: theme.palette.error.main,
                color: theme.palette.error.contrastText,
                p: 1.5,
              }}
            >
              This e-mail not found
            </Paper>
          ) : null}

          {resetSent ? (
            <Paper
              sx={{
                background: theme.palette.success.main,
                color: theme.palette.success.contrastText,
                p: 1.5,
              }}
            >
              Reset link sent to your e-mail
            </Paper>
          ) : null}
          <div className="input-box">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              required
              name="email"
            />

            <span>Enter your e-mail</span>

            <div className="underLine" />
          </div>

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
