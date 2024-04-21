import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  let [day, setDay] = useState(7);
  let [hour, setHour] = useState(12);
  let [minute, setMinute] = useState(59);
  let [second, setSecond] = useState(13);

  return (
    <div className="counter">
      <div className="counter__box">
        <span className="counter__box__number">{day}</span>
        <span>Days</span>
      </div>
      <div className="counter__box">
        <span className="counter__box__number">{hour}</span>
        <span>Hours</span>
      </div>
      <div className="counter__box">
        <span className="counter__box__number">{minute}</span>
        <span>Mins</span>
      </div>
      <div className="counter__box">
        <span className="counter__box__number">{second}</span>
        <span>Secs</span>
      </div>
    </div>
  );
};

export default Counter;
