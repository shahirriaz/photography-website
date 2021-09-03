import React, { useEffect, useState } from "react";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useStateValue } from "./StateProvider";
import smoothscroll from "smoothscroll-polyfill";

function Banner({ img, title, subTitle, isBtn, isBtnPrice }) {
  const [{ ref }, dispatch] = useStateValue();

  const [image, setImage] = useState(0);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    AOS.init();
  });

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // const arrayOfImages = [test, barn_8, barn_9, par_7];

  // useEffect(() => {
  //   const randomImage = Math.floor(Math.random() * arrayOfImages.length);
  //   setImage(randomImage);
  // }, []);

  return (
    <header
      data-aos="fade-in"
      data-duration="4000"
      className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url(${arrayOfImages[image]})`,
        backgroundImage: `url(${img})`,
        backgroundPosition: "50% 40%",
        opacity: "0.9",
      }}
    >
      <div class="overlay4"></div>
      <div className="banner__contents">
        <div className="banner__text">
          <div className="banner__alignmentContainer">
            <h1 className="banner__title">{title}</h1>
            <h2 className="banner__subTitle">{subTitle}</h2>
          </div>
        </div>
        {isBtn && (
          <button onClick={handleClick} id="overLayBtn" className="banner__btn">
            Se galleri
          </button>
        )}
        {/* {isBtnPrice && (
          <div className="bannerBtn__container">
            <button className="banner__btn">Bryllup</button>
            <button className="banner__btn">Par</button>
            <button className="banner__btn">Familie</button>
          </div>
        )} */}
      </div>
      {/* <div className="banner--fadeBottom"></div> */}
    </header>
  );
}

export default Banner;
