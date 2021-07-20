import "./galleryPages.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CircularProgress } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { galleryFamilyCollection } from "../collection";
import MainRow from "../MainRow";
import bannerImage from "../images/gallery/anette/5.jpg";

function Familie() {
  const [imgsLoaded, setimgsLoaded] = useState(false);

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

    Promise.all(galleryFamilyCollection.map(image => loadImage(image)))
      .then(() => setimgsLoaded(true))
      .catch(err => console.log("Failed to load images", err));
  }, []);

  return (
    <div className="familie">
      <header
        className="imageCarousel__banner"
        style={{
          opacity: "0.8",
          backgroundSize: "cover",
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="imageCarousel__banner--fadeBottom"></div>
      </header>
      <MainRow
        title="Familie"
        description="
        Familiefotografering er som et utsnitt fra virkeligheten, en verdifull påminner om hvordan livet var akkurat da. En måte å minnes sporene av levd liv, er å ta familiebilder. Det er en stor verdi i å se tilbake på bilder når du ikke lenger husker hvordan dere så ut eller hvem dere var. Vi tar bilder ute på location. Eller hva med mer ekte og lekne familiefoto i omgivelser som betyr noe for dere? Med dokumentarisk foto bevarer vi en bit av familielivet, det kan være feks en middag, tur i skogen eller i akebakken.  "
        isFontColorWhite
        isMargin
        isPadding
      />
      {imgsLoaded ? (
        <Carousel useKeyboardArrows={true} showThumbs={false}>
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
  );
}

export default Familie;
