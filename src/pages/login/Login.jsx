import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="login__imgConatiner">
        <img src="./assets/images/image-1.svg" alt="" />
      </div>
      <div className="login__textConateinr">
        <form action="" className="login__form">
          <h3>Welcome</h3>
          <p>please login here</p>
          <div className="login__email">
            <label for="email">
              Email Address <span>*</span>
            </label>
            <input type="text" name="email" />
          </div>
          <div className="login__email">
            <label for="password">
              Password <span>*</span>
            </label>
            <input type="text" name="password" />
          </div>

          <button type="submit" className="form__btn">
            Login
          </button>
          <div className="login__guide">
            <Link to="/signup">Create an account?</Link>
            <p>Forget password?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
