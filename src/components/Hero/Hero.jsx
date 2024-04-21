import React, { useState } from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Button from "../button/Button";

const sliderData = [
  {
    id: 1,
    img: "./admin ui/hero/hero-1.png",
    title: "unleash innovation in every byte",
    desc: "explore a world of cutting-edge tech",
  },
  {
    id: 2,
    img: "./admin ui/hero/hero-2.png",
    title: "unleash innovation in every byte",
    desc: "explore a world of cutting-edge tech",
  },
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__inner">
        <div className="hero__textConatiner">
            <h1>
            unleash innovation <br/> in every byte
            </h1>
            <p>explore a world of cutting-edge tech</p>
            <Button value='Shop now' />
        </div>
        <div className="hero__imgContainer">
          <Swiper
            modules={[ Autoplay ]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={1}
          >
            {sliderData.map((slider) => (
              <SwiperSlide>
                <img key={slider.id} src={slider.img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
