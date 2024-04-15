import React from "react";
import "./Footer.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { Col, Row } from "react-bootstrap";
import {
  FacebookOutlined,
  Telegram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <Row className="w-100 border-bottom pb-3">
        <Col
          sm={12}
          lg={3}
          className="d-flex flex-column py-2"
          style={{
            gap: 1.2 + "rem",
          }}
        >
          <h3
            style={{
              cursor: "pointer",
            }}
            onClick={(_) => navigate("/")}
          >
            FastCreditCards
          </h3>

          <span className="text-light fs-5 fw-light">
            FastCreditCards is the Best Crypto Earning and Advertising Platform.
            Payou think about user that is why you get the highest rewards!
          </span>
        </Col>

        <Col
          sm={12}
          lg={3}
          className="d-flex flex-column py-2"
          style={{
            gap: 1.2 + "rem",
          }}
        >
          <h4
            className="text-light"
            style={{
              cursor: "pointer",
            }}
            onClick={(_) => navigate("/")}
          >
            About
          </h4>

          <ul className="list-unstyled p-0 m-0 d-flex gap-2 flex-column">
            <li>
              <Link to={"/privacy"}>Privacy Policy</Link>
            </li>

            <li>
              <Link to={"/service"}>Terms of Service</Link>
            </li>

            <li>
              <Link to={"/cookies"}>Cookies Policy</Link>
            </li>
          </ul>
        </Col>

        <Col
          sm={12}
          lg={3}
          className="d-flex flex-column py-2"
          style={{
            gap: 1.2 + "rem",
          }}
        >
          <h4
            className="text-light"
            style={{
              cursor: "pointer",
            }}
            onClick={(_) => navigate("/")}
          >
            About Us
          </h4>

          <span className="text-light fs-5 fw-light">
            We have many of new features. These are Quiz, No Timer Faucet, Play
            Games, PTC ADS, Offerwall, Survey, Shortlink, Simple Tasks and Many
            More Option
          </span>
        </Col>

        <Col
          sm={12}
          lg={3}
          className="d-flex flex-column py-2"
          style={{
            gap: 1.2 + "rem",
          }}
        >
          <h4
            className="text-light"
            style={{
              cursor: "pointer",
            }}
            onClick={(_) => navigate("/")}
          >
            Community
          </h4>

          <ul className="list-unstyled m-0 p-0 d-flex flex-wrap gap-2">
            <li className="p-0 ">
              <a href="https://www.facebook.com/lmohamedmokhtarl/">
                <FacebookOutlined
                  sx={{ fontSize: 1.7 + "rem", color: "#32cccc" }}
                />
              </a>
            </li>

            <li className="p-0 ">
              <a href="https://t.me/mohamedpr0o459">
                <Telegram sx={{ fontSize: 1.7 + "rem", color: "#32cccc" }} />
              </a>
            </li>

            <li className="p-0 ">
              <a href="https://api.whatsapp.com/send/?phone=%2B201022585956&text&type=phone_number&app_absent=0">
                <WhatsApp sx={{ fontSize: 1.7 + "rem", color: "#32cccc" }} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <span className="text-center text-light w-100 mt-2">
          Copyright© FastCreditCards 2024 | All Rights Reserved
        </span>
      </Box>
    </div>
  );
}

export default Footer;
