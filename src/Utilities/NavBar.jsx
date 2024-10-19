import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { Container } from "react-bootstrap";
import { Box, Button, IconButton, Stack, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  Logout,
  Person,
  Person3,
  PowerSettingsNewRounded,
} from "@mui/icons-material";
import { auth } from "../config/firebase";

function NavBar() {
  const myDifRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = (_) => {
      if (window.scrollY > 50) {
        myDifRef.current.style.background =
          "linear-gradient(45deg, black 5% , rgb(24, 40, 61) ,rgb(24, 40, 61) ,rgb(24, 40, 61))";
        myDifRef.current.style.boxShadow = `0 0rem .3rem rgba(127, 255, 212, 40%)`;
      } else {
        myDifRef.current.style.background = "none";
        myDifRef.current.style.boxShadow = `none`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = (_) => {
    localStorage.clear();
    location.reload();
    auth.signOut();
  };

  const theme = useTheme();

  return (
    <div className="app-bar" ref={myDifRef}>
      {!localStorage.user ? (
        <Container>
          <Stack direction={"row"} alignItems={"center"}>
            <h3
              style={{
                cursor: "pointer",
              }}
              onClick={(_) => navigate("/")}
            >
              FastCreditCards
            </h3>

            <Box flex={1} />

            <Stack direction={"row"} gap={10 + "px"}>
              <button
                onClick={(_) => navigate("/login")}
                className={`login-btn ${
                  location.pathname.includes("/login") && "d-none"
                }`}
              >
                Have an account
              </button>

              <div
                className={`container-btn 
                   ${location.pathname.includes("/register") && "d-none"}
                  `}
                onClick={(_) => navigate("/register/full_name")}
              >
                {Array.from({ length: 6 }, (_, index) => (
                  <i key={index} className={`hover bt-${index + 1}`} />
                ))}

                <button />
              </div>
            </Stack>
          </Stack>
        </Container>
      ) : (
        <Stack
          direction={"row"}
          gap={2}
          width="100%"
          pr={3}
          alignItems={"center"}
        >
          <Box
            sx={{
              width: 25 + "vw",
              px: 10 + "px",
            }}
          >
            <h3
              style={{
                cursor: "pointer",
              }}
              onClick={(_) => navigate("/dashboard")}
            >
              FastCreditCards
            </h3>

            <Box flex={1} />
          </Box>

          <Box>
            <Link
              to="/dashboard/profile"
              style={{
                textDecoration: "none",
                fontSize: 1.2 + "em",
              }}
            >
              <p className="d-flex align-items-center justify-content-center gap-2 m-0">
                {" "}
                {localStorage.gender === "man" ? (
                  <Person sx={{ color: "aquamarine" }} />
                ) : (
                  <Person3 sx={{ color: "aquamarine" }} />
                )}{" "}
                {localStorage.fullName}
              </p>
            </Link>
          </Box>

          <Box flexGrow={1} />

          <IconButton
            sx={{
              bgcolor: "#27344d",
              color: "#efef",
            }}
            onClick={handleLogOut}
          >
            <PowerSettingsNewRounded />
          </IconButton>
        </Stack>
      )}
    </div>
  );
}

export default NavBar;
