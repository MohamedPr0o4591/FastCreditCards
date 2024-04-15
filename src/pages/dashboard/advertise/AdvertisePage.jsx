import { Box, Paper, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./AdvertisePage.css";

export default function AdvertisePage() {
  return (
    <div className="advertise-page">
      <h3>Advertise Page</h3>
      <Paper
        sx={{
          background: "#2f4560",
        }}
      >
        <Stack
          direction={"row"}
          gap={1}
          p={2}
          sx={{
            borderRadius: 0.4 + "rem",
          }}
          alignItems={"center"}
        >
          <Link to={"/dashboard/advertise/create"}>
            <span className="fs-2"> +</span> Create Ad
          </Link>

          <Box flexGrow={1} />
        </Stack>

        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Campaign Name</th>
              <th>Status</th>
              <th>Balance</th>
            </tr>
          </thead>
        </table>
        <Box className="text-center w-100 text-light p-3">
          <span>Nothing</span>
        </Box>
      </Paper>
    </div>
  );
}
