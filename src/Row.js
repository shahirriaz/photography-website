import React, { useEffect } from "react";
import "./Row.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Row({ image, title, id }) {
  var { name } = useParams();

  useEffect(() => {
    AOS.init();
  });

  const handlePath = e => {
    switch (title) {
      case "Portrett":
        name = "portrett";
        return `${name}`;
      case "Barn":
        name = "barn";
        return `${name}`;
      case "Familie":
        name = "familie";
        return `${name}`;
      case "Par":
        name = "par";
        return `${name}`;
      default:
        return "/";
    }
  };

  return (
    <div className="row">
      <div className="row__container">
        <div className="row__title">
          <h2>{title}</h2>
        </div>
        <div className="row__image">
          <Link to={handlePath}>
            <img className="row__image" src={image} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Row;
