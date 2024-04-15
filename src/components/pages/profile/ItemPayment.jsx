import { MenuItem, Stack } from "@mui/material";
import React from "react";

function ItemPayment(props) {
  return (
    <Stack direction={"row"} gap={1.5} alignItems={"center"}>
      {props.img ? (
        <img className="currency-img" src={props.img} alt="bitcoin" />
      ) : null}

      <span className="currency-main" style={{ color: props.color }}>
        {props.name}{" "}
      </span>

      <span
        className="currency"
        style={{
          background: props.labelBackground,
          color: props.color,
        }}
      >
        {props.label}
      </span>
    </Stack>
  );
}

export default ItemPayment;
