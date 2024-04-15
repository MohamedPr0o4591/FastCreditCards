import { Box, Button, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import Main_Points from "../main_points/Main_Points";
import {
  CurrencyBitcoin,
  Savings,
  ShoppingCart,
  Shop,
  PersonSearch,
  PersonAdd,
} from "@mui/icons-material";

function Main_Dashboard() {
  const [currectLevel, setCurrectLevel] = useState("Standard");

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Main_Points
          textColor="#db6c3f"
          bgColor="#2f4560"
          Card={CurrencyBitcoin}
          Logo={Savings}
          ActionColor="error"
          Action="Cash Out"
        />

        <Main_Points
          textColor="#07ced9"
          bgColor="#2f4560"
          Card={Shop}
          Logo={ShoppingCart}
          Action="Deposit"
          ActionColor="info"
        />

        <Main_Points
          textColor="#0e6"
          bgColor="#2f4560"
          Card={PersonSearch}
          Logo={PersonAdd}
          Action="Get Referral Link"
          ActionColor="success"
        />
      </Box>

      <Box mt={4}>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <h3 style={{ color: "aquamarine" }}> Current Level: </h3>

          <span>(Level up to level 4)</span>
        </Stack>

        <Paper
          sx={{
            bgcolor: "#7f87bb47",
            p: 2,
          }}
        >
          <Stack gap={1}>
            <p
              className="m-0 fs-4 d-flex gap-2 align-items-center"
              style={{ color: "aquamarine" }}
            >
              {" "}
              Level:{" "}
              <span
                className="fs-5 fw-light"
                style={{
                  color: `${
                    currectLevel === "Standard"
                      ? "#0e6"
                      : currectLevel === "Junior Partner"
                      ? "dodgerblue"
                      : currectLevel === "Medium Partner"
                      ? "mediumvioletred"
                      : "orangered"
                  }`,
                  letterSpacing: 0.1 + "rem",
                }}
              >
                {" "}
                {currectLevel}
              </span>{" "}
            </p>

            <p
              className="m-0 fs-4 d-flex gap-2 align-items-center"
              style={{ color: "aquamarine" }}
            >
              {" "}
              Membership:{" "}
              <span className="fs-5 fw-light text-light">
                Standard Since:{" "}
                <span className="fs-6" style={{ color: "tomato" }}>
                  {localStorage.created}
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
    </div>
  );
}

export default Main_Dashboard;
