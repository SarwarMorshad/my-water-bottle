import React, { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlePromise }) => {
  const bottles = use(bottlePromise);
  console.log(bottles);
  return (
    <div>
      <div className="card">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
