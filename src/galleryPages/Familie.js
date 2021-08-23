import "./galleryPages.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CircularProgress } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { galleryFamilyCollection } from "../collection";
import MainRow from "../MainRow";
import bannerImage from "../images/gallery/anette/5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceGallery from "./../ServiceGallery";

function Familie() {
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

    Promise.all(galleryFamilyCollection.map(image => loadImage(image)))
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
          backgroundPositionY: "50%",
        }}
      >
        {/* <div className="imageCarousel__banner--fadeBottom"></div> */}
      </header>
      <div data-aos="fade-in" data-aos-duration="2000" className="galleryPages">
        <MainRow
          title="Familie fotografering"
          description="Familibilder kobler oss til våre røtter, og hvor vi kommer fra. Det er så viktig å forevige de fine øyeblikkene en har sammen. En dag vil disse bildene være det eneste barnet har av deg. Vi tenker ofte på hvordan fremtiden vil være, men glemmer å forevige de fine minnene vi har idag."
          isFontColorWhite
          isMargin
          isPadding
        />
        {imgsLoaded ? (
          <Carousel
            useKeyboardArrows={true}
            showThumbs={false}
            dynamicHeight={true}
            autoplay={false}
          >
            {galleryFamilyCollection.map(image => (
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

export default Familie;
