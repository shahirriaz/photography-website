import "./galleryPages.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CircularProgress } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { galleryAnniversayCollection } from "../collection";
import MainRow from "../MainRow";
import bannerImage from "../images/test.jpg";
import ImageRow from "./../ImageRow";

function Bryllup() {
  const [imgsLoaded, setImgsLoaded] = useState(false);

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
          resolve(image.url);
        };
        loadImg.onerror = err => reject(err);
      });
    };

    Promise.all(galleryAnniversayCollection.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err));
  }, []);
  return (
    <div className="galleryPages">
      <header
        data-aos="fade-in"
        className="imageCarousel__banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: "70% 70%",
        }}
      >
        <div className="imageCarousel__banner--fadeBottom"></div>
      </header>
      <MainRow
        title="Par fotografering"
        description="
        Memorylane har lang erfaring med å ta bilder av par, og vi vet hvilke knapper vi skal trykke på for å forevige de gode øyeblikkene og uttrykkene som brått forsvinner. Vi kommer gjerne hjem til dere, blir med på en aktivitet dere liker, eller bevarer et av de mange øyeblikkene som utgjør hverdagen."
        isFontColorWhite
        isMargin
        isPadding
      />

      {imgsLoaded ? (
        <Carousel useKeyboardArrows={true} showThumbs={false}>
          {galleryAnniversayCollection.map(image => (
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
  );
}

export default Bryllup;
