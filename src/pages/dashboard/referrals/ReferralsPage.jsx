import { Box, Paper, Stack } from "@mui/material";
import React from "react";
import Row1 from "../../../components/pages/referrals/Row1";
import Row2 from "../../../components/pages/referrals/Row2";
import "./ReferralsPage.css";
import Row3 from "../../../components/pages/referrals/Row3";

export default function ReferralsPage() {
  return (
    <div className="referrals-page">
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}
