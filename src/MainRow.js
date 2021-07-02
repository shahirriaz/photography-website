import React, { useState } from "react";
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
  isAlignItemsCenter,
  isRowFlexDirection,
  isColumnFlexDirection,
  isJustifyContentCenter,
  isAlignItemsCenterImage,
  isMarginRightImage,
  isMarginLeftImage,
  isMarginRightContent,
  isContentWidth,
  isBackgroundWhite,
  imageArray,
  children, //PriceComponent
  // isSubPrice,
  isMainPrice,
  hr,
  priceDescription,
  isFontColorWhite,
  Icon,
}) {
  return (
    <div
      id={id}
      className={`mainRow ${isReverse && "mainRow__reversed"} ${
        isAlignItemsCenter && "mainRow__alignItemsCenter"
      }  ${isRowFlexDirection && "mainRow_flexDirectionRow"} ${
        isColumnFlexDirection && "mainRow_flexDirectionColumn"
      } ${isJustifyContentCenter && "mainRow_justifyContentCenter "} ${
        isBackgroundWhite && "mainRow-background-color"
      }  `}
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
            {title && (
              <h1
                className={isFontColorWhite && "mainRow__content--colorWhite"}
              >
                {title}
              </h1>
            )}
            <h3 className={isFontColorWhite && "mainRow__content--colorWhite"}>
              {subTitle}
            </h3>
            <p className={isFontColorWhite && "mainRow__content--colorWhite"}>
              {description}
            </p>
            {hr && <hr />}
            {priceDescription &&
              priceDescription.map(priceDescription => (
                <>
                  <strong>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className={`mainRow__content--priceDescription ${
                        isFontColorWhite && "mainRow__content--colorWhite"
                      }`}
                    >
                      {priceDescription}
                    </p>
                  </strong>
                </>
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
                </>
              ))}
          </div>
          {Icon && (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mainRow__content--container--button--container"
            >
              <NavLink to="/contact">
                <div className="mainRow__content--container--button--left">
                  <button className="mainRow__content--container--button--container--button">
                    <div className="mainRow__content--container--button--content">
                      <span className="icon">
                        <ScheduleIcon fontSize="large" />
                      </span>
                      <span>Bestill</span>
                    </div>
                  </button>
                </div>
              </NavLink>

              <NavLink to="/gallery">
                <div className="mainRow__content--container--button--right">
                  <button className="mainRow__content--container--button--container--button">
                    <div className="mainRow__content--container--button--content">
                      <span className="icon">
                        <ExpandMoreIcon fontSize="large" />
                      </span>
                      <span>Se mer bilder</span>
                    </div>
                  </button>
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
            effect="blur"
            style={{ width: "500px", objectFit: "contain" }}
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
              effect="blur"
              key={index}
              style={{ width: "600px", objectFit: "contain" }}
              src={img}
              alt="best-image"
            />
          ))}
        </div>
      ) : null}

      {children && isMainPrice ? (
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
