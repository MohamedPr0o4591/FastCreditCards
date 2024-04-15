import React, { useEffect, useReducer, useState } from "react";
import "./Auth.css";
import { Box, IconButton, Paper, Stack } from "@mui/material";
import {
  ChevronRightOutlined,
  KeyboardArrowRightOutlined,
  KeyboardDoubleArrowRightOutlined,
  Man2Outlined,
  Woman2Outlined,
} from "@mui/icons-material";
import { Col, Row } from "react-bootstrap";
import Accordionation from "../../Utilities/Accordionation";
import { Outlet, useNavigate, useParams } from "react-router";
import { db } from "../../config/firebase";

function RegisterPage() {
  const params = useParams();
  useEffect(() => {
    document.title = "Registration | FastCreditCards";

    if (params && params.refId !== undefined) {
      localStorage.referrerId = params.refId;
      db.collection("users")
        .doc(params.refId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            localStorage.referrer = doc.data().username;
          }
        });
    }
  }, []);

  return (
    <div className="auth-page">
      <Row className="w-100">
        <Col sm={12} lg={6}>
          <Outlet />
        </Col>

        <Col
          sm={12}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.6 + "rem",
          }}
        >
          <span
            style={{
              fontSize: 3 + "rem",
              color: "#efef",
            }}
          >
            FAQS
          </span>

          <span
            style={{
              color: "#efef",
              opacity: 0.6,
              letterSpacing: 0.1 + "rem",
            }}
          >
            frequently asked questions have been answered
          </span>

          <Accordionation />
        </Col>
      </Row>
    </div>
  );
}

export default RegisterPage;
