import React from "react";
import { useHistory } from "react-router";

function TimeComponent(props) {
  const history = useHistory();

  // const handleClick = () => {
  //   history.push("/bestill/step/2");
  // };

  return (
    <div id="containerElement" className="time--container">
      <div className="selectTime">
        <h2>Velg klokkeslett:</h2>
      </div>
      <span className="time--error">
        {props.timeError && "Vennligst velg klokkeslett"}
      </span>
      <div id="test11" className="flex--container">
        <div className="column--one">
          <h2>Morgen</h2>
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
          <h2>Ettermiddag</h2>
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
          <h2>Kveld</h2>
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
      <div className="nextBtn">
        {window.innerWidth <= 500 ? (
          <button
            onClick={props.mainFunction}
            id="timeNextBtn"
            className="summary__btn"
          >
            {" "}
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default TimeComponent;
