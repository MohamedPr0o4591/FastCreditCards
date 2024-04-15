import { KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Stack, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { db } from "../config/firebase";

function Privacy_details() {
  const [userName, setUserName] = useState("");

  const [active, setActive] = useState(false);
  const [err, setErr] = useState(false);

  const navi = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const sanitizedInput = e.target.value.replace(
      /[\s~`!@#$%^&*()_+={}[\]:;,.<>?/"'|\\-]/g,
      ""
    );
    setUserName(sanitizedInput.toLowerCase());
    setErr(false);
  };

  const checkUsernameAvailability = async (username) => {
    try {
      const querySnapshot = await db
        .collection("users")
        .where("username", "==", username)
        .get();

      return querySnapshot.empty; // إذا كانت النتيجة فارغة، فإن اسم المستخدم متاح
    } catch (error) {
      console.error("Error checking username availability:", error.message);
      return false; // يمكنك التعامل مع الخطأ حسب احتياجاتك
    }
  };

  const handleSubmit = async () => {
    setActive(true);
    let flag;

    if (userName.length < 8) {
      flag = false;
    } else {
      flag = await checkUsernameAvailability(userName);
    }

    if (flag) {
      if (localStorage.referrer) {
        navi(`/r/${localStorage.referrer}/show_details`);
      } else {
        navi("/register/show_details");
      }
      localStorage.userName = userName;
    } else {
      // إذا كان اسم المستخدم غير متاح، قم بعرض رسالة تنبيه للمستخدم
      setErr(true);
    }
  };

  const theme = useTheme();

  return (
    <div className="auth">
      <Box className="borderLine" />

      <form onSubmit={handleFormSubmit}>
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <label>
            <h3 style={{ letterSpacing: ".05rem" }}>Sign up</h3>
          </label>

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

        {err && userName !== "" ? (
          <Paper
            sx={{
              p: 1.5,
              background: theme.palette.error.main,
              color: theme.palette.error.contrastText,
              mt: 1,
            }}
          >
            Username is already taken. Please choose another one.
          </Paper>
        ) : null}

        <div className="input-box">
          <input
            type="text"
            value={userName}
            onChange={handleInputChange}
            required
            maxLength={16}
            style={{
              textTransform: "lowercase",
            }}
          />

          <span>Set User Name</span>

          <div className="underLine" />
        </div>

        {active && userName.length < 8 ? (
          <ul
            className="fw-light text-danger p-0 mt-3"
            style={{
              letterSpacing: 0.1 + "rem",
            }}
          >
            <ol className="p-0">
              <span className="fw-bold"> Please! </span> Set User Name and must
              be more than 8 characters
            </ol>
          </ul>
        ) : null}

        <Stack direction={"row"} mt={2} p={2}>
          <Box flexGrow={1} />

          <span className="next_pointer" onClick={handleSubmit}>
            Next
            <KeyboardDoubleArrowRightOutlined />
          </span>
        </Stack>
      </form>
    </div>
  );
}

export default Privacy_details;
