import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addItemToLocalStorage,
  getCartFromLocalStorage,
  removeItemFromLocalStorage,
} from "../../Utils/localstorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlePromise }) => {
  const bottles = use(bottlePromise);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCartIds = getCartFromLocalStorage();

    const storedCart = [];
    for (const id of storedCartIds) {
      const bottle = bottles.find((bottle) => bottle.id === id);
      if (bottle) {
        storedCart.push(bottle);
      }
    }
    setCart(storedCart);
  }, [bottles]);

  // Handle adding a bottle to the cart
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    // Save the bottle to local storage
    addItemToLocalStorage(bottle.id);
  };

  //   Handle removing a bottle from the cart
  const handleRemoveFromCart = (id) => {
    const newCart = cart.filter((bottle) => bottle.id !== id);
    setCart(newCart);
    // Remove the bottle from local storage
    removeItemFromLocalStorage(id);
  };

  return (
    <div>
      <p style={{ color: "#000" }}>Items in Cart: {cart.length}</p>
      <Cart key={cart.id} cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      <div className="card">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
