import React, { useEffect } from "react";
import "./Row.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Row({ image, title, id }) {
  useEffect(() => {
    AOS.init();
  });

  // data-aos="fade-up" data-aos-duration="1800"
  return (
    <div key={id} className="row">
      <div className="row__container">
        <div className="row__title">
          <h2>{title}</h2>
        </div>
        <div className="row__image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Row;
