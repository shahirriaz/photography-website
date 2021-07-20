import React, { useEffect, useState } from "react";
import "./ImageRow.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink } from "react-router-dom";

function ImageRow({ images, isReverse }) {
  let [galopen, changeGalOpen] = useState(false);
  let [singOpen, changeSing] = useState(false);
  let [currentIndex, changeCurrentIndex] = useState(0);

  function launchGalary(_i, changeCurrentIndex, changeGalOpen) {
    changeCurrentIndex(_i);
    changeGalOpen(true);
  }
  return (
    <div className={`imageRow ${isReverse && "imageRow--reverseDirection"}`}>
      <div className="imageRow__mainContainer">
        {images && (
          <>
            {images.map((image, idx) => (
              <LazyLoadImage
                key={image.id}
                src={image.url}
                onClick={e =>
                  launchGalary(idx, changeCurrentIndex, changeGalOpen)
                }
                alt="collection image"
              />
            ))}
          </>
        )}
      </div>
      {galopen ? (
        <Lightbox
          startIndex={currentIndex}
          images={images}
          zoomStep={1}
          onClose={e => changeGalOpen(false)}
        />
      ) : null}
      {singOpen ? <Lightbox onClose={e => changeSing(false)} /> : null}
      <div className="imageRow__buttonContainer">
        {/* <NavLink to="/gallery">
          <button
            style={{ marginTop: "1rem" }}
            className="imageRow__buttonContainer--button"
          >
            <div className="imageRow__buttonContainer--button--content">
              <span>Ta meg til galleriet</span>
            </div>
          </button>
        </NavLink> */}
      </div>
    </div>
  );
}

export default ImageRow;
