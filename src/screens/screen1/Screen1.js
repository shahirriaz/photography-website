import React, { useState, useEffect } from "react";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import TimeComponent from "./TimeComponent";
import { enGB } from "date-fns/locale";
import { format, isEqual, isSameDay } from "date-fns";
import { useStateValue } from "../../StateProvider";
import { animateScroll as animateScroll } from "react-scroll";
import db from "./../../firebase";
import LoadingOverlay from "react-loading-overlay";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";
import smoothscroll from "smoothscroll-polyfill";

function Screen1({ mainFunction, timeError }) {
  // const [timeIsVisible, setTimeIsVisible] = useState(false);
  const [date, setDate] = useState();
  const [timePicked, setTimePicked] = useState("");
  const [{ storeDate, storeTimeStamp, width }, dispatch] = useStateValue();
  const [existingDates, setExistingDates] = useState([]);
  const history = useHistory();
  const [loaded, setLoaded] = useState(true); //true must be
  const [todayDate, setTodayDate] = useState([]);

  // console.log(width)

  useEffect(() => {
    smoothscroll.polyfill();
    window.scrollTo(0, 100);
  }, []);

  var columnContainer = document?.getElementById("test11");
  var btns = columnContainer?.getElementsByClassName("time--stamp");

  // console.log(btns)

  useEffect(() => {
    for (var i = 0; i < btns?.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("selected");
        // console.log(current)
        // If there's no active class
        if (current?.length > 0) {
          // console.log("lol")
          current[0].className = current[0].className.replace(" selected", "");
          // console.log(current[0].className);
        }

        // Add the active class to the current/clicked button
        // console.log(this)
        this.className += " selected";
      });
    }
  }, [btns]);

  const handleP = (e) => {
    for (let i = 0; i < 15; i++) {
      if (parseInt(e.target.id) === i) {
        setTimePicked(e.target.firstChild.nodeValue);
      }
    }
  };

  //Arrays
  const timeArrayMorning = ["10:00 am", "10:30 am", "11:00 am", "11:30 am"];
  const timeArrayAfternoon = [
    "12:00 pm",
    "12:30 pm",
    "13:00 pm",
    "13:30 pm",
    "14:00 pm",
    "14:30 pm",
    "15:00 pm",
    "15:30 pm",
    "16:00 pm",
    "16:30 pm",
  ];
  const timeArrayEvening = ["17:00 pm", "17:30 pm", "18:00 pm", "18:30 pm"];

  useEffect(() => {
    if (loaded) {
      setTimeout(() => setLoaded(false), 0);
    }
  }, [loaded]);

  // const options = {
  //   duration: 1000,
  //   //smooth: true,
  //   delay: 500,
  //   smooth: "linear",
  // };

  //sending DATE AND TIMEPICKED TO GLOBAL
  useEffect(() => {
    if (date) {
      // animateScroll.scrollTo(800, options);
      dispatch({
        type: "SEND_DATE",
        date: date,
      });
      dispatch({
        type: "SEND_DATE-TO-GLOBAL",
        storeDate: date,
      });
    }
    if (timePicked) {
      dispatch({
        type: "SEND_TIME",
        timePicked: timePicked,
      });
      dispatch({
        type: "SEND_SELECTED-TIMESTAMP",
        storeTimeStamp: timePicked,
      });
    }
  }, [date, timePicked]);

  //Every unavailable date coming from db
  useEffect(() => {
    const getData = async () => {
      const events = await db.collection("bookingDate");
      events.get().then((querySnapshot) => {
        const allDatesFromDb = querySnapshot.docs.map((doc) => {
          return doc.data().date.toDate();
        });
        setExistingDates(allDatesFromDb);
      });
    };
    getData();
  }, []);

  useEffect(() => {
    setTodayDate([new Date()]);
  }, []);

  //modify calendar days based on data recieved from db
  const modifiers = {
    disabled: (date) => {
      const isDisabled = existingDates.some((dateToDisable) =>
        isEqual(dateToDisable, date)
      );
      return isDisabled;
    },
    highlight: (date) => {
      const isHighlight = existingDates.some((dateToHighlight) => {
        return (
          dateToHighlight.getTime() === date.getTime() &&
          dateToHighlight > new Date()
        );
      });
      return isHighlight;
    },
    disableCurrentDay: (date) => {
      const isCurrnetDay = todayDate.some((dateToDisable) =>
        isSameDay(dateToDisable, date)
      );

      return isCurrnetDay;
    },
  };

  const modifiersClassNames = {
    highlight: "-highlight",
    disableCurrentDay: "-disableCurrentDay",
  };

  const handleBackBtn = () => {
    history.push("/bestill/step/0");
  };

  return (
    <div className="screen1">
      <LoadingOverlay active={loaded} spinner={<CircularProgress />}>
        <div className="specific--calendar--container--s1">
          <button onClick={handleBackBtn} className="calendar__backBtn" href="">
            Tilbake
          </button>
          <h1 className="calendar__firstHeading">Bestill med noen klikk</h1>
          <p className="calendar__valgdtDatoTxt">
            Valgt dato:{" "}
            <strong>
              {" "}
              {storeDate
                ? format(storeDate, "dd MMM yyyy", { locale: enGB })
                : "Ingen valgt"}
            </strong>
          </p>

          <DatePickerCalendar
            date={storeDate}
            onDateChange={setDate}
            locale={enGB}
            minimumDate={new Date()}
            modifiers={modifiers}
            modifiersClassNames={modifiersClassNames}
            // onDayClick={handleDayClick}
          />
          {width <= 500 ? (
            <div className="selectTime">
              <p className="calendar__valgtKlokke">
                Valgt klokkeslett:{" "}
                <strong>
                  {storeTimeStamp ? storeTimeStamp : "Ingen valgt"}
                </strong>
              </p>
            </div>
          ) : null}
          {width <= 500 ? (
            <span className="time--error">
              {timeError && "Vennligst velg klokkeslett"}
            </span>
          ) : null}
        </div>
      </LoadingOverlay>

      <TimeComponent
        timeArrayMorning={timeArrayMorning}
        timeArrayAfternoon={timeArrayAfternoon}
        timeArrayEvening={timeArrayEvening}
        handleP={handleP}
        mainFunction={mainFunction}
        timeError={timeError}
      />
    </div>
  );
}

export default Screen1;
