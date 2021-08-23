import React, { useEffect, useState } from "react";
import "./MainRow.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";

function MainRow({
  id,
  title,
  subTitle,
  description,
  descriptionArray,
  image,
  contentImage,
  isReverse,
  isRowFlexDirection,
  isColumnFlexDirection,
  isBackgroundWhite,
  imageArray,
  children, //PriceComponent
  isMainPrice,
  hr,
  isMargin,
  isMarginFirstRow,
  isPadding,
  priceDescription,
  isFontColorWhite,
  Icon,
  serMerBilderBtn,
  isCenterButton,
}) {
  // const [width, setWidth] = useState(0);

  // useEffect(() => {
  //   const upDateWindowDimensions = () => {
  //     const newWidth = window.innerWidth;
  //     setWidth(newWidth);
  //   };

  //   window.addEventListener("resize", upDateWindowDimensions);
  //   return () => {
  //     window.removeEventListener("resize", upDateWindowDimensions);
  //   };
  // }, []);

  return (
    <div
      id={id}
      className={`mainRow ${isReverse && "mainRow__reversed"}  ${
        isRowFlexDirection && "mainRow_flexDirectionRow"
      } ${isColumnFlexDirection && "mainRow_flexDirectionColumn"} ${
        isBackgroundWhite && "mainRow-background-color"
      } ${isMarginFirstRow && "mainRow__marginFirstRow"} ${
        isMargin && "mainRow__margin"
      }  ${isPadding && "mainRow__padding"} `}
    >
      {image || title || subTitle ? (
        <div className="mainRow__content--container">
          <div className="mainRow__content">
            {title && (
              <h1
                style={{
                  textAlign: "center",
                  lineHeight: "34px",
                }}
                className={isFontColorWhite && "mainRow__content--colorWhite"}
              >
                {title}
              </h1>
            )}
            <h3
              style={{
                textAlign: "center",
                // lineHeight: "34px",
              }}
              className={isFontColorWhite && "mainRow__content--colorWhite"}
            >
              {subTitle}
            </h3>
            <p
              id="descriptionWrap"
              style={{
                textAlign: "center",
              }}
              className={isFontColorWhite && "mainRow__content--colorWhite"}
            >
              {description}
            </p>
            {hr && <hr />}
            {priceDescription &&
              priceDescription.map(priceDescription => (
                <div className="mainRow__priceDescriptionContainer">
                  <strong>
                    <p
                      // data-aos="fade-up"
                      // data-aos-duration="1500"
                      className={`mainRow__content--priceDescription ${
                        isFontColorWhite && "mainRow__content--colorWhite"
                      }`}
                    >
                      {priceDescription}
                    </p>
                  </strong>
                </div>
              ))}

            {descriptionArray &&
              descriptionArray.map(description => (
                <>
                  <p>
                    <strong>Navn:</strong> {description?.name}
                  </p>
                  <p>
                    <strong>E-post:</strong> {description?.email}
                  </p>
                  <p>
                    <strong>Telefon:</strong> {description?.phone}
                  </p>
                  <p>
                    <strong>Type:</strong> {description?.type}
                  </p>
                  <p>
                    <strong>Alder:</strong> {description?.age} <span>år</span>
                  </p>
                  <p>
                    <strong>Dato:</strong> {description?.date}
                  </p>
                  <p>
                    <strong>Kommentar:</strong> {description?.comment}
                  </p>
                </>
              ))}
          </div>
          {Icon && (
            <div
              className={`mainRow__content--container--button--container ${
                isCenterButton &&
                "mainRow__content--container--button--container--center"
              }`}
            >
              <NavLink to="/kontakt">
                <div className="mainRow__content--container--button--left">
                  <button className="mainRow__content--container--button--container--button">
                    <div className="mainRow__content--container--button--content">
                      <span className="icon">
                        <ScheduleIcon
                          fontSize="small"
                          style={{ marginRight: "2px" }}
                        />
                      </span>
                      <span>Bestill</span>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to="/galleri">
                <div className="mainRow__content--container--button--right">
                  {serMerBilderBtn && (
                    <button className="mainRow__content--container--button--container--button">
                      <div className="mainRow__content--container--button--content">
                        <span className="icon">
                          <ExpandMoreIcon fontSize="small" />
                        </span>
                        <span>Se mer bilder</span>
                      </div>
                    </button>
                  )}
                </div>
              </NavLink>
            </div>
          )}
          {/* 
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
          )} */}
        </div>
      ) : null}

      {image ? (
        <div className={`mainRow__image--container`}>
          <LazyLoadImage
            effect="blur"
            className="mainRow__image--container--image"
            style={{ objectFit: "contain" }} //with is problem
            src={image}
            alt="best-image"
          />
        </div>
      ) : null}

      {imageArray ? (
        <div className="mainRow__image--container">
          {imageArray.map((img, index) => (
            <LazyLoadImage
              effect="blur"
              key={index}
              className="mainRow__image--container--image"
              style={{ objectFit: "contain" }}
              src={img}
              alt="best-image"
            />
          ))}
        </div>
      ) : null}

      {children && isMainPrice ? (
        <div className="mainRow__image--container">{children}</div>
      ) : null}
    </div>
  );
}

export default MainRow;
