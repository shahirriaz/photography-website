import React from "react";
import "./Gallery.css";
import { useParams } from "react-router-dom";
import Bryllup from "./galleryPages/Par";
import Familie from "./galleryPages/Familie";
import Par from "./galleryPages/Par";

function Gallery() {
  const { name } = useParams();

  return (
    <div className="gallery">
      {name === "par" ? <Par /> : null}
      {name === "familie" ? <Familie /> : null}
    </div>
  );
}

export default Gallery;
