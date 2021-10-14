import "./galleryPages.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CircularProgress } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { galleryBarnCollection } from "../collection";
import MainRow from "../MainRow";
import bannerImage from "../images/gallery/barn/barn_2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceGallery from "./../ServiceGallery";

function Barn() {
  const [imgsLoaded, setimgsLoaded] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.src;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => {
          resolve(image.src); //url
        };
        loadImg.onerror = err => reject(err);
      });
    };

    Promise.all(galleryBarnCollection.map(image => loadImage(image)))
      .then(() => setimgsLoaded(true))
      .catch(err => console.log("Failed to load images", err));
  }, []);

  return (
    <>
      <header
        className="imageCarousel__banner"
        style={{
          opacity: "0.8",
          backgroundSize: "cover",
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        {/* <div className="imageCarousel__banner--fadeBottom"></div> */}
      </header>
      <div data-aos="fade-in" data-aos-duration="2000" className="galleryPages">
        <MainRow
          title="Barn"
          subTitle="Før man klarer å tenke seg om, har barna blitt store og flytter ut. Forevig de første stegene, de første årene, og barndommens fine minner. Du vil sitte igjen med fine minner som vil vare ut livet."
          isFontColorWhite
          isMargin
          isPadding
        />
        {imgsLoaded ? (
          <Carousel
            useKeyboardArrows={true}
            showThumbs={false}
            autoplay={false}
            dynamicHeight={true}
          >
            {galleryBarnCollection.map(image => (
              <div key={image.id} className="imageCarousel__image">
                <img src={image.src} />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="imageCarousel__loader--container">
            <CircularProgress style={{ color: "#ff8c27" }} />
          </div>
        )}
      </div>
      {/* <ServiceGallery /> */}
    </>
  );
}

export default Barn;
