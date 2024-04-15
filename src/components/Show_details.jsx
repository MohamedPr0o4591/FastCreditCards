import {
  DangerousRounded,
  KeyboardDoubleArrowRightOutlined,
} from "@mui/icons-material";
import { Box, Paper, Stack, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import CountryFlag from "react-country-flag";

function Show_details() {
  const navi = useNavigate();

  const [ipData, setIpData] = useState({});
  const [riskColor, setRiskColor] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (_) => {
    if (localStorage.referrer) {
      navi(`/r/${localStorage.referrer}/confirm_details`);
    } else navi("/register/confirm_details");
  };

  useEffect(() => {
    // استخدام ipinfo.io للحصول على معلومات الـ IP
    axios
      .get("https://ipinfo.io/json?token=fbf02ef6890d78")
      .then((response) => {
        setIpData(response.data);

        // تحديد لون الريسك بناءً على النسبة
        const riskScore = parseInt(response.data.riskScore || 0);
        if (riskScore <= 27) {
          setRiskColor("green");
        } else if (riskScore <= 58) {
          setRiskColor("orange");
        } else {
          setRiskColor("red");
        }
      })
      .catch((error) => console.error("Error fetching IP data:", error));
  }, []);

  const theme = useTheme();

  const handleCancel = (_) => {
    location.pathname = "/";
    localStorage.clear();
  };

  useEffect(() => {
    localStorage.country = ipData.country;
  }, [ipData.country]);
  return (
    <div className="auth">
      <Box className="borderLine" />

      <form onSubmit={handleFormSubmit}>
        <label>
          <h3 style={{ letterSpacing: ".05rem" }}>Show details</h3>
        </label>

        <Stack gap={1.3} mt={2}>
          <Stack direction={"row"} alignItems={"center"} gap={1.4}>
            <h6 className="m-0">User name:</h6>

            <span
              style={{
                textTransform: "lowercase",
                color: "orange",
              }}
            >
              {localStorage.userName}
            </span>
          </Stack>

          <Stack direction={"row"} alignItems={"center"} gap={1.4}>
            <h6 className="m-0">Full Name:</h6>

            <span
              style={{
                color: "orange",
              }}
            >
              {localStorage.full_name}
            </span>
          </Stack>

          <Stack direction={"row"} alignItems={"center"} gap={1.4}>
            <h6 className="m-0">E-mail address:</h6>

            <span
              style={{
                color: "orange",
              }}
            >
              {localStorage.email}
            </span>
          </Stack>

          <Stack direction={"row"} alignItems={"center"} gap={1.4}>
            <h6 className="m-0">Gender:</h6>

            <span
              style={{
                color: "orange",
              }}
            >
              {localStorage.gender}
            </span>
          </Stack>

          <Stack direction={"row"} alignItems={"center"} gap={1.4}>
            <h6 className="m-0">Birth Date:</h6>

            <span
              style={{
                color: "orange",
              }}
            >
              {localStorage.day}/{localStorage.month}/{localStorage.year}
            </span>
          </Stack>

          <div>
            <h2> IP Details:</h2>
            <p>
              IP:{" "}
              <span style={{ color: "orange" }}>
                {
                  // @ts-ignore
                  ipData.ip
                }
              </span>
            </p>
            <p>
              Country:{" "}
              <span style={{ color: "orange" }}>
                {" "}
                {
                  // @ts-ignore
                  ipData.country
                }{" "}
              </span>{" "}
              {ipData.country ? (
                <>
                  <CountryFlag countryCode={ipData.country} svg />
                </>
              ) : null}
            </p>
            {localStorage.referrer ? (
              <p>
                Referrer ID:{" "}
                <span style={{ color: theme.palette.info.main }}>
                  {localStorage.referrer}
                </span>
              </p>
            ) : null}
          </div>
        </Stack>

        <Stack direction={"row"} mt={2} p={2}>
          <span className="next_pointer" onClick={handleCancel}>
            Cancel
          </span>

          <Box flexGrow={1} />

          <span className="next_pointer" onClick={handleSubmit}>
            Confirm
            <KeyboardDoubleArrowRightOutlined />
          </span>
        </Stack>
      </form>
    </div>
  );
}

export default Show_details;
