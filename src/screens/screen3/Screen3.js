import React from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { useStateValue } from "../../StateProvider";

function Screen3() {
  const [{ date, timePicked }, dispatch] = useStateValue();
  return (
    <div className="screen3">
      <div className="first--horizontal--row">
        <div className="screen3__heading">
          <h1>Great You're Booked!</h1>
        </div>
        <div className="screen3__desc">
          <p>A confirmation emil is on its way to you</p>
        </div>
      </div>

      <div className="second--horizontal--row">
        <div className="dateColumn">
          <h2>{format(date, "dd", { locale: enGB })}</h2>
          <h3>{format(date, "MMM", { locale: enGB })}</h3>
          <p>
            {format(date, "EEEE")} {timePicked}
          </p>
        </div>
        <div className="confirmationColumn">
          <h2 style={{ marginBottom: "4px" }}>Out door Shoot</h2>
          <p style={{ marginBottom: "20px" }}>Staff Member #1</p>
          <p style={{ marginBottom: "8px" }}>1 hr | Meeting</p>
          <p>Olaveien 23 Pluto 6700</p>
        </div>
        {/* <button>Add to My Google Calendar</button> */}
      </div>
    </div>
  );
}

export default Screen3;
