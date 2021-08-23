import "./galleryPages.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CircularProgress } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { galleryCoupleCollection } from "../collection";
import MainRow from "../MainRow";
import bannerImage from "../images/test.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceGallery from "./../ServiceGallery";

function Par() {
  const [imgsLoaded, setImgsLoaded] = useState(false);
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

    Promise.all(galleryCoupleCollection.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err));
  }, []);
  return (
    <>
      <header
        className="imageCarousel__banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: "60% 50%",
        }}
      >
        {/* <div className="imageCarousel__banner--fadeBottom"></div> */}
      </header>
      <div data-aos="fade-in" data-aos-duration="2000" className="galleryPages">
        <MainRow
          title="Par fotografering"
          description="Memorylane har lang erfaring med å ta bilder av par, og vi vet hvilke knapper vi skal trykke på for å forevige de gode øyeblikkene og uttrykkene som brått forsvinner. Vi kommer gjerne hjem til dere, blir med på en aktivitet dere liker, eller bevarer et av de mange øyeblikkene som utgjør hverdagen."
          isFontColorWhite
          isMargin
          isPadding
        />

        {imgsLoaded ? (
          <Carousel useKeyboardArrows={true} showThumbs={false}>
            {galleryCoupleCollection.map(image => (
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

export default Par;
