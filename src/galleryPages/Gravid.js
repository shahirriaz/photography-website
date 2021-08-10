import "./galleryPages.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CircularProgress } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { galleryGravidCollection } from "../collection";
import MainRow from "../MainRow";
import bannerImage from "../images/gallery/barn/barn_2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceGallery from "./../ServiceGallery";

function Gravid() {
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
          resolve(image.src);
        };
        loadImg.onerror = err => reject(err);
      });
    };

    Promise.all(galleryGravidCollection.map(image => loadImage(image)))
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
          backgroundImage: `url(https://images.unsplash.com/photo-1556982971-7da0c36e9042?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
        }}
      >
        <div className="imageCarousel__banner--fadeBottom"></div>
      </header>
      <div data-aos="fade-in" data-aos-duration="2000" className="galleryPages">
        <MainRow
          title="Barn"
          description="Lorem ipsun"
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
            {galleryGravidCollection.map(image => (
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
      <div className="gravid__info">
        <MainRow
          title="Interessert i å ta bilder hos oss?"
          subTitle="Trykk under for å bestille"
          isFontColorWhite
          Icon
          onlyBestill
          isCenterButton
        />
      </div>
      <ServiceGallery />
    </>
  );
}

export default Gravid;
