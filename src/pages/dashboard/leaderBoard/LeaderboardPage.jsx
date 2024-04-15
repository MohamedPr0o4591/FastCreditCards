import React from "react";
import { Container } from "react-bootstrap";
import "./LeaderboardPage.css";
import { Avatar, Box, Stack } from "@mui/material";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  addDays,
} from "date-fns";
import { auth, db } from "../../../config/firebase";
import crown1 from "../../../assets/leader iconx/crown1.svg";
import crown2 from "../../../assets/leader iconx/crown2.svg";
import crown3 from "../../../assets/leader iconx/crown3.svg";
import Row2 from "../../../components/pages/leaderBoard/Row2";
import Row3 from "../../../components/pages/leaderBoard/Row3";

function LeaderboardPage() {
  return (
    <div className="leader-board-page">
      <Container className="mt-2 p-4 leader-board-container">
        <Stack
          direction={"row"}
          gap={2}
          alignItems={"center"}
          sx={{ color: "aquamarine", pointerEvents: "none" }}
        >
          <h3>weekly leaderboard</h3>
          <Box flexGrow={1} />
        </Stack>
        <div className="box-grid">
          <Row2 cr={crown2} alt="Crown2" top={2} />
          <Row2 cr={crown1} alt="Crown1" top={1} />
          <Row2 cr={crown3} alt="Crown3" top={3} />
        </div>

        <Row3 />
      </Container>
    </div>
  );
}

export default LeaderboardPage;
