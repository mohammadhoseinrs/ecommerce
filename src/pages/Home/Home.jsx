import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/categories/Category";
import Collections from "../../components/collections/Collections";
import Deals from "../../components/deals/Deals";
import Advertise from "../../components/advertise/Advertise";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="Home">
        <Hero />
        <Category />
        <Collections />
        <Deals />
        <Advertise />
      </div>
      <Footer />
    </>
  );
};

export default Home;
