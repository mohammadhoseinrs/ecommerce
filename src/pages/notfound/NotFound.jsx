import React from "react";
import "./NotFound.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate=useNavigate()
    const clickHandler=()=>{
        navigate('/')
    }
  return (
    <div className="notfound">
      <p>404</p>
      <p>NOT FOUND</p>
      <div  className='click' onClick={clickHandler}>
        Go To Main Page
      </div>
    </div>
  );
};

export default NotFound;
