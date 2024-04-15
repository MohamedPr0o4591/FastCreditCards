import {
  KeyboardDoubleArrowRightOutlined,
  Man2Outlined,
  Woman2Outlined,
} from "@mui/icons-material";
import { Box, IconButton, Paper, Stack, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BirthdaySelector from "./BirthdayPicker";

function More_details() {
  const [gender, setGender] = useState(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    localStorage.gender = gender;
  }, [gender]);

  const navi = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (_) => {
    setActive(true);
    let flag;

    if (
      gender === null ||
      localStorage.day === "" ||
      localStorage.month == "" ||
      localStorage.year === ""
    ) {
      flag = false;
    } else flag = true;

    if (flag) {
      if (localStorage.referrer) {
        navi(`/r/${localStorage.referrer}/privacy_details`);
      } else navi("/register/privacy_details");
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

        <Stack direction="row" mt={2} alignItems={"center"}>
          <span>Select your gender:</span>

          <Box flexGrow={1} />

          <Stack direction="row" gap={2}>
            <Stack alignItems={"center"}>
              <IconButton
                sx={{
                  color: `${gender == "man" ? "#000dca" : "#efef"}`,
                  transition: "all .228s",
                }}
                onClick={(_) => setGender("man")}
              >
                <Man2Outlined sx={{ fontSize: 2 + "rem" }} />
              </IconButton>

              <label>Man</label>
            </Stack>

            <Stack alignItems={"center"}>
              <IconButton
                sx={{
                  color: `${gender == "woman" ? "#ff0ae4" : "#efef"}`,
                  transition: "all .228s",
                }}
                onClick={(_) => setGender("woman")}
              >
                <Woman2Outlined sx={{ fontSize: 2 + "rem" }} />
              </IconButton>

              <label>Woman</label>
            </Stack>
          </Stack>
        </Stack>

        <Box mt={4}>
          <BirthdaySelector />
        </Box>

        {(active && gender === null) ||
        (active && localStorage.day === "") ||
        (active && localStorage.month === "") ||
        (active && localStorage.year === "") ? (
          <ul
            className="mt-4 text-danger fw-light m-0 p-0"
            style={{
              letterSpacing: ".1rem",
            }}
          >
            <ol className="p-0 ">
              <span className="fw-bold"> Please! </span> Select your gender and
              Set your birth date
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

export default More_details;
