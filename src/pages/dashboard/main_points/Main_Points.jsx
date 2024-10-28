import { AttachMoney } from "@mui/icons-material";
import { Box, Button, Paper, Stack } from "@mui/material";
import React, { useState } from "react";

function Main_Points({
  textColor,
  bgColor,
  Card,
  Logo,
  Action,
  ActionColor,
  points,
}) {
  return (
    <Paper
      className="main-points"
      sx={{
        bgcolor: bgColor,
        flexGrow: 1,
      }}
    >
      <div className="inner">
        <Card
          sx={{
            color: textColor,
            fontSize: 4.5 + "rem",
          }}
        />
      </div>

      <Stack direction={"row"} pr={2} pl="100px">
        <Stack gap={2}>
          <Box>
            <p className="fs-4" style={{ color: "red" }}>
              {" "}
              <span className="fw-bold" style={{ color: textColor }}>
                {points > 999 ? points.toLocaleString() : points}{" "}
              </span>{" "}
              Satoshi{" "}
            </p>
          </Box>

          <Button variant="contained" color={ActionColor}>
            {Action}
          </Button>
        </Stack>

        <Box flexGrow={1} />

        <Logo
          sx={{
            fontSize: 5.5 + "rem",
            opacity: 0.5,
            color: textColor,
          }}
        />
      </Stack>
    </Paper>
  );
}

export default Main_Points;
