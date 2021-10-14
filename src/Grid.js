import React, { useState, useEffect } from "react";
import "./Grid.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import LikesComponent from "./LikesComponent";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// import ShareIcon from "@mui/icons-material/Share";

// compressed jpg
import barn_12 from "./images/gallery/barn/compressed/barn_122.jpg";
import barn_15 from "./images/gallery/barn/compressed/barn_15.jpg";
import familie_1 from "./images/gallery/family/compressed/familie_1.jpg";
import familie_2 from "./images/gallery/family/compressed/familie_2.jpg";
import par_2 from "./images/gallery/couple/compressed/par_2.jpg";
import urban_4 from "./images/gallery/urban/compressed/urban_4.jpg";
import bryllup_1 from "./images/gallery/bryllup/compressed/bryllup_1.jpg";
import familie_7 from "./images/gallery/family/compressed/familie_7.jpg";
import one from "./images/gallery/gridForHome_1/compressed/1.jpg";
import Hammer from "hammerjs";

// fullScreen jpg
import fullScreen_1 from "./images/gallery/gridForHome_1/compressed/fullScreen_1.jpg";
import fullScreen_familie_7 from "./images/gallery/family/compressed/fullScreen_familie_7.jpg";
import f_bryllup_1 from "./images/gallery/bryllup/compressed/f_bryllup_1.jpg";
import f_urban_4 from "./images/gallery/urban/compressed/f_urban_4.jpg";
import f_par_2 from "./images/gallery/couple/compressed/f_par_2.jpg";
import f_familie_1 from "./images/gallery/family/compressed/f_familie_1.jpg";
import f_barn_15 from "./images/gallery/barn/compressed/f_barn_15.jpg";
import f_barn_12 from "./images/gallery/barn/compressed/f_barn_122.jpg";
import f_familie_2 from "./images/gallery/family/compressed/f_familie_2.jpg";
import { useStateValue } from "./StateProvider";

