import React from "react";
import "../galleryPages.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CircularProgress } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { galleryAutumnCollection } from "../collection";
import MainRow from "../MainRow";

function Bryllup() {
  const [imgsLoaded, setimgsLoaded] = useState(false);
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

    Promise.all(galleryAutumnCollection.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err));
  }, []);
  return (
    <div className="galleryPages">
      <header
        className="imageCarousel__banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://images.unsplash.com/photo-1519379169146-d4b170447caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)`,
          backgroundPosition: "70% 100%",
        }}
      >
        <div className="imageCarousel__banner--fadeBottom"></div>
      </header>
      <MainRow
        title="Bryllup"
        description="

      Vi tilbyr også parfotografering, hvor vi fanger de naturlige øyeblikkene mellom dere i en avslappet atmosfære før bryllupet. På denne måten blir vi litt bedre kjent, og bildene kan brukes til invitasjonen.
      
      Vi er med og forteller historien sammen med dere."
        isFontColorWhite
        isMargin
        isPadding
      />
      {imgsLoaded ? (
        <Carousel
          interval="2500"
          autoplay={true}
          useKeyboardArrows={true}
          showThumbs={false}
        >
          {galleryAutumnCollection.map(image => (
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
