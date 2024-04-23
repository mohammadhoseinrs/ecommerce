import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [opneMenu, setOpenMenu] = useState(false);
  return (
    <div className="header">
      <div className="header__log">
        <Link to="/">
          <img src="./logo-black.svg" alt="" />
        </Link>
      </div>
      <div className="header__item">
        <Link to="/">Home</Link>
        <Link to="/shop">shop</Link>

        <Link to="/signup" className="button">
          Login
        </Link>
      </div>
      <div className="hamburger__icon" onClick={() => setOpenMenu(!opneMenu)}>
        {opneMenu ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>
      <div className={`hamburger ${opneMenu && "hamburger__active"}`}>
        <div className="hamburger__item">
          <Link to="/">Home</Link>
          <Link to="/shop">shop</Link>
          <Link to="/signup" className="button">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
