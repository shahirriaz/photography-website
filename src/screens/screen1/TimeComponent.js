import React from "react";
import { Element } from "react-scroll";

function TimeComponent(props) {
  return (
    <div id="containerElement" className="time--container">
      <div id="test11" className="flex--container">
        <div className="column--one">
          <h2>Morning</h2>
          {props.timeArrayMorning.map((time, idx) => (
            <p
              className={"time--stamp"}
              id={idx}
              tabIndex={idx}
              onClick={e => props.handleP(e)}
            >
              {time}
            </p>
          ))}
        </div>
        <div className="column--two">
          <h2>Afternoon</h2>
          {props.timeArrayAfternoon.map((time, idx) => (
            <p
              className={"time--stamp"}
              id={idx + 4}
              tabIndex={idx + 4}
              onClick={e => props.handleP(e)}
            >
              {time}
            </p>
          ))}
        </div>
        <div className="column--three">
          <h2>Evening</h2>
          {props.timeArrayEvening.map((time, idx) => (
            <p
              className={"time--stamp"}
              id={idx + 14}
              tabIndex={idx + 14}
              onClick={e => props.handleP(e)}
            >
              {time}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimeComponent;
