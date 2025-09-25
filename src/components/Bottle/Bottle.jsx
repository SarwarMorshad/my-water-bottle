import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle }) => {
  const { name, img } = bottle;
  return (
    <div className="bottle-card">
      <img src={img} alt={name} style={{ width: "300px", height: "300px" }} />
    </div>
  );
};

export default Bottle;
