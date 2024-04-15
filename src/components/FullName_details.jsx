import { KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Stack, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { db } from "../config/firebase";

function FullName_details() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  const [active, setActive] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const navi = useNavigate();
  var theme = useTheme();

  useEffect(() => {
    localStorage.full_name = fullName;
    localStorage.email = `${email}@gmail.com`;
  }, [fullName, email]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (_) => {
    setActive(true);
    let flag;

    if (email === "" || confirmEmail !== email || fullName.length < 8) {
      flag = false;
    } else {
      try {
        // استعلام للتحقق من وجود البريد في Firestore
        const querySnapshot = await db
          .collection("users")
          .where("email", "==", localStorage.email)
          .get();

        // إذا كانت النتيجة فارغة، فإن البريد غير مسجل من قبل
        if (querySnapshot.empty) {
          flag = true;
        } else {
          // إذا كان البريد مسجل من قبل، يمكنك إجراء الإجراء المناسب هنا
          setEmailErr(true);
        }
      } catch (error) {
        console.error("Error checking email in Firestore:", error.message);
        // يمكنك التعامل مع الخطأ حسب احتياجاتك
      }
    }

    if (flag) {
      if (localStorage.referrer) {
        navi(`/r/${localStorage.referrer}/more_details`);
      } else navi("/register/more_details");
    }
  };

  const handleEmailChange = (e) => {
    const sanitizedInput = e.target.value.replace(
      /[\s~`!@#$%^&*()+={}[\]:;,<>?/"'|\\-]/g,
      ""
    );
    setEmail(sanitizedInput);
    setEmailErr(false);
  };

  const handleConfEmailChange = (e) => {
    const sanitizedInput = e.target.value.replace(
      /[\s~`!@#$%^&*()+={}[\]:;,<>?/"'|\\-]/g,
      ""
    );
    setConfirmEmail(sanitizedInput);
  };

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

        {emailErr ? (
          <Paper
            sx={{
              background: theme.palette.error.main,
              color: theme.palette.error.contrastText,
              p: 1.5,
              mt: 1.5,
            }}
          >
            Email is already in use ,please use another email
          </Paper>
        ) : null}

        <div className="input-box">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            name="fullName"
            maxLength={20}
          />

          <span>Full Name</span>

          <div className="underLine" />
        </div>

        <Paper
          sx={{
            mt: 2,
            p: 1,
            background: "aqua",
          }}
        >
          <span>We only allow Gmail accounts</span>
        </Paper>

        <div className="input-box">
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
            name="email"
            autoComplete="off"
          />
          <span>Enter e-mail address</span>
          <div className="underLine" />
          <p>@gmail.com</p>
        </div>

        <div className="input-box">
          <input
            type="text"
            value={confirmEmail}
            onChange={handleConfEmailChange}
            required
            name="confirmEmail"
            autoComplete="off"
          />
          <span>Confirm your e-mail address</span>
          <div className="underLine" />

          <p>@gmail.com</p>
        </div>

        {(active && fullName.length < 8) ||
        (active && email == "") ||
        (active && confirmEmail != email) ? (
          <ul
            className="mt-4 text-danger fw-light m-0 p-0"
            style={{
              letterSpacing: ".1rem",
            }}
          >
            {fullName.length < 8 && (
              <ol className="m-0 p-0">
                <span className="fw-bold"> Full Name </span> Must be at least 8
                characters
              </ol>
            )}

            {email == "" && (
              <ol className="m-0 p-0">
                <span className="fw-bold"> E-mail </span> Required
              </ol>
            )}

            {confirmEmail != email && (
              <ol className="m-0 p-0">
                <span className="fw-bold"> E-mail </span> Don't match
              </ol>
            )}
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

export default FullName_details;
