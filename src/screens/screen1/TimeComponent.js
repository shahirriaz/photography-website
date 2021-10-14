import React from "react";
import "../../Bestill.css";
import { useStateValue } from "../../StateProvider";

function TimeComponent(props) {
  const [{ width }, dispatch] = useStateValue();

  // console.log(width)

  return (
    <div id="containerElement" className="time--container">
      <div id="test11" className={`flex--container`}>
        <h2>Morgen</h2>
        <div className="column--one">
          {props.timeArrayMorning.map((time, idx) => (
            <p
              className="time--stamp"
              id={idx}
              tabIndex={idx}
              onClick={(e) => props.handleP(e)}
            >
              {time}
            </p>
          ))}
        </div>
        <h2>Ettermiddag</h2>
        <div className="column--two">
          {props.timeArrayAfternoon.map((time, idx) => (
            <p
              className={"time--stamp"}
              id={idx + 4}
              tabIndex={idx + 4}
              onClick={(e) => props.handleP(e)}
            >
              {time}
            </p>
          ))}
        </div>
        <h2>Kveld</h2>
        <div className="column--three">
          {props.timeArrayEvening.map((time, idx) => (
            <p
              className={"time--stamp"}
              id={idx + 14}
              tabIndex={idx + 14}
              onClick={(e) => props.handleP(e)}
            >
              {time}
            </p>
          ))}
        </div>
      </div>
      <div className="nextBtn">
        {window.innerWidth <= 500 ? (
          <button
            onClick={props.mainFunction}
            id="timeNextBtn"
            className="summary__btn"
          >
            {" "}
            Neste
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default TimeComponent;
