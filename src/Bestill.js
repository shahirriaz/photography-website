import "./Bestill.css";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import LoadingOverlay from "react-loading-overlay";
import Screen2 from "./screens/screen2/Screen2";
import SummaryComponent from "./screens/SummaryComponent";
import Screen1 from "./screens/screen1/Screen1";
import { useStateValue } from "./StateProvider";
import inputValidation from "./inputValidation";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { animateScroll as animateScroll } from "react-scroll";
import Screen3 from "./screens/screen3/Screen3";
import axios from "./axios";
import {
  generatePath,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router";
import Screen0 from "./screens/screen0/Screen0";
import ReviewBookingMobile from "./screens/ReviewBookingMobile";

function Bestill() {
  const [{ date, timePicked, inputUser, service }, dispatch] = useStateValue();
  const [userDataCorrect, setUserDataCorrect] = useState(false);
  const [showS3, setShowS3] = useState(false);
  const [showingOneAndTwo, setshowingOneAndTwo] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const upDateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", upDateWindowDimensions);
    return () => {
      window.removeEventListener("resize", upDateWindowDimensions);
    };
  }, []);

  console.log(width);

  const history = useHistory();
  const { step } = useParams();
  const { path } = useRouteMatch();

  //for inputField
  const [errorInput, setErrorInput] = useState({});

  // const [loaded, setLoaded] = useState(true);

  //Erorr
  const [error, setError] = useState(false);
  const [timeError, setTimeError] = useState(false);

  // useEffect(() => {
  //   if (loaded) {
  //     setTimeout(() => setLoaded(false), 1000);
  //   }

  // }, [loaded]);

  //error handling screen1
  useEffect(() => {
    if (date) {
      setError(false);
    }
    if (timePicked) {
      setTimeError(false);
    }
  }, [date, timePicked]);

  //scroll to top on component render//rerender
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

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
      if (date && service.length != 0) {
        handleSendingDataToServer();
      } else alert("Vennligst velg dato eller tjeneste");
    }
  }, [errorInput]);

  useEffect(() => {
    if (showS3) {
      setShowSummary(true);
      setshowingOneAndTwo(false);
    } else {
      // setLoaded(true);
      //show a spinner on next button when sending data or whatever
    }
  }, [showS3]);

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

  const nextStep = next => {
    history.push(
      generatePath(path, {
        step: Math.max(1, Math.min(Number(step) + next, 2)),
      })
    );
  };

  const renderStep = step => {
    switch (step) {
      // case 3:
      //   return (
      //     <Screen2 mainFunction={mainFunction} handleBackBtn={handleBackBtn} />
      //   );

      case 2:
        if (width <= 500) {
          console.log("im running");
          return <ReviewBookingMobile handleNextScreen={mainFunction} />;
        } else if (width >= 768) {
          return (
            <Screen2
              mainFunction={mainFunction}
              handleBackBtn={handleBackBtn}
            />
          );
        }

      case 1:
        return <Screen1 timeError={timeError} mainFunction={mainFunction} />;
      case 0:
        return <Screen0 />;
      default:
    }
  };

  const mainFunction = () => {
    console.log("HEllo");
    setUserDataCorrect(true);
    if (step === "1") {
      handleNextScreen1();
    } else if (step === "2" && width <= 500) {
      nextStep(1);
    } else if (step === "2" && width >= 768) {
      handleNextScreen2();
    }
    // else if (step === "3") {
    //   handleNextScreen2();
    // }
  };

  const handleBackBtn = () => {
    nextStep(-1);
  };

  const handleNextScreen1 = () => {
    checkErrorsForScreen1();
    if (checkErrorsForScreen1() && step === "1") {
      // setLoaded(true);
      nextStep(1);
    }
  };

  const handleNextScreen2 = () => {
    setErrorInput(inputValidation(inputUser));
  };

  //handle also showing screen3 if response from server is ok
  const handleSendingDataToServer = () => {
    axios({
      method: "POST",
      url: "/bekreftelse",
      data: {
        date: format(date, "dd MMM yyyy", { locale: enGB }),
        timePicked: timePicked,
        inputUser: inputUser,
        typeOfShoot: service[0],
        durationOfShoot: service[1],
        typeOfMeeting: service[2],
      },
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    })
      .then(response => {
        //  console.log(response.status);
        if ((response.status = 201)) {
          setShowS3(true);
          //  console.log(showS3);
        } else {
          alert("error");
        }
      })
      .catch(err => {
        alert(err);
      });
  };

  console.log(width);

  return (
    <div className="bestill">
      <div className="mainContainer--bestill">
        <div className="secondary_container">
          {showingOneAndTwo && renderStep(Number(step))}

          {showSummary && <Screen3 />}
        </div>
        {step != "0" && width >= 500 ? (
          <SummaryComponent
            date={date}
            timePicked={timePicked}
            handleNextScreen={mainFunction}
            error={error}
            timeError={timeError}
            showSummary={showSummary}
          />
        ) : null}
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

// {showingScreen1 || showingScreen2 ? (
//   <>
//     {showingScreen2 ? (
//       <button
//         onClick={handleBackClick}
//         className="calendar__backBtn"
//         href=""
//       >
//         Back
//       </button>
//     ) : (
//       ""
//     )}

// <h1 className="calendar__firstHeading">
//   {showingScreen1 ? "Schedule Online" : "Add your info"}
// </h1>
// {showingScreen1 ? (
//   <p style={{ fontSize: "18px" }}>
//     Selected date:{" "}
//     {date
//       ? format(date, "dd MMM yyyy", { locale: enGB })
//       : "Ingen valgt"}
//     .
//   </p>
// ) : (
//   <p style={{ fontSize: "18px" }}>
//     {showingScreen2 ? "Tell us a bit about yourself" : ""}
//   </p>
// )}
//     <div id="scrollID" className="calendar__container">
//       <div className="box" id="box-1">
//         {showingScreen1 && <Screen1 />}
//       </div>
//       <div className="box" id="box-2">
//         {showingScreen2 && <InputFieldComponent />}
//       </div>
//     </div>
//   </>
// ) : (
//   <div className="box" id="box-3">
//     {showingScreen3 && <Screen3 />}
//   </div>
// )}

{
  /* <LoadingOverlay
            active={loaded}
            spinner={<CircularProgress />}
            text="Loading your content..."
          > */
}

{
  /* </LoadingOverlay> */
}

// <h1 className="calendar__firstHeading">
// {showingScreen1 ? "Schedule Online" : "Add your info"}
// </h1>
// {showingScreen1 ? (
// <p style={{ fontSize: "18px" }}>
//   Selected date:{" "}
//   {date
//     ? format(date, "dd MMM yyyy", { locale: enGB })
//     : "Ingen valgt"}
//   .
// </p>
// ) : (
// <p style={{ fontSize: "18px" }}>
//   {showingScreen2 ? "Tell us a bit about yourself" : ""}
// </p>
// )}

// if (Object.keys(errorInput).length === 0 && showingScreen2 === false) {
//   nextStep(1);
// } else return;

// setLoaded(!loaded);
// only reset to top screen if user has picked date and time
// if (date && timePicked) window.scrollTo(0, 0);