function Grid() {
  const [imgsLoaded, setimgsLoaded] = useState(false);
  const [imgsLoaded2, setimgsLoaded2] = useState(false);
  const [imgsLoaded3, setimgsLoaded3] = useState(false);
  const [startLightBox, setStartLightBox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [{ width }, dispatch] = useStateValue();
  const [showOverlay, setShowOverlay] = useState(false);

  const [activeOverlay, setActiveOverlay] = useState("");

  const lightBoxImgs = [
    f_barn_12,
    f_barn_15,
    f_familie_1,
    f_familie_2,
    f_par_2,
    f_urban_4,
    f_bryllup_1,
    fullScreen_familie_7,
    fullScreen_1,
  ];

  const gridObj1 = [
    {
      img: barn_12,
      iconId: "icon1",
      firebaseDocId: "FCBamwA76rlIJlz5Sj9X",
      mapId: 0,
    },
    {
      img: barn_15,
      iconId: "icon2",
      firebaseDocId: "lnYu9JpXyuEh4cbkIlxJ",
      mapId: 1,
    },
    {
      img: familie_1,
      iconId: "icon3",
      firebaseDocId: "a33i0zbNUhzWtUz7vDDB",
      mapId: 2,
    },
  ];

  const gridObj2 = [
    {
      img: familie_2,
      iconId: "icon4",
      firebaseDocId: "xJXXIz6kMLKuRwpQ13RF",
      mapId: 3,
    },
    {
      img: par_2,
      iconId: "icon5",
      firebaseDocId: "CZIyz5Kbmvi3gG8ba9V5",
      mapId: 4,
    },
    {
      img: urban_4,
      iconId: "icon6",
      firebaseDocId: "o7aqMx8YP2iRAiAXauto",
      mapId: 5,
    },
  ];

  const gridObj3 = [
    {
      img: bryllup_1,
      iconId: "icon7",
      firebaseDocId: "4QJ4HP458HyMD31vUO9z",
      mapId: 6,
    },
    {
      img: familie_7,
      iconId: "icon8",
      firebaseDocId: "kzjSHWr3Hh4CShOcolBW",
      mapId: 7,
    },
    {
      img: one,
      iconId: "icon9",
      firebaseDocId: "kUDF1YTkhylI9E08nQ3d",
      mapId: 8,
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

  const handleImageClick = (e, id) => {
    console.log("hh");
    if (width > 1000) {
      setStartLightBox(true);
      setPhotoIndex(id);
    } else if (width < 1000) {
      setActiveOverlay(id);
      e.target.onclick = function (e) {
        setStartLightBox(true);
        setPhotoIndex(id);
      };
    }
  };

  return (
    <div className="row">
      <div className="column">
        {gridObj1.map((gridObj1, idx) => (
          <div
            id="imageContainer"
            key={gridObj1.mapId}
            className="image--container"
          >
            <div
              onClick={(e) => handleImageClick(e, gridObj1.mapId)}
              id={idx}
              className={`overlay50 ${
                gridObj1.mapId === activeOverlay ? " overLay50--opacity" : ""
              }`}
            ></div>
            <div
              onClick={(e) => handleImageClick(e, gridObj1.mapId)}
              id={idx}
              className="imageAndPlceholder--container"
            >
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
                id={gridObj1.mapId}
                src={gridObj1.img}
                alt="grid-img"
                className="gridImage"
              />
            </div>

            <div
              className={`likesContainer ${
                gridObj1.mapId === activeOverlay ? " displayMeAsBlock" : ""
              }`}
            >
              <LikesComponent
                id={gridObj1.firebaseDocId}
                iconId={gridObj1.iconId}
              />
            </div>
            {/* <div className="shareContainer">
              <div className="shareModal--icon">
                <ShareIcon className="shareIcon" />
              </div>
            </div> */}
          </div>
        ))}
      </div>
      <div className="column">
        {gridObj2.map((gridObj2, idx) => (
          <div key={gridObj2.mapId} className="image--container">
            <div
              onClick={(e) => handleImageClick(e, gridObj2.mapId)}
              className={`overlay50 ${
                gridObj2.mapId === activeOverlay ? " overLay50--opacity" : ""
              }`}
            ></div>
            <div
              onClick={(e) => handleImageClick(e, gridObj2.mapId)}
              className="imageAndPlceholder--container"
            >
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
                className="gridImage"
              />
            </div>
            <div
              className={`likesContainer ${
                gridObj2.mapId === activeOverlay ? " displayMeAsBlock" : ""
              }`}
            >
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
            <div
              onClick={(e) => handleImageClick(e, gridObj3.mapId)}
              className={`overlay50 ${
                gridObj3.mapId === activeOverlay ? " overLay50--opacity" : ""
              }`}
            ></div>
            <div
              onClick={(e) => handleImageClick(e, gridObj3.mapId)}
              className="imageAndPlceholder--container"
            >
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
                className="gridImage"
              />
            </div>
            <div
              className={`likesContainer ${
                gridObj3.mapId === activeOverlay ? " displayMeAsBlock" : ""
              }`}
            >
              <LikesComponent
                id={gridObj3.firebaseDocId}
                iconId={gridObj3.iconId}
              />
            </div>
          </div>
        ))}
      </div>
      {startLightBox && (
        <Lightbox
          mainSrc={lightBoxImgs[photoIndex]}
          nextSrc={lightBoxImgs[(photoIndex + 1) % lightBoxImgs.length]}
          prevSrc={
            lightBoxImgs[
              (photoIndex + lightBoxImgs.length - 1) % lightBoxImgs.length
            ]
          }
          onCloseRequest={() => setStartLightBox(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (prevValue) =>
                (prevValue + lightBoxImgs.length - 1) % lightBoxImgs.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((prevValue) => (prevValue + 1) % lightBoxImgs.length)
          }
        />
      )}
    </div>
  );
}

export default Grid;
