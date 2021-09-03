import React, { useState } from "react";
import { useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import "./../../Bestill.css";
import Expand from "react-expand-animated";
import LoadingOverlay from "react-loading-overlay";
import { CircularProgress } from "@material-ui/core";

function Screen2({ handleBackBtn, mainFunction }) {
  const [loaded, setLoaded] = useState(true); //must be true
  const [{ errorInput }, dispatch] = useStateValue();
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  useEffect(() => {
    if (loaded) {
      setTimeout(() => setLoaded(false), 1000);
    }
    // console.log(loaded);
  }, [loaded]);

  let name, value;
  const handleChange = e => {
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
  }, [inputUser]);

  return (
    <LoadingOverlay active={loaded} spinner={<CircularProgress />}>
      <div className="bestill__input--container">
        <button onClick={handleBackBtn} className="calendar__backBtn" href="">
          Back
        </button>
        <h1 style={{ marginBottom: "50px" }} className="calendar__firstHeading">
          Add your info
        </h1>
        <p style={{ marginBottom: "40px" }}>Tell us a bit about yourself</p>
        <p>Name</p>
        <div className="input--name">
          <input
            value={inputUser.name}
            name="name"
            onChange={handleChange}
            type="text"
          />
          {errorInput.name && <p className="input__error">{errorInput.name}</p>}
        </div>
        <p style={{ marginTop: errorInput ? "2rem" : "" }}>Emaill</p>
        <div className="input--email">
          <input
            value={inputUser.email}
            name="email"
            onChange={handleChange}
            type="email"
          />
        </div>
        {errorInput.email && <p className="input__error">{errorInput.email}</p>}

        <p>Phone number</p>
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

        <p style={{ marginTop: errorInput ? "2rem" : "" }}>Add your message</p>
        <div className="input--message">
          <input
            value={inputUser.message}
            name="message"
            onChange={handleChange}
            type="text"
          />
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
              {" "}
              Bestill
            </button>
          ) : null}
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default Screen2;
