import React from "react";
import "./FlashCircle.css";

function FlashCircle() {
  return (
    <div className="flash-circle">
      {Array.from({ length: 3 }, (_, index) => {
        return <q key={index} />;
      })}
    </div>
  );
}

export default FlashCircle;
