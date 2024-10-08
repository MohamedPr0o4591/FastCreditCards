import { Box, Rating, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

function OffersWall_Card(props) {
  return (
    <li className={`${!props.deactivate ? "active" : "disabled"}`}>
      <Stack direction={"row"} gap={2} alignItems={"center"} pr={2}>
        <img src={props.bitlabs} />
        <p className="m-0">Bitlabs</p>

        <i />

        <Box flexGrow={1} />
        <Rating
          name="half-rating-read"
          defaultValue={props.rate}
          precision={0.25}
          readOnly
          sx={{
            color:
              props.rate < 2
                ? "#ff0000"
                : props.rate < 3
                ? "#ff7f00"
                : props.rate < 4
                ? "#ffff00"
                : props.rate < 4.5
                ? "#7fff00"
                : "#00ff00",
          }}
        />
        <span className="opacity-75">Popularity</span>
      </Stack>
    </li>
  );
}

export default OffersWall_Card;
