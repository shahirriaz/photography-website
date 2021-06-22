import React, { useEffect } from "react";
import "./AboutUsRow.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUsRow({
  title,
  subTitle,
  description,
  image,
  isReverse,
  isAlignItemsCenter,
  imageArray,
}) {
  useEffect(() => {
    AOS.init();
  });
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  return (
    <div
      className={`aboutUsRow ${isReverse && "aboutUsRow__reversed"} ${
        isAlignItemsCenter && "aboutUsRow__alignItemsCenter"
      } `}
    >
      {image ? (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aboutUsRow__content"
        >
          {title && <h1>{title}</h1>}
          <h3>{subTitle}</h3>
          <p className="aboutUsRow__content--description">{description}</p>
        </div>
      ) : null}

      {imageArray ? (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aboutUsRow__image--container"
        >
          {imageArray.map((img, index) => (
            <img
              key={index}
              style={{ width: "600px", objectFit: "contain" }}
              src={img}
              alt="best-image"
            />
          ))}
        </div>
      ) : (
        <img
          data-aos="fade-up"
          data-aos-duration="700"
          style={{ width: "600px", objectFit: "contain" }}
          src={image}
          alt="best-image"
        />
      )}
    </div>
  );
}

export default AboutUsRow;
