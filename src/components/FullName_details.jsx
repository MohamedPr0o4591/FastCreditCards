import { KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Stack, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function FullName_details() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [refName, setRefName] = useState("");

  const [active, setActive] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const nav = useNavigate();
  var theme = useTheme();

  useEffect(() => {
    localStorage.full_name = fullName;
    localStorage.email = `${email}@gmail.com`;
  }, [fullName, email]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  async function handleSubmit() {
    setActive(true);
    let flag;

    if (email === "" || confirmEmail !== email || fullName.length < 8) {
      flag = false;
    } else flag = true;

    if (flag) {
      const formData = new FormData();
      formData.append("u_email", localStorage.email);

      try {
        const res = await axios.post(
          `${
            import.meta.env.VITE_API_HOST
          }/fastCreditCards/auth/checkEmailExists.php`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        nav("/register/more_details");
      } catch (err) {
        setEmailErr(true);
      }
    }
  }

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
              <li className="m-0 p-0">
                <span className="fw-bold"> Full Name </span> Must be at least 8
                characters
              </li>
            )}

            {email == "" && (
              <li className="m-0 p-0">
                <span className="fw-bold"> E-mail </span> Required
              </li>
            )}

            {confirmEmail != email && (
              <li className="m-0 p-0">
                <span className="fw-bold"> E-mail </span> Don't match
              </li>
            )}
          </ul>
        ) : null}

        <Stack direction={"row"} mt={2} p={2}>
          <div className="input-box" style={{ flexGrow: 1 }}>
            <input
              type="text"
              value={refName}
              onChange={(e) => setRefName(e.target.value)}
              required
              name="fullName"
              maxLength={20}
            />

            <span>Referral username (optional)</span>

            <div className="underLine" />
          </div>
          <Box flexGrow={1} />

          <div className="d-flex align-items-end">
            <span className="next_pointer" onClick={handleSubmit}>
              Next
              <KeyboardDoubleArrowRightOutlined />
            </span>
          </div>
        </Stack>
      </form>
    </div>
  );
}

export default FullName_details;
