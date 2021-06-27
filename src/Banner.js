import React, { useEffect } from "react";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import test from "./images/test.jpg";

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

        backgroundPosition: "center center",
      }}
    >
      {/* <div className="banner__contents">
        <h1 className="banner__title">Welcome to Memorylane</h1>
        <h1 className="banner__description">where we create memories</h1>
      </div> */}
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
