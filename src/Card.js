import React from "react";
import { Avatar } from "@material-ui/core";
import "./Card.css";

function Card({ name, image, review }) {
  return (
    <div className="card">
      <div className="card__avatar">
        <Avatar style={{ height: "150px", width: "150px" }} src={image} />
      </div>
      <div className="card__textContainer">
        <div style={{ position: "relative" }}>
          <span
            className="quote"
            style={{
              position: "absolute",
              left: "-32px",
              top: "-17px",
              color: "grey",
            }}
          >
            “
          </span>
        </div>
        <div className="card__description">
          <p>{review}</p>
        </div>
        <div style={{ position: "relative" }}>
          <span
            className="quote"
            style={{
              position: "absolute",
              right: "-14px",
              color: "grey",
              top: "-20px",
            }}
          >
            ”
          </span>
        </div>
        <div className="card__customerName">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
