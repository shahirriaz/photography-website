import React from "react";
import "./MainRow.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function MainRow({
  title,
  subTitle,
  description,
  image,
  contentImage,
  isReverse,
  isAlignItemsCenter,
  isRowFlexDirection,
  isColumnFlexDirection,
  isJustifyContentCenter,
  isAlignItemsCenterImage,
  isMarginRightImage,
  isMarginLeftImage,
  isMarginRightContent,
  isContentWidth,
  imageArray,
  children, //PriceComponent
}) {
  return (
    <div
      className={`mainRow ${isReverse && "mainRow__reversed"} ${
        isAlignItemsCenter && "mainRow__alignItemsCenter"
      }  ${isRowFlexDirection && "mainRow_flexDirectionRow"} ${
        isColumnFlexDirection && "mainRow_flexDirectionColumn"
      } ${isJustifyContentCenter && "mainRow_justifyContentCenter "}  `}
    >
      {image || title || subTitle ? (
        <div
          className={`mainRow__content--container ${
            isMarginRightContent && "mainRow__content--margin--right"
          }`}
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className={`mainRow__content ${
              isContentWidth && "mainRow__content--width"
            }`}
          >
            {title && <h1>{title}</h1>}
            <h3>{subTitle}</h3>
            <p>{description}</p>
          </div>
          
          {contentImage && (
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              style={{
                width: "400px",
                objectFit: "contain",
                height: "400px",
                marginTop: "1rem",
              }}
              src={contentImage}
              alt=""
            />
          )}
        </div>
      ) : null}

      {image ? (
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className={`mainRow__image--container ${
            isAlignItemsCenterImage &&
            "mainRow__image--container--alignItemsCenter"
          } ${
            isMarginRightImage && "mainRow__image--container--margin--right"
          } ${isMarginLeftImage && "mainRow__image--container--margin--left"}`}
        >
          <LazyLoadImage
            // data-aos="fade-up"
            effect="blurr"
            style={{ width: "600px", objectFit: "contain" }}
            src={image}
            alt="best-image"
          />
        </div>
      ) : null}

      {imageArray ? (
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mainRow__image--container"
        >
          {imageArray.map((img, index) => (
            <LazyLoadImage
              effect="blurr"
              key={index}
              style={{ width: "600px", objectFit: "contain" }}
              src={img}
              alt="best-image"
            />
          ))}
        </div>
      ) : null}

      {children ? (
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="mainRow__image--container"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

export default MainRow;
