import React, { useState, useEffect } from "react";
import "./Grid.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import barn_12 from "./images/gallery/barn/compressed/barn_12.jpg";
import barn_15 from "./images/gallery/barn/compressed/barn_15.jpg";
import familie_1 from "./images/gallery/family/compressed/familie_1.jpg";
import familie_2 from "./images/gallery/family/compressed/familie_2.jpg";
import par_2 from "./images/gallery/couple/compressed/par_2.jpg";
import urban_4 from "./images/gallery/urban/compressed/urban_4.jpg";
import bryllup_1 from "./images/gallery/bryllup/compressed/bryllup_1.jpg";
import familie_7 from "./images/gallery/family/compressed/familie_7.jpg";
import one from "./images/gallery/gridForHome_1/compressed/1.jpg";

import LikesComponent from "./LikesComponent";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ImageRow from "./ImageRow";

function Grid() {
  const [imgsLoaded, setimgsLoaded] = useState(false);
  const [imgsLoaded2, setimgsLoaded2] = useState(false);
  const [imgsLoaded3, setimgsLoaded3] = useState(false);
  const [startLightBox, setStartLightBox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const gridObj1 = [
    {
      img: barn_12,
      iconId: "icon1",
      firebaseDocId: "FCBamwA76rlIJlz5Sj9X",
      mapId: 1,
    },
    {
      img: barn_15,
      iconId: "icon2",
      firebaseDocId: "lnYu9JpXyuEh4cbkIlxJ",
      mapId: 2,
    },
    {
      img: familie_1,
      iconId: "icon3",
      firebaseDocId: "a33i0zbNUhzWtUz7vDDB",
      mapId: 3,
    },
  ];

  const lightBoxImgs = [
    "https://firebasestorage.googleapis.com/v0/b/photography-5b191.appspot.com/o/IMG_8175.jpg?alt=media&token=cdc5c681-62a3-40ab-a9c7-128bcbb9a065",
    "https://firebasestorage.googleapis.com/v0/b/photography-5b191.appspot.com/o/IMG_5320.jpg?alt=media&token=9724ede1-b0a7-4407-9004-c0f8d5d9a61a",
    "https://firebasestorage.googleapis.com/v0/b/photography-5b191.appspot.com/o/familie_1.jpg?alt=media&token=c0681b79-9bfb-4a71-b27d-94a0928bf01b",
  ];

  const gridObj2 = [
    {
      img: familie_2,
      iconId: "icon4",
      firebaseDocId: "xJXXIz6kMLKuRwpQ13RF",
      mapId: 4,
    },
    {
      img: par_2,
      iconId: "icon5",
      firebaseDocId: "CZIyz5Kbmvi3gG8ba9V5",
      mapId: 5,
    },
    {
      img: urban_4,
      iconId: "icon6",
      firebaseDocId: "o7aqMx8YP2iRAiAXauto",
      mapId: 6,
    },
  ];

  const gridObj3 = [
    {
      img: bryllup_1,
      iconId: "icon7",
      firebaseDocId: "4QJ4HP458HyMD31vUO9z",
      mapId: 7,
    },
    {
      img: familie_7,
      iconId: "icon8",
      firebaseDocId: "kzjSHWr3Hh4CShOcolBW",
      mapId: 8,
    },
    {
      img: one,
      iconId: "icon9",
      firebaseDocId: "kUDF1YTkhylI9E08nQ3d",
      mapId: 9,
    },
  ];

  const handleImageLoaded = () => {
    setimgsLoaded(true);
  };
  const handleImageLoaded2 = () => {
    setimgsLoaded2(true);
  };
  const handleImageLoaded3 = () => {
    setimgsLoaded3(true);
  };

  const imageStyle = !imgsLoaded ? { display: "none" } : {};
  const imageStyle2 = !imgsLoaded2 ? { display: "none" } : {};
  const imageStyle3 = !imgsLoaded3 ? { display: "none" } : {};

  const handleImageClick = id => {
    setStartLightBox(true);
    setPhotoIndex(id);
  };

  // console.log(photoIndex);

  return (
    <div className="row">
      <div className="column">
        {gridObj1.map((gridObj1, idx) => (
          <div key={gridObj1.mapId} className="image--container">
            {/* <div  class="overlay50"></div> */}
            <div className="imageAndPlceholder--container">
              {!imgsLoaded && (
                <div key={idx} className="skeletons">
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton width={500} height={300} duration={2} count={1} />
                  </SkeletonTheme>
                </div>
              )}
              <img
                style={imageStyle}
                onLoad={handleImageLoaded}
                // onClick={() => handleImageClick(gridObj1.mapId)}
                id={gridObj1.mapId}
                src={gridObj1.img}
                alt="grid-img"
              />
            </div>

            {startLightBox && (
              <Lightbox
                mainSrc={lightBoxImgs[photoIndex]}
                // nextSrc={lightBoxImgs[(photoIndex + 1) % lightBoxImgs.length]}
                // prevSrc={
                //   lightBoxImgs[
                //     (photoIndex + lightBoxImgs.length - 1) % lightBoxImgs.length
                //   ]
                // }
                // onCloseRequest={() => setStartLightBox(false)}
                // onMovePrevRequest={() =>
                //   setPhotoIndex(
                //     prevValue =>
                //       (prevValue + lightBoxImgs.length - 1) %
                //       lightBoxImgs.length
                //   )
                // }
                // onMoveNextRequest={() =>
                //   setPhotoIndex(
                //     prevValue => (prevValue + 1) % lightBoxImgs.length
                //   )
                // }
              />
            )}

            <div className="likesContainer">
              <LikesComponent
                id={gridObj1.firebaseDocId}
                iconId={gridObj1.iconId}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="column">
        {gridObj2.map((gridObj2, idx) => (
          <div key={gridObj2.mapId} className="image--container">
            <div class="overlay50"></div>
            <div className="imageAndPlceholder--container">
              {!imgsLoaded2 && (
                <div key={idx} className="skeletons">
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton width={500} height={300} duration={2} count={1} />
                  </SkeletonTheme>
                </div>
              )}
              <img
                style={imageStyle2}
                onLoad={handleImageLoaded2}
                id={gridObj2.mapId}
                src={gridObj2.img}
                alt="grid-img"
              />
            </div>
            <div className="likesContainer">
              <LikesComponent
                id={gridObj2.firebaseDocId}
                iconId={gridObj2.iconId}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="column">
        {gridObj3.map((gridObj3, idx) => (
          <div key={gridObj3.mapId} className="image--container">
            <div class="overlay50"></div>
            <div className="imageAndPlceholder--container">
              {!imgsLoaded3 && (
                <div key={idx} className="skeletons">
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton width={500} height={300} duration={2} count={1} />
                  </SkeletonTheme>
                </div>
              )}
              <img
                style={imageStyle3}
                onLoad={handleImageLoaded3}
                id={gridObj3.mapId}
                src={gridObj3.img}
                alt="grid-img"
              />
            </div>
            <div className="likesContainer">
              <LikesComponent
                id={gridObj3.firebaseDocId}
                iconId={gridObj3.iconId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
