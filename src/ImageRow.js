import React, { useState } from "react";
import "./ImageRow.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function ImageRow({ images, isOpen }) {
  const [isLocalOpen, setLocalOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState({
    photoIndex: 0,
  });

  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setLocalOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            setPhotoIndex({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
        />
      )}
    </div>
  );
}

export default ImageRow;
