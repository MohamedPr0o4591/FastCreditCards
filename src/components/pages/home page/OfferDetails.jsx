import React from "react";
import { Link } from "react-router-dom";

function OfferDetails(props) {
  return (
    <Link to={"/register/full_name"} className="offer-box">
      <div className="img-box">
        <img src={props.img} alt="" />
      </div>
      <p>{props.title}</p>
      <strong>{props.price}</strong>
    </Link>
  );
}

export default OfferDetails;
