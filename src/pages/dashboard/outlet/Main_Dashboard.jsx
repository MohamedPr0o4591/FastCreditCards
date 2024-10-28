import { Box, Button, Paper, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Main_Points from "../main_points/Main_Points";
import {
  CurrencyBitcoin,
  Savings,
  ShoppingCart,
  Shop,
  PersonSearch,
  PersonAdd,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../../../redux/actions/allActions";
import "./Main_Dashboard.css";
import SlideOffers from "../../../components/Offers/SlideOffers";

function Main_Dashboard() {
  const [currentLevel, setCurrentLevel] = useState("Standard");
  const userData = useSelector((state) => state.CHECK_AUTH.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth(localStorage.token || sessionStorage.token));
  }, []);

  return (
    <div className="main-dashboard">
      <Box className="flex-wrap">
        <Main_Points
          textColor="#db6c3f"
          bgColor="#2f4560"
          Card={CurrencyBitcoin}
          Logo={Savings}
          ActionColor="error"
          Action="Cash Out"
          points={userData?.user?.points.earn}
        />

        <Main_Points
          textColor="#07ced9"
          bgColor="#2f4560"
          Card={Shop}
          Logo={ShoppingCart}
          Action="Deposit"
          ActionColor="info"
          points={userData?.user?.points.deposit}
        />

        <Main_Points
          textColor="#0e6"
          bgColor="#2f4560"
          Card={PersonSearch}
          Logo={PersonAdd}
          Action="Get Referral Link"
          ActionColor="success"
          points={userData?.user?.points.affiliate}
        />
      </Box>

      <Box>
        <h4 className="current-level"> Current Level: </h4>

        <Paper
          sx={{
            bgcolor: "#7f87bb47",
            p: 2,
          }}
        >
          <Stack gap={1}>
            <p
              className="m-0 fs-5 flex-wrap align-items-center"
              style={{ color: "aquamarine" }}
            >
              {" "}
              Level:{" "}
              <span
                className="fs-5 fw-light"
                style={{
                  color: `${
                    currentLevel === "Standard"
                      ? "#0e6"
                      : currentLevel === "Junior Partner"
                      ? "dodgerblue"
                      : currentLevel === "Medium Partner"
                      ? "mediumvioletred"
                      : "orangered"
                  }`,
                  letterSpacing: 0.1 + "rem",
                }}
              >
                {" "}
                {currentLevel}
              </span>{" "}
            </p>

            <p
              className="m-0 fs-5 d-flex gap-2 align-items-center"
              style={{ color: "aquamarine" }}
            >
              {" "}
              Membership:{" "}
              <span className="fs-5 fw-light text-light">
                Standard Since:{" "}
                <span className="fs-6" style={{ color: "tomato" }}>
                  {userData?.user?.createAt}
                </span>{" "}
              </span>{" "}
            </p>

            <Stack direction={"row"} justifyContent={"space-between"}>
              <span className="text-light fs-5">
                Become a more important member to earn multiples of money by
                raising the level
              </span>

              <Button variant="contained" color="warning">
                Upgrade
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Box>
      <p className="fs-5 text-light">Earn more:</p>

      <Box>
        <h4> Featured ADS: </h4>
      </Box>

      <Box>
        <h4> Featured Offers: </h4>
        <SlideOffers />
      </Box>
    </div>
  );
}

export default Main_Dashboard;
