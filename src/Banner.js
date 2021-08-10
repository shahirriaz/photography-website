import React, { useEffect, useState } from "react";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import test from "./images/gallery/anette/6.jpg";
import barn_8 from "./images/gallery/barn/barn_8.jpg";
import barn_9 from "./images/gallery/barn/barn_9.jpg";
import par_7 from "./images/gallery/couple/par_7.jpg";

function Banner() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    AOS.init();
  });

  const arrayOfImages = [test, barn_8, barn_9, par_7];

  useEffect(() => {
    const randomImage = Math.floor(Math.random() * arrayOfImages.length);
    setImage(randomImage);
  }, []);

  return (
    <header
      data-aos="fade-in"
      data-duration="4000"
      className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url(${arrayOfImages[image]})`,
        backgroundImage: `url(${barn_9})`,
        backgroundPosition: "50% 40%",
        opacity: "0.9",
      }}
    >
      <div className="banner__contents">
        <div className="banner__text">
          <div className="banner__alignmentContainer">
            {/* <h1 className="banner__title">Velkommen</h1>
            <span className="banner__span">til</span>
            <h2>memory lane</h2> */}
          </div>
        </div>
      </div>
      {/* <div className="banner--fadeBottom"></div> */}
    </header>
  );
}

export default Banner;
