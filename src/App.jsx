import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default App;
