import React, { useRef, useState, useEffect } from "react";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import Expand from "react-expand-animated";
import TimeComponent from "./TimeComponent";
import { enGB } from "date-fns/locale";
import { useStateValue } from "../../StateProvider";
import { Link as Scroll } from "react-scroll";
import { animateScroll as animateScroll } from "react-scroll";

function Screen1() {
  const [timeIsVisible, setTimeIsVisible] = useState(false);
  const [date, setDate] = useState();
  const [timePicked, setTimePicked] = useState("");
  const [monthlyView, setMonthlyView] = useState(false);
  const [state, dispatch] = useStateValue();
  // const refPtag = useRef();

  //sending stuff to global state
  useEffect(() => {
    if (date) {
      setTimeIsVisible(true);
      dispatch({
        type: "SEND_DATE",
        date: date,
      });
      if (timePicked) {
        dispatch({
          type: "SEND_TIME",
          timePicked: timePicked,
        });
      }
    }
  }, [date, timePicked]);

  useEffect(() => {
    const dispatchAction = () => {
      dispatch({
        type: "SEND_TIMEISVISIBLE",
        timeIsVisible: timeIsVisible,
      });
    };

    dispatchAction();
  }, [timeIsVisible]);

  var columnContainer = document?.getElementById("test11");
  var btns = columnContainer?.getElementsByClassName("time--stamp");
  for (var i = 0; i < btns?.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("selected");

      // If there's no active class
      if (current?.length > 0) {
        current[0].className = current[0].className.replace(" selected", "");
        // console.log(current[0].className);
      }

      // Add the active class to the current/clicked button
      this.className += " selected";
    });
  }
  const handleP = e => {
    // refPtag.current.scrollIntoView({ behavior: "smooth" });
    for (let i = 0; i < 15; i++) {
      if (parseInt(e.target.id) === i) {
        setTimePicked(e.target.firstChild.nodeValue);
      }
    }
  };

  const handleMonthlyView = () => {
    setMonthlyView(!monthlyView);
    setTimeIsVisible(false);
    const options = {
      duration: 500,
      delay: 0,
      smooth: "easeOutCubic",
    };
    animateScroll.scrollTo(100, options);
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
  const timeArrayEvening = ["5:00 pm"];

  return (
    <div>
      <DatePickerCalendar
        date={date}
        onDateChange={setDate}
        locale={enGB}
        minimumDate={new Date()}
      />

      {date && (
        <MonthlyViewBtn
          timeIsVisible={timeIsVisible}
          handleMonthlyView={handleMonthlyView}
        ></MonthlyViewBtn>
      )}
      <Expand open={timeIsVisible} duration={700}>
        <TimeComponent
          timeArrayMorning={timeArrayMorning}
          timeArrayAfternoon={timeArrayAfternoon}
          timeArrayEvening={timeArrayEvening}
          handleP={handleP}
        />
      </Expand>
    </div>
  );
}

export default Screen1;

function MonthlyViewBtn(props) {
  return (
    <div className="btn--container">
      <button
        className="time__btn"
        style={{
          display: props.timeIsVisible ? "block" : "none",
        }}
        onClick={props.handleMonthlyView}
      >
        {props.timeIsVisible && "Hide time"}
      </button>
    </div>
  );
}
