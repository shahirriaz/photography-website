import React, { useEffect, useState } from "react";
import "./MainRow.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import ScheduleIcon from "@material-ui/icons/Schedule";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";

function MainRow({
  id,
  title,
  subTitle,
  description,
  isBackgroundWhite,
  hr,
  isMargin,
  isMarginFirstRow,
  isPadding,
  isFontColorWhite,
}) {
  return (
    <div
      id={id}
      className={`mainRow  ${isBackgroundWhite && "mainRow-background-color"} ${
        isMarginFirstRow && "mainRow__marginFirstRow"
      } ${isMargin && "mainRow__margin"}  ${isPadding && "mainRow__padding"} `}
    >
      { title || subTitle ? (
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
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MainRow;
