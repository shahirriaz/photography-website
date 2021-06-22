import React, { useState, useEffect } from "react";
import "./Gallery.css";
import ImageCarousel from "./ImageCarousel";
import Slider from "./Slider";
import HashLoader from "react-spinners/HashLoader";

function Gallery() {
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    setImageLoading(true);
    setTimeout(() => {
      setImageLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="gallery">
      {imageLoading ? (
        <div className="app__loader--container">
          <HashLoader color={"#ff8c27"} loading={imageLoading} size={100} />
        </div>
      ) : (
        <ImageCarousel />
      )}
      {imageLoading ? (
        <div className="app__loader--container">
          <HashLoader color={"#ff8c27"} loading={imageLoading} size={100} />
        </div>
      ) : (
        <ImageCarousel />
      )}
      {imageLoading ? (
        <div className="app__loader--container">
          <HashLoader color={"#ff8c27"} loading={imageLoading} size={100} />
        </div>
      ) : (
        <ImageCarousel />
      )}
      {imageLoading ? (
        <div className="app__loader--container">
          <HashLoader color={"#ff8c27"} loading={imageLoading} size={100} />
        </div>
      ) : (
        <ImageCarousel />
      )}
      <Slider />
      {/* Slider */}
      {/* Slider */}
      {/* Slider */}
      {/* Slider */}
      {/* Slider */}
      {/* Slider */}
      {/* Slider */}
    </div>
  );
}

export default Gallery;
