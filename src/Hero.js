import React from "react";
import "./Hero.css";
import KeyPointsSection from "./KeyPointsSection";
import MainRow from "./MainRow";

function Hero() {
  return (
    <div className="hero">
      <div class="overlay3"></div>
      <div className="hero__text">
        <div className="hero__heading">
          <h1>Fotografering i Stavanger og Sandnes</h1>
        </div>
        <div className="hero__subHeading">
          <h2>
            Hei, Jeg er Aman og velkommen til Memorylane. Jeg fotograferer og
            tar varer på minner for familier, <br /> nylig giftet par og barn
            som nettop har kommet til verden.
          </h2>
        </div>
      </div>
      <div className="keypointsContainer">
        <KeyPointsSection />
      </div>
    </div>
  );
}

export default Hero;
