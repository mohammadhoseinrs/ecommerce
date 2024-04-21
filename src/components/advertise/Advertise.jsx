import React from "react";
import "./Advertise.css";
const Advertise = () => {
  const adveriseData = [
    {
      id: 1,
      name: "Free shipping",
      desc: "Free shipping for order above $150",
      img: "shipping.svg",
    },
    {
      id: 2,
      name: "money gaurantee",
      desc: "Within 30 days for an exchange",
      img: "dollar.svg",
    },
    {
      id: 3,
      name: "online support",
      desc: "24 hours a day, 7 days a week",
      img: "support.svg",
    },
    {
      id: 4,
      name: "flexible payment",
      desc: "Pay with multiple credit cards",
      img: "payment.svg",
    },
  ];
  return (
    <div className="advert">
      {adveriseData.map((adv) => (
        <div className="advertise_item">
          <img src={`./assets/icons/${adv.img}`} alt="" />
          <div className="advertise__inner">
            <p>{adv.name}</p>
            <span>{adv.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advertise;
