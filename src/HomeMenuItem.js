import React from "react";
import { Link } from "react-router-dom";
import "./HomeMenuItem.css";

function HomeMenuItem({ title, image }) {
  const handlePath = () => {
    switch (title) {
      case "Portrett":
        return "galleri/portrett";
      case "Barn":
        return "galleri/barn";
      case "Par":
        return "galleri/par";
        return "/";
    }
  };

  return (
    <div className="homeMenuItem">
      <Link to={handlePath}>
        <div className="homeMenuItem__image--container">
          <img className="homeMenuItem__image" src={image} alt="" />
          <div class="overlay">
            <div class="text">{title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomeMenuItem;
