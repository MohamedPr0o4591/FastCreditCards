import { Card, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import icon from "../../../public/icon.png";
import img from "../../../public/img2.png";

function FeaturedCard() {
  const [points, setPoints] = useState(15085);
  const [offerTitle, setOfferTitle] = useState("Mohamed Mokhtar Saleh");

  return (
    <Card
      sx={{
        m: 1,
        p: 1,
        bgcolor: "#3b5c85",
        color: "#efef",
        boxShadow: "0 0.1rem 0.4rem #00afaa7d",
        width: 130 + "px",
        height: 186.5 + "px",
      }}
    >
      <Stack gap={1}>
        <img
          src={img}
          alt="offer"
          style={{
            width: 110 + "px",
            height: 110 + "px",
            borderRadius: 0.1 + "rem",
          }}
        />

        <span>
          {offerTitle.length > 14
            ? offerTitle.substring(0, 12) + "..."
            : offerTitle}
        </span>

        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <img src={icon} alt="icon" style={{ width: 40 + "px" }} />

          <span>
            {points > 1000 ? (points / 1000).toFixed(2) + "K" : points}
          </span>
        </Stack>
      </Stack>
    </Card>
  );
}

export default FeaturedCard;
