import React from 'react'
import './ForgetPassword.css'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
const ForgetPassword = () => {
  return (
    <div className='forget'>
        <div className="forget__imgContainer">
            <img src="./assets/images/image-3.svg" alt="" />
        </div>
        <div className="forget__textConatiner">
            <div className='forger__form'>
            <Link  to='/login'>
            <IoIosArrowBack />
            <span>Back</span>
            </Link>
            <h3>Forget Passowrd</h3>
            <p>enter your registered email , we wiil send your new password for login</p>
            <label for='email'>Email Address
            <span>*</span>
            </label>
            <input type="text" name="email" id="" />

            <button className='form__btn'>Recover Password</button>
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword