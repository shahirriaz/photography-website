import "./galleryPages.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CircularProgress } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { galleryPortrettCollection } from "../collection";
import MainRow from "../MainRow";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceGallery from "./../ServiceGallery";

function Portrett() {
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

    Promise.all(galleryPortrettCollection.map(image => loadImage(image)))
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
          backgroundImage: `url(https://images.unsplash.com/photo-1495669813465-fd863f87d746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)`,
          backgroundPositionY: "50%",
        }}
      >
        {/* <div className="imageCarousel__banner--fadeBottom"></div> */}
      </header>
      <div data-aos="fade-in" data-aos-duration="2000" className="galleryPages">
        <MainRow
          title="Portrett"
          subTitle="Morbi ex purus, dapibus id mauris id, dapibus dictum lorem. Mauris sed interdum purus, et dapibus metus. Integer quis felis molestie, fringilla enim vitae, ullamcorper lorem. "
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
            {galleryPortrettCollection.map((image) => (
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

export default Portrett;
