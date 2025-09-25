import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, stock, price } = bottle;
  return (
    <div className="bottle-card">
      <img src={img} alt={name} style={{ width: "300px", height: "300px" }} />
      <h2>{name}</h2>
      <p>Only {stock} Remaining</p>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Add to Cart</button>
    </div>
  );
};

export default Bottle;
