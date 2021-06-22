import React from "react";
import "./ServiceGallery.css";
import collection from "./collection";
import Row from "./Row";

function ServiceGallery() {
  return (
    <div className="serviceGallery">
      {collection.map(image => (
        <Row key={image.id} image={image.image} title={image.title} />
      ))}
    </div>
  );
}

export default ServiceGallery;
