import React, { useEffect, useState, createRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./ImageCarousel.css";
import { galleryAutumnCollection } from "./collection";
import { galleryAnniversayCollection } from "./collection";
import { galleryFamilyCollection } from "./collection";
import { galleryUrbanCollection } from "./collection";
import { galleryMusicCollection } from "./collection";
// import HashLoader from "react-spinners/HashLoader";
import { CircularProgress } from "@material-ui/core";

function ImageCarousel() {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [imgsLoaded2, setImgsLoaded2] = useState(false);
  const [imgsLoaded3, setImgsLoaded3] = useState(false);
  const [imgsLoaded4, setImgsLoaded4] = useState(false);
  const [imgsLoaded5, setImgsLoaded5] = useState(false);

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
      .then(() => setImgsLoaded2(true))
      .catch(err => console.log("Failed to load images", err));
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
      .then(() => setImgsLoaded3(true))
      .catch(err => console.log("Failed to load images", err));
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
      .then(() => setImgsLoaded4(true))
      .catch(err => console.log("Failed to load images", err));
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
      .then(() => setImgsLoaded5(true))
      .catch(err => console.log("Failed to load images", err));
  }, []);

  return (
    <div className="imageCarousel">
      {imgsLoaded ? (
        <Carousel interval="2500" autoplay={true} useKeyboardArrows={true}>
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

      {imgsLoaded2 ? (
        <Carousel useKeyboardArrows={true}>
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
      {imgsLoaded3 ? (
        <Carousel useKeyboardArrows={true}>
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

      {imgsLoaded4 ? (
        <Carousel useKeyboardArrows={true}>
          {galleryUrbanCollection.map(image => (
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
      {imgsLoaded5 ? (
        <Carousel useKeyboardArrows={true}>
          {galleryMusicCollection.map(image => (
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

export default ImageCarousel;
