import React from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";

function SummaryComponent({
  date,
  timePicked,
  handleNextScreen,
  error,
  timeError,
}) {
  // console.log(error);
  // console.log(timeError);
  return (
    <div className="wrapperSummray">
      <div className="summary">
        <h2 className="calendar__heading2">Modeling Shoot</h2>
        <p
          style={{
            marginBottom: "3rem",
          }}
        >
          1hr | Meeting
        </p>
        <strong>
          <p>
            {date
              ? format(date, "dd MMM yyyy", {
                  locale: enGB,
                })
              : "Ingen valgt"}{" "}
            &nbsp;
            {timePicked}
          </p>
        </strong>
        <p>Trollskogen, 4085, Hundvåg</p>
        <p>Stavanger, Rogaland</p>
        <button // disabled={loaded}
          onClick={handleNextScreen}
          className="summary__btn"
        >
          Next
        </button>

        {error && (
          <p style={{ marginTop: "1rem", color: "red" }}>Vennligst velg dato</p>
        )}

        {timeError && (
          <p style={{ marginTop: "1rem", color: "red" }}>
            Vennligst velg klokkeslett
          </p>
        )}
      </div>
    </div>
  );
}
export default SummaryComponent;
