import React, { useEffect, useState } from "react";
import "./ImageRow.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function ImageRow({ images, isReverse }) {
  const [photos, setPhotos] = useState([]);
  const [visible, setVisible] = useState(3);
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 20000);
  }, []);

  useEffect(() => {
    setPhotos(images);
  }, [images]);

  const showMoreImages = () => {
    setShow(true);
    setVisible(prevValue => prevValue + 3);

    if (show === true) {
      setVisible(3);
      setShow(false);
    }
  };

  return (
    <div className={`imageRow ${isReverse && "imageRow--reverseDirection"}`}>
      <div className="imageRow__mainContainer">
        {images && (
          <>
            {photos.slice(0, visible).map(image => (
              <div
                key={image.id}
                // data-aos="fade-up"
                // data-aos-duration="2000"
                className="imageRow__container"
              >
                <img src={image.src} alt="" />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="imageRow__buttonContainer">
        <button
          style={{ marginTop: "1rem" }}
          onClick={showMoreImages}
          className="imageRow__buttonContainer--button"
        >
          <div className="imageRow__buttonContainer--button--content">
            <span className="icon">
              {show ? (
                <ExpandLessIcon fontSize="large" />
              ) : (
                <ExpandMoreIcon fontSize="large" />
              )}
            </span>
            <span>{show ? "Skjul bilder" : "Vis mer bilder"}</span>
          </div>
        </button>
        {showButton && (
          <button
            style={{ marginTop: "1rem" }}
            className="imageRow__buttonContainer--button fade-in "
          >
            <div className="imageRow__buttonContainer--button--content">
              <span>Ta meg til galleriet</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageRow;
