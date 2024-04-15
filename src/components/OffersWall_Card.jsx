import { Box, Rating, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

function OffersWall_Card(props) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (active) {
      const elements = document.querySelectorAll(
        ".offers_page .list_offers li"
      );
      elements.forEach((element) => element.classList.add("active"));
      elements.forEach((element) => element.classList.remove("disabled"));
    } else {
      const elements = document.querySelectorAll(
        ".offers_page .list_offers li"
      );
      elements.forEach((element) => element.classList.add("disabled"));
      elements.forEach((element) => element.classList.remove("active"));
    }
  }, [active]);

  return (
    <li>
      <Stack direction={"row"} gap={2} alignItems={"center"} pr={2}>
        <img src={props.bitlabs} />
        <p className="m-0">Bitlabs</p>

        <i />

        <Box flexGrow={1} />
        <Rating
          name="half-rating-read"
          defaultValue={3.5}
          precision={0.5}
          readOnly
          sx={{
            color: "#efef",
          }}
        />
        <span className="opacity-75">Popularity</span>
      </Stack>
    </li>
  );
}

export default OffersWall_Card;
