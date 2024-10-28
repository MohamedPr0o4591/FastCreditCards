import { KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";
import { Box, Stack, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import CountryFlag from "react-country-flag";
import { useDispatch, useSelector } from "react-redux";
import { getIpData } from "../redux/actions/allActions";

function Show_details() {
  const nav = useNavigate();

  const ipData = useSelector((state) => state.GET_IP_DATA.data);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (_) => {
    nav("/register/confirm_details");
  };

  useEffect(() => {
    dispatch(getIpData());
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
