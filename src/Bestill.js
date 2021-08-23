import "./Bestill.css";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import LoadingOverlay from "react-loading-overlay";
import InputFieldComponent from "./screens/screen2/InputfieldComponent";
import SummaryComponent from "./screens/SummaryComponent";
import Screen1 from "./screens/screen1/Screen1";
import { useStateValue } from "./StateProvider";
import inputValidation from "./inputValidation";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { animateScroll as animateScroll } from "react-scroll";
import Screen3 from "./screens/screen3/Screen3";
// import { useHistory } from "react-router-dom";

function Bestill() {
  const [{ date, timePicked, inputUser, timeIsVisible }, dispatch] =
    useStateValue();
  const [showingScreen1, setShowingScreen1] = useState(true);
  const [showingScreen2, setShowingScreen2] = useState(false);
  const [showingScreen3, setShowingScreen3] = useState(false);
  const [userDataCorrect, setUserDataCorrect] = useState(false);
  const [showSummaryPanel, setShowSummaryPanel] = useState(true);

  // const history = useHistory();

  //for inputField
  const [errorInput, setErrorInput] = useState({});

  const [loaded, setLoaded] = useState(true);

  //Erorr
  const [error, setError] = useState(false);
  const [timeError, setTimeError] = useState(false);

  const options = {
    duration: 1,
    delay: 0,
    smooth: "linear",
  };

  useEffect(() => {
    if (date) {
      setError(false);
    }
    if (timePicked) {
      setTimeError(false);
    }
  }, [date, timePicked]);

  //handleScroll
  useEffect(() => {
    if (timeIsVisible) animateScroll.scrollToBottom(options);
  }, [timeIsVisible]);

  //scroll to top on component render//rerender
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Inputfield component receives error from reducer and renders it
  //Condition must be met to stop showing screen2
  useEffect(() => {
    if (errorInput) {
      dispatch({
        type: "SEND_INPUT_ERROR",
        errorInput: errorInput,
      });
    }
    if (Object.keys(errorInput).length === 0 && userDataCorrect) {
      //an input field is not empty
      setShowingScreen2(false);
      setShowingScreen3(true);
      setShowSummaryPanel(false);
    }
  }, [errorInput]);

  const handleNextScreen = () => {
    setUserDataCorrect(true);
    checkErrorsForScreen1();

    if (checkErrorsForScreen1()) {
      setShowingScreen1(false);
      setShowingScreen2(true);
    }

    if (showingScreen2 && inputUser) {
      setErrorInput(inputValidation(inputUser));
    }

    // setLoaded(!loaded);
    // only reset to top screen if user has picked date and time
    if (date && timePicked) window.scrollTo(0, 0);
  };

  function checkErrorsForScreen1() {
    // for screen 1
    if (!date) {
      setError(true);
      return false;
    } else if (!timePicked) {
      setTimeError(true);
      return false;
    } else return true;
  }

  const handleBackClick = () => {
    if (showingScreen2) {
      setShowingScreen2(false);
      setShowingScreen1(true);
    }
  };

  return (
    <div className="bestill">
      <div className="mainContainer--bestill">
        <div className="secondary_container">
          {showingScreen1 || showingScreen2 ? (
            <>
              {showingScreen2 ? (
                <button
                  onClick={handleBackClick}
                  className="calendar__backBtn"
                  href=""
                >
                  Back
                </button>
              ) : (
                ""
              )}

              <h1 className="calendar__firstHeading">
                {showingScreen1 ? "Schedule Online" : "Add your info"}
              </h1>
              {showingScreen1 ? (
                <p style={{ fontSize: "18px" }}>
                  Selected date:{" "}
                  {date
                    ? format(date, "dd MMM yyyy", { locale: enGB })
                    : "Ingen valgt"}
                  .
                </p>
              ) : (
                <p style={{ fontSize: "18px" }}>
                  {showingScreen2 ? "Tell us a bit about yourself" : ""}
                </p>
              )}
              <div id="scrollID" className="calendar__container">
                {showingScreen1 && <Screen1 />}
                {/* screen 2 */}
                {showingScreen2 && <InputFieldComponent />}
              </div>
            </>
          ) : (
            showingScreen3 && <Screen3 />
          )}

          {/* <LoadingOverlay
            active={loaded}
            spinner={<CircularProgress />}
            text="Loading your content..."
          > */}

          {/* </LoadingOverlay> */}
        </div>

        {/* i will go false when screen 3 shows */}
        {showSummaryPanel && (
          <SummaryComponent
            date={date}
            timePicked={timePicked}
            handleNextScreen={handleNextScreen}
            error={error}
            timeError={timeError}
          />
        )}
      </div>
    </div>
  );
}

export default Bestill;

// useEffect(() => {
//   if (date) {
//     ref?.current?.scrollIntoView({ behavior: "smooth" });
//     setIsVisible(true);
//     setError(false);
//   }
//   if (timePicked) setTimeError(false);
// }, [date, timePicked]);

// useEffect(() => {
//   if (loaded) {
//     setTimeout(() => setLoaded(false), 1000);
//   }
//   // console.log(loaded);
// }, [loaded]);
