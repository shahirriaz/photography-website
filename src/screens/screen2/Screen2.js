import React, { useState } from "react";
import { useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import "./../../Bestill.css";
import Expand from "react-expand-animated";
import LoadingOverlay from "react-loading-overlay";
import { CircularProgress } from "@material-ui/core";

function Screen2({ handleBackBtn, mainFunction, processingReq }) {
  const [loaded, setLoaded] = useState(true); //must be true
  const [{ errorInput, storeInputUser }, dispatch] = useStateValue();
  const [inputUser, setInputUser] = useState({
    name: storeInputUser?.name,
    email: storeInputUser?.email,
    number: storeInputUser?.number,
    message: storeInputUser?.message,
  });
  useEffect(() => {
    if (loaded) {
      setTimeout(() => setLoaded(false), 0);
    }
    // console.log(loaded);
  }, [loaded]);

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setInputUser({
      ...inputUser,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch({
      type: "SEND_INPUTUSER",
      inputUser: inputUser,
    });
    dispatch({
      type: "SEND_INPUTUSER-GLOBAL",
      storeInputUser: inputUser,
    });
  }, [inputUser]);

  return (
    <LoadingOverlay active={loaded} spinner={<CircularProgress />}>
      <div className="bestill__input--container">
        <button onClick={handleBackBtn} className="calendar__backBtn" href="">
          Tilbake
        </button>
        <h1 style={{ marginBottom: "50px" }} className="calendar__firstHeading">
          Legg til info
        </h1>
        <p style={{ marginBottom: "40px" }}>Fortell oss litt om deg selv</p>
        <p>Navn</p>
        <div className="input--name">
          <input
            value={inputUser.name}
            name="name"
            onChange={handleChange}
            type="text"
          />
          {errorInput.name && <p className="input__error">{errorInput.name}</p>}
        </div>
        <p style={{ marginTop: errorInput ? "2rem" : "" }}>E-post</p>
        <div className="input--email">
          <input
            value={inputUser.email}
            name="email"
            onChange={handleChange}
            type="email"
          />
        </div>
        {errorInput.email && <p className="input__error">{errorInput.email}</p>}

        <p>Mobil nummer</p>
        <div className="input--number">
          <input
            value={inputUser.number}
            name="number"
            onChange={handleChange}
            type="text"
          />
          {errorInput.number && (
            <p className="input__error">{errorInput.number}</p>
          )}
        </div>

        <p style={{ marginTop: errorInput ? "2rem" : "" }}>Legg til melding</p>
        <div className="input--message">
          <textarea
          className="userMessage"
            value={inputUser.message}
            name="message"
            onChange={handleChange}
            type="text"
          />
          {/* <input /> */}
        </div>
        {errorInput.message && (
          <p className="input__error">{errorInput.message}</p>
        )}
        {/* <span>Required Info</span> */}
        <div className="nextBtn">
          {window.innerWidth <= 500 ? (
            <button
              onClick={mainFunction}
              id="timeNextBtn"
              className="summary__btn"
            >
              <span>
                {processingReq ? (
                  <CircularProgress
                    className="circularSVG"
                    style={{ color: "white" }}
                  />
                ) : (
                  "Bestill"
                )}
              </span>
            </button>
          ) : null}
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default Screen2;
