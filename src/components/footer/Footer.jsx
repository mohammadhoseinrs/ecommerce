import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <img src="./logo-white.svg" alt="" />
        <p>2024 Rostami. All rights are reserved</p>
        <div className='footer__icons'>
            <img src="./admin ui/footer/facebook.svg" alt="" />
            <img src="./admin ui/footer/instagram.svg" alt="" />
            <img src="./admin ui/footer/twitter.svg" alt="" />
        </div>
    </div>
  )
}

export default Footer