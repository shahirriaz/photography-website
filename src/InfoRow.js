import React from "react";
import "./InfoRow.css";

function InfoRow({ title, image, description }) {
  return (
    <div className="infoRow">
      <div className="infoRow__contents">
        <div className="infoRow__contents--left">
          <div className="infoRow__contents--left--title">
            <h2 className="infoRow__title">{title}</h2>
          </div>
          <div className="infoRow__contents--left--description">
            {description && (
              <p className="infoRow__description">{description}</p>
            )}
          </div>
        </div>

        <div className="infoRow__contents--right">
          <img className="infoRow__image" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default InfoRow;
