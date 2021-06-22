import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import par from "./images/par.jpg";
import artist from "./images/artist.jpg";
import natur from "./images/natur.jpg";
import "./ImageCarousel.css";

function ImageCarousel() {
  return (
    <Carousel autoPlay={true}>
      <div className="imageCarousel__image">
        <img src={par} />
        <p className="legend">Legend 1</p>
      </div>
      <div className="imageCarousel__image">
        <img src={artist} />
        <p className="legend">Legend 2</p>
      </div>
      <div className="imageCarousel__image">
        <img src={natur} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
