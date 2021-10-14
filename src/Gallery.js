import React from "react";
import "./Gallery.css";
import { useParams } from "react-router-dom";
import Familie from "./galleryPages/Familie";
import Par from "./galleryPages/Par";
import Ettår from "./galleryPages/Barn";
import Portrett from "./galleryPages/Portrett";
import Gravid from "./galleryPages/Gravid";
import Footer from "./Footer";

function Gallery() {
  const { name } = useParams();

  return (
    <div className="gallery">
      {name === "par" ? <Par /> : null}
      {name === "familie" ? <Familie /> : null}
      {name === "barn" ? <Ettår /> : null}
      {name === "portrett" ? <Portrett /> : null}
      {name === "gravid" ? <Gravid /> : null}
      {/* <Footer /> */}
    </div>
  );
}

export default Gallery;
