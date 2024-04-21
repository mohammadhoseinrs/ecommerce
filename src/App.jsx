import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
const App = () => {
  let router=useRoutes(routes)
  return (
    <>
      <div className="app">
        <Header />
        {router}
      </div>
      <Footer />
    </>
  );
};

export default App;
