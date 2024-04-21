import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/categories/Category";
import Collections from "../../components/collections/Collections";
import Deals from "../../components/deals/Deals";
import Advertise from "../../components/advertise/Advertise";
const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Category />
      <Collections />
      <Deals />
      <Advertise />

    </div>
  );
};

export default Home;
