import React from "react";
import "./AdvertiserCard.css";

function AdvertiserCard(props) {
  return (
    <li
      className="advertise"
      style={{
        display: `${props.flex ? props.flex : "flex"}`,
        justifyContent: `${
          props.contentCenter ? props.contentCenter : "center"
        }`,
        alignItems: `${props.itemsCenter ? props.itemsCenter : "center"}`,
      }}
    >
      <img
        src={props.img}
        alt="Bitdeer Logo"
        style={{
          width: `${props.width ? props.width : "100%"}`,
          height: `${props.height ? props.height : "100%"}`,
        }}
      />
    </li>
  );
}

export default AdvertiserCard;
