import React from "react";
import "./QuestionBanner.css";
import MainRow from "./MainRow";
import { Link } from "react-router-dom";

function QuestionBanner() {
  return (
    <div className="questionBanner">
      <div class="overlay2"></div>
      <div className="questionBanner__container">
        <div className="questionBanner__header">
          <h1>Har du noen spørsmål?</h1>
        </div>
        <div className="questionBanner__description">
          <p>Send oss en mail og vi besvarer så fort vi kan </p>
        </div>
        <div className="questionBanner__buttonContainer">
          <Link to="kontakt">
            <button className="questionBanner__button">Kontakt oss</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuestionBanner;
