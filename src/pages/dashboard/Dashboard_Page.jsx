import React, { useEffect } from "react";
import "./Dashboard_Page.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
} from "@mui/material";
import {
  Dashboard,
  Diversity1,
  ImagesearchRoller,
  LocalOffer,
  Person,
  Summarize,
  VisibilityRounded,
  WaterfallChart,
} from "@mui/icons-material";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./../../redux/actions/allActions";

const Dashboard_Page = () => {
  const nav = useNavigate();
  const loc = useLocation();

  const isAuth = useSelector((state) => state.CHECK_AUTH.data);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Earns | FastCreditCards";

    async function checkAuthentication() {
      if (localStorage.token || sessionStorage.token) {
        dispatch(checkAuth(localStorage.token || sessionStorage.token));
      } else {
        nav("/login");
      }
    }

    checkAuthentication();
  }, []);

  useEffect(() => {
    if (isAuth.message && isAuth.message !== "Authorized") {
      nav("/login");
      localStorage.clear();
      sessionStorage.clear();
    }
  }, [isAuth]);

  return (
    <div className="dashboard_page">
      <Stack direction={"row"}>
        <div className="dashboard_menu">
          <ul className="list-unstyled fs-5 text-left m-0">
            <li
              style={{
                background: `${
                  loc.pathname === "/dashboard" ? "#2f4560" : "content-box"
                }`,
              }}
            >
              <Link to="/dashboard">
                <p className="m-0 d-flex align-items-center gap-2">
                  {" "}
                  <Dashboard /> Dashboard
                </p>
              </Link>
            </li>

            <li>
              <Accordion
                sx={{
                  background: "none",
                  color: "#efef",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#efef" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    px: 10 + "px",
                  }}
                >
                  <p className="m-0 d-flex align-items-center gap-2">
                    {" "}
                    <VisibilityRounded /> Earns Via Ads
                  </p>
                </AccordionSummary>
                <AccordionDetails className="p-0">
                  <ol
                    className="list-unstyled m-0 p-0"
                    style={{
                      transition: "all .228s",
                      background: "rgb(47 69 96 / 10%)",
                    }}
                  >
                    <li
                      style={{
                        transition: "all .228s",
                        background: `${
                          loc.pathname === "/dashboard/ads-surf"
                            ? "#2f4560"
                            : "content-box"
                        }`,
                      }}
                      className="ps-4 fw-light"
                    >
                      <Link to="/dashboard/ads-surf">
                        <p className="m-0 d-flex align-items-center gap-2">
                          {" "}
                          Surf Ads
                        </p>
                      </Link>
                    </li>

                    <li
                      style={{
                        transition: "all .228s",
                        background: `${
                          loc.pathname === "/dashboard/ads-active"
                            ? "#2f4560"
                            : "content-box"
                        }`,
                      }}
                      className="ps-4 fw-light"
                    >
                      <Link to="/dashboard/ads-active">
                        <p className="m-0 d-flex align-items-center gap-2">
                          {" "}
                          Window Ads
                        </p>
                      </Link>
                    </li>

                    <li
                      style={{
                        transition: "all .228s",
                        background: `${
                          loc.pathname === "/dashboard/ads-article"
                            ? "#2f4560"
                            : "content-box"
                        }`,
                      }}
                      className="ps-4 fw-light"
                    >
                      <Link to="/dashboard/ads-article">
                        <p className="m-0 d-flex align-items-center gap-2">
                          {" "}
                          Article Ads
                        </p>
                      </Link>
                    </li>
                  </ol>
                </AccordionDetails>
              </Accordion>
            </li>

            <li
              style={{
                background: `${
                  loc.pathname === "/dashboard/offers"
                    ? "#2f4560"
                    : "content-box"
                }`,
              }}
            >
              <Link to="/dashboard/offers">
                <p className="m-0 d-flex align-items-center gap-2">
                  {" "}
                  <LocalOffer /> Offers
                </p>
              </Link>
            </li>

            <li
              style={{
                background: `${
                  loc.pathname === "/dashboard/advertise"
                    ? "#2f4560"
                    : "content-box"
                }`,
              }}
            >
              <Link to="/dashboard/advertise">
                <p className="m-0 d-flex align-items-center gap-2">
                  {" "}
                  <WaterfallChart /> Advertise
                </p>
              </Link>
            </li>

            <li>
              <Accordion
                sx={{
                  background: "none",
                  color: "#efef",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#efef" }} />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    px: 10 + "px",
                  }}
                >
                  <p className="m-0 d-flex align-items-center gap-2">
                    {" "}
                    <Diversity1 /> Affiliate
                  </p>
                </AccordionSummary>
                <AccordionDetails className="p-0">
                  <ol
                    className="list-unstyled m-0 p-0"
                    style={{
                      transition: "background .228s",
                      background: "rgb(47 69 96 / 10%)",
                    }}
                  >
                    <li
                      style={{
                        transition: "background .228s",
                        background: `${
                          loc.pathname === "/dashboard/referrals"
                            ? "#2f4560"
                            : "content-box"
                        }`,
                      }}
                      className="ps-4 fw-light"
                    >
                      <Link to="/dashboard/referrals">
                        <p className="m-0 d-flex align-items-center gap-2">
                          {" "}
                          Referrals
                        </p>
                      </Link>
                    </li>

                    <li
                      style={{
                        transition: "background .228s",
                        background: `${
                          loc.pathname === "/dashboard/affiliate-leaderboard"
                            ? "#2f4560"
                            : "content-box"
                        }`,
                      }}
                      className="ps-4 fw-light"
                    >
                      <Link to="/dashboard/affiliate-leaderboard">
                        <p className="m-0 d-flex align-items-center gap-2">
                          {" "}
                          Leaderboard
                        </p>
                      </Link>
                    </li>

                    <li
                      style={{
                        transition: "background .228s",
                        background: `${
                          loc.pathname === "/dashboard/promo-materials"
                            ? "#2f4560"
                            : "content-box"
                        }`,
                      }}
                      className="ps-4 fw-light"
                    >
                      <Link to="/dashboard/promo-materials">
                        <p className="m-0 d-flex align-items-center gap-2">
                          {" "}
                          Promo Materials
                        </p>
                      </Link>
                    </li>

                    <li
                      style={{
                        transition: "background .228s",
                        background: `${
                          loc.pathname === "/dashboard/system-market"
                            ? "#2f4560"
                            : "content-box"
                        }`,
                      }}
                      className="ps-4 fw-light"
                    >
                      <Link to="/dashboard/system-market">
                        <p className="m-0 d-flex align-items-center gap-2">
                          {" "}
                          Markets
                        </p>
                      </Link>
                    </li>
                  </ol>
                </AccordionDetails>
              </Accordion>
            </li>

            <li
              style={{
                background: `${
                  loc.pathname === "/dashboard/history"
                    ? "#2f4560"
                    : "content-box"
                }`,
              }}
            >
              <Link to="/dashboard/history">
                <p className="m-0 d-flex align-items-center gap-2">
                  {" "}
                  <Summarize /> History
                </p>
              </Link>
            </li>

            <li
              style={{
                background: `${
                  loc.pathname === "/dashboard/themes"
                    ? "#2f4560"
                    : "content-box"
                }`,
              }}
            >
              <Link to="/dashboard/themes">
                <p className="m-0 d-flex align-items-center gap-2">
                  {" "}
                  <ImagesearchRoller /> Themes
                </p>
              </Link>
            </li>

            <li
              style={{
                background: `${
                  loc.pathname === "/dashboard/profile"
                    ? "#2f4560"
                    : "content-box"
                }`,
              }}
            >
              <Link to="/dashboard/profile">
                <p className="m-0 d-flex align-items-center gap-2">
                  {" "}
                  <Person /> Profile
                </p>
              </Link>
            </li>
          </ul>
        </div>

        <Box
          sx={{
            p: "100px 20px",
            width: 75 + "vw",
          }}
        >
          <Outlet />
        </Box>
      </Stack>
    </div>
  );
};

export default Dashboard_Page;
