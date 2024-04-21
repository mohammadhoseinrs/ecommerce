import React from "react";
import "./Deals.css";
import Counter from "./Counter";
import Button from './../button/Button'
const Deals = () => {
  return (
    <div className="deals">
      <div className="deals__textConatiner">
        <h3>Deals of the Month</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam
          accusamus, illo magnam quis inventore maiores ipsa ab voluptas quae
          modi nulla quidem a consequuntur nisi dolores sunt? Ipsam, ipsum.
        </p>
        <Counter />
        <Button value='View Products' />
      </div>
      <div className="deals__imgContainer">
        <img src="./assets/images/image-4.svg" alt="" />
      </div>
    </div>
  );
};

export default Deals;
