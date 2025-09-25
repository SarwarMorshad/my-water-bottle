import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  console.log(cart);
  return (
    <div>
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img} alt="" />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
