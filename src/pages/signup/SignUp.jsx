import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };
  console.log(register);
  return (
    <div className="signup">
      <div className="signup__imgConatiner">
        <img src="./assets/images/image-2.svg" alt="" />
      </div>
      <div className="signup__textConatiner">
        <form action="" className="sigunp__form">
          <h2>Create Account</h2>
          <p>Please enter details</p>
          <div className="form__name">
            <label for="fullName">
              Full Name <span>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={inputHandler}
            />
          </div>
          <div className="form__name">
            <label for="email">
              Email Address
              <span>*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={inputHandler}
            />
          </div>
          <div className="form__name">
            <label for="password">
              Password <span>*</span>
            </label>
            <input
              type="text"
              id="password"
              name="password"
              onChange={inputHandler}
            />
          </div>
          <div className="form__name">
            <label for="confirmPassword">
              Confirm Password <span>*</span>
            </label>
            <input
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              onChange={inputHandler}
            />
          </div>
          <button type="submit">Sign Up</button>
          <div className="sigunp__login">
            <p> Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
