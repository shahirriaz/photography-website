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
  const [
    { date, timePicked, inputUser, service, serviceFromShowCase },
    dispatch,
  ] = useStateValue();
  const [userDataCorrect, setUserDataCorrect] = useState(false);
  const [showS3, setShowS3] = useState(false);
  const [showingOneAndTwo, setshowingOneAndTwo] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [processingReq, setProcessingReq] = useState(false);
  const [someState, setSomeState] = useState(true);

  useEffect(() => {
    const upDateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      dispatch({
        type: "SEND_WIDTH",
        width: width,
      });
    };
    window.addEventListener("resize", upDateWindowDimensions);
    return () => {
      window.removeEventListener("resize", upDateWindowDimensions);
    };
  }, [width]);

  const history = useHistory();
  const { step } = useParams();
  const { path } = useRouteMatch();

  //for inputField
  const [errorInput, setErrorInput] = useState({});

  // const [loaded, setLoaded] = useState(true);

  //Erorr
  const [error, setError] = useState(false);
  const [timeError, setTimeError] = useState(false);

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
      setProcessingReq(true);
      if (date) {
        handleSendingDataToServer();
      } else alert("Vennligst velg dato");
    }
  }, [errorInput]);

  //responsible for conditionally showing screens
  useEffect(() => {
    if (showS3) {
      setShowSummary(true);
      setshowingOneAndTwo(false);
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

  const nextStep = (next) => {
    history.push(
      generatePath(path, {
        step: Math.max(1, Math.min(Number(step) + next, 3)),
      })
    );
  };

  const renderStep = (step) => {
    switch (step) {
      case 3:
        return (
          <Screen2
            processingReq={processingReq}
            mainFunction={mainFunction}
            handleBackBtn={handleBackBtn}
          />
        );

      case 2:
        if (width <= 500) {
          return <ReviewBookingMobile handleNextScreen={mainFunction} />;
        } else if (width >= 500) {
          return (
            <Screen2
              processingReq={processingReq}
              mainFunction={mainFunction}
              handleBackBtn={handleBackBtn}
            />
          );
        }
        break;
      case 1:
        return <Screen1 timeError={timeError} mainFunction={mainFunction} />;

      case 0:
        return <Screen0 />;
      default:
    }
  };

  const mainFunction = () => {
    setUserDataCorrect(true);
    if (step === "1") {
      handleNextScreen1();
    } else if (step === "2" && width <= 500) {
      nextStep(1);
    } else if (step === "2" && width >= 500) {
      handleNextScreen2();
    } else if (step === "3" && width <= 500) {
      handleNextScreen2();
    }
  };

  const handleBackBtn = () => {
    if (step === "3" && width >= 500) {
      nextStep(-2);
    } else nextStep(-1);
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
        typeOfShoot: service[0] || serviceFromShowCase[0],
        durationOfShoot: service[1] || serviceFromShowCase[1],
        typeOfMeeting: service[2] || serviceFromShowCase[2],
      },
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        //  console.log(response.status);
        if ((response.status = 201)) {
          setShowS3(true);
          setProcessingReq(false);
          setSomeState(false);
          //  console.log(showS3);
        } else {
          alert("error");
        }
      })
      .catch((err) => {
        alert(err);
        setProcessingReq(false);
      });
  };

  // console.log(width);

  return (
    <div className="bestill">
      <div className="mainContainer--bestill">
        <div
          className="secondary_container"
          style={{
            width:
              step === "0" ? "90%" : step === "1" && width <= 500 ? "90%" : "",
          }}
        >
          {showingOneAndTwo && renderStep(Number(step))}

          {showSummary && <Screen3 />}
        </div>
        {step != "0" && width >= 501 && someState ? (
          <SummaryComponent
            handleNextScreen={mainFunction}
            error={error}
            timeError={timeError}
            showSummary={showSummary}
            processingReq={processingReq}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Bestill;
