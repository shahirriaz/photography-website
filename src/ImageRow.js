import React, { useEffect, useState } from "react";
import "./ImageRow.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ImageRow({ images, isReverse }) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className={`imageRow ${isReverse && "imageRow--reverseDirection"}`}>
      {images && (
        <>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="imageRow__container"
          >
            <img src={images[0].src} alt="" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="imageRow__container"
          >
            <img src={images[1].src} alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="imageRow__container"
          >
            <img src={images[2].src} style={{ marginTop: "3rem" }} alt="" />
            <img src={images[3].src} style={{ marginTop: "1rem" }} alt="" />
          </div>
        </>
      )}
    </div>
  );
}

export default ImageRow;
