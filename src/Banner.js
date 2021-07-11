import React, { useEffect } from "react";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import test from "./images/gallery/anette/6.jpg";

function Banner() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <header
      data-aos="fade-in"
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${test})`,
        backgroundPosition: "50% 40%",
      }}
    >
      <div className="banner__contents">
        <div className="banner__text">
          <div className="banner__alignmentContainer">
            <h1 className="banner__title">Velkommen</h1>
            <span className="banner__span">til</span>
            <h2>memory lane</h2>
          </div>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
