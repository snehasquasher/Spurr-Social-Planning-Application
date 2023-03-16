import React from 'react'
import Navbar from "../Components/Navbar"; 
import {FiArrowRight} from "react-icons/fi";
import Image from 'next/image'
//import BannerImage from "../Assets/home-banner-img.png";
//import BannerBackground from "../Assets/background.jpeg";
import HomePhoneLanding from '../public/image/phone_screen_1.png';
const Home = () => {
  return (
    <div className = "home-container"> 
    <Navbar /> 
    <div className = "home-banner-container" >
      <div className = "home-bannerImage-container"> 
        <Image src = {HomePhoneLanding} alt = "" />
        </div> 
        <div className = "home-text-section">
          <h1 className = "primary-heading">
            SPURR
          </h1>
          <p className = "primary-text"> 
          make <b>plans</b> happen! 
          </p> 
          <p className = "secondary-text">
          your go-to social event planning app
          </p>
          <button className = "secondary-button">Join Waitlist
          <FiArrowRight/> </button>
    </div>

    </div>
    </div>
  ); 
}

export default Home
