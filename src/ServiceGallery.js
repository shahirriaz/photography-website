import React from "react";
import "./ServiceGallery.css";
import collection from "./collection";
import Row from "./Row";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

function ServiceGallery() {
  return (
    <div className="serviceGallery">
      {/* <div className="serviceGallery__heading">
        <h1 style={{ display: window.innerWidth < 768 ? "none" : "block" }}>
          Se vår galleri
        </h1>
      </div> */}
      <div className="serviceGallery__item">
        {collection.map(image => (
          <Row key={image.id} image={image.image} title={image.title} />
        ))}
      </div>
    </div>
  );
}

export default ServiceGallery;
