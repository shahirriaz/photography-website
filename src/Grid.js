import React, { useEffect, useState } from "react";
import "./Grid.css";
import barn_14 from "./images/gallery/barn/barn_14.jpg";
import barn_5 from "./images/gallery/barn/barn_5.jpg";
import anette_2 from "./images/gallery/anette/2.jpg";
import anette_4 from "./images/gallery/anette/4.jpg";
import anette_5 from "./images/gallery/anette/5.jpg";
import autumn_11 from "./images/gallery/autumn/autumn_11.jpg";
import emilie4 from "./images/gallery/gridForHome_1/4.jpg";
import portrett_4 from "./images/gallery/portrait/portrett_4.jpg";
import urban_1 from "./images/gallery/urban/urban_1.jpg";
// import { img } from "react-lazy-load-image-component";
import { CircularProgress } from "@material-ui/core";
import "react-lazy-load-image-component/src/effects/blur.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

function Grid() {
  const [imgsLoaded, setimgsLoaded] = useState(false);

  // const array = [
  //   {
  //     src: barn_14,
  //     id: 100,
  //   },

  //   {
  //     src: barn_5,
  //     id: 101,
  //   },
  //   {
  //     src: anette_2,
  //     id: 102,
  //   },
  //   {
  //     src: anette_4,
  //     id: 103,
  //   },
  //   {
  //     src: anette_5,
  //     id: 104,
  //   },
  //   {
  //     src: autumn_11,
  //     id: 105,
  //   },
  //   {
  //     src: emilie4,
  //     id: 106,
  //   },
  //   {
  //     src: portrett_4,
  //     id: 107,
  //   },
  //   {
  //     src: urban_1,
  //     id: 108,
  //   },
  // ];
  // useEffect(() => {
  //   AOS.init();
  // });

  // useEffect(() => {
  //   const loadImage = image => {
  //     return new Promise((resolve, reject) => {
  //       const loadImg = new Image();
  //       loadImg.src = image.src;
  //       // wait 2 seconds to simulate loading time
  //       loadImg.onload = () => {
  //         resolve(image.src);
  //       };
  //       loadImg.onerror = err => reject(err);
  //     });
  //   };

  //   Promise.all(array.map(image => loadImage(image)))
  //     .then(() => setimgsLoaded(true))
  //     .catch(err => console.log("Failed to load images", err));
  // }, []);

  return (
    <>
      <div className="grid">
        <div className="grid__container w-2 h-2">
          <div className="gallery-item">
            <div className="image">
              <img className="imagee" src={barn_14} alt="nature" />
            </div>
          </div>
        </div>
        <div className="grid__container w-2 h-4">
          <div className="gallery-item">
            <div className="image">
              <img className="imagee" src={anette_2} alt="nature" />
            </div>
          </div>
        </div>
        <div className="grid__container w-2 h-3">
          <div className="gallery-item">
            <div className="image">
              <img className="imagee" src={autumn_11} alt="nature" />
            </div>
          </div>
        </div>
        <div className="grid__container w-2 h-4">
          <div className="gallery-item">
            <div className="image">
              <img
                className="imagee"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="nature"
              />
            </div>
          </div>
        </div>

        <div className="grid__container w-2 h-4">
          <div className="gallery-item">
            <div className="image">
              <img className="imagee" src={emilie4} alt="nature" />
            </div>
          </div>
        </div>
        <div className="grid__container w-2 h-3">
          <div className="gallery-item">
            <div className="image">
              <img className="imagee" src={anette_4} alt="nature" />
            </div>
          </div>
        </div>

        <div className="grid__container w-2 h-4">
          <div className="gallery-item">
            <div className="image">
              <img
                className="imagee"
                src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=518&q=80"
                alt="nature"
              />
            </div>
          </div>
        </div>
        <div className="grid__container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                className="imagee"
                src="https://images.unsplash.com/photo-1507946116609-bfed19728fdf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                alt="nature"
              />
            </div>
          </div>
        </div>
        <div className="grid__container w-1 h-3">
          <div className="gallery-item">
            <div className="image">
              <img
                className="imagee"
                src="https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="nature"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
