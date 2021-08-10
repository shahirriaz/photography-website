import React, { useEffect } from "react";
import "./KeyPointsSection.css";
import PeopleIcon from "@material-ui/icons/People";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import VisibilitySensor from "react-visibility-sensor";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import EditIcon from "@material-ui/icons/Edit";
import couple from "./images/parents.png";
function KeyPointsSection() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="keyPointsSection">
      <div className="mainContainerKey">
        <div className="keyPointsSection__section--1">
          <div className="keyPointsSection__section--1__icon">
            <PeopleIcon className="svg-icon" />
          </div>
          <div className="keyPointsSection__section--1__heading">
            <h2 className="keyInformationHeading">Ektepar fra Stavanger</h2>
          </div>
          <div className="keyPointsSection__section--1__text1">
            <p className="keyParagraph">
              Vi er et livlig ektepar med røtter fra Stavanger som fotograferer{" "}
              <br /> i Rogaland området. <br />
            </p>
          </div>
        </div>
        <div className="keyPointsSection__section--2">
          {/* <div className="keyPointsSection__section--2__icon">
            <img
              style={{ objectFit: "contain" }}
              src="https://img.icons8.com/color/48/000000/family.png"
            />
          </div> */}
          <div className="keyPointsSection__section--2__heading">
            <h3 className="keyInformationHeading purple">Bilder vi tar</h3>
          </div>
          <div className="keyPointsSection__section--2__text1">
            <p className="keyParagraph">
              Barn, Familie, Portrett, Gravid, Bryllup, Par
            </p>
          </div>
        </div>

        <div className="keyPointsSection__section--3">
          {/* <div className="keyPointsSection__section--3__icon">
            <CameraAltIcon className="svg-icon" />
          </div> */}
          <div className="keyPointsSection__section--3__heading">
            <VisibilitySensor offset={{ bottom: 0 }}>
              {({ isVisible }) => (
                <div className="countUp--container" style={{ height: 80 }}>
                  {isVisible ? <CountUp duration={0.8} end={6} /> : null}
                </div>
              )}
            </VisibilitySensor>
            <p>års erfaring</p>
          </div>
        </div>
      </div>
      <div className="mainContainerKey">
        <div className="keyPointsSection__section--1">
          <CameraAltIcon className="svg-icon" />
          <div className="keyPointsSection__section--1__heading">
            <h2 className="keyInformationHeading">Fotograf</h2>
          </div>
          <div className="keyPointsSection__section--1__text1">
            <p className="keyParagraph">
              Vi liker å ta bilder i naturen med <br /> naturlig lys og
              omstendigheter.
            </p>
          </div>
        </div>
        <div className="keyPointsSection__section--2">
          {/* <div className="keyPointsSection__section--2__icon">
            <img
              style={{ objectFit: "contain" }}
              src="https://img.icons8.com/color/48/000000/family.png"
            />
          </div> */}
          <div className="keyPointsSection__section--2__heading">
            <h3 className="keyInformationHeading purple">Utstyr vi bruker</h3>
          </div>
          <div className="keyPointsSection__section--2__text1">
            <p className="keyParagraph">Canon ED, Spotlight</p>
          </div>
        </div>

        <div className="keyPointsSection__section--3">
          {/* <div className="keyPointsSection__section--3__icon">
            <CameraAltIcon className="svg-icon" />
          </div> */}
          <div className="keyPointsSection__section--3__heading">
            <VisibilitySensor offset={{ bottom: 0 }}>
              {({ isVisible }) => (
                <div className="countUp--container" style={{ height: 80 }}>
                  {isVisible ? <CountUp duration={2} end={60} /> : null}
                </div>
              )}
            </VisibilitySensor>
            <p>fornøyde kunder</p>
          </div>
        </div>
      </div>
      <div className="mainContainerKey">
        <div className="keyPointsSection__section--1">
          <EditIcon className="svg-icon" />
          <div className="keyPointsSection__section--1__heading">
            <h2 className="keyInformationHeading">Designer</h2>
          </div>
          <div className="keyPointsSection__section--1__text1">
            <p className="keyParagraph">
              Jeg verdsetter enkel innholdsstruktur, <br /> gjennomtenkte
              interaksjoner.
            </p>
          </div>
        </div>
        <div className="keyPointsSection__section--2">
          {/* <div className="keyPointsSection__section--2__icon">
            <img
              style={{ objectFit: "contain" }}
              src="https://img.icons8.com/color/48/000000/family.png"
            />
          </div> */}
          <div className="keyPointsSection__section--2__heading">
            <h3 className="keyInformationHeading purple">
              Ting jeg liker å redigere
            </h3>
          </div>
          <div className="keyPointsSection__section--2__text1">
            <p className="keyParagraph">Bilder og video</p>
          </div>
        </div>

        <div className="keyPointsSection__section--3">
          {/* <div className="keyPointsSection__section--3__icon">
            <CameraAltIcon className="svg-icon" />
          </div> */}
          <div className="keyPointsSection__section--3__heading">
            <VisibilitySensor offset={{ bottom: 0 }}>
              {({ isVisible }) => (
                <div className="countUp--container" style={{ height: 80 }}>
                  {isVisible ? <CountUp duration={0.8} end={456} /> : null}
                </div>
              )}
            </VisibilitySensor>
            <p>redigerte bilder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyPointsSection;
