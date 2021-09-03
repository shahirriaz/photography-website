import React from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { useParams } from "react-router";
import { useStateValue } from "../StateProvider";

function SummaryComponent({
  date,
  timePicked,
  handleNextScreen,
  error,
  timeError,
  showSummary,
}) {
  const [{ service, serviceFromShowCase }, dispatch] = useStateValue();
  const { step } = useParams();

  return (
    <div className="wrapperSummray">
      <div className="summary">
        <div className="summary--container">
          <h2 className="calendar__heading2">
            {service[0] || serviceFromShowCase[0]}
          </h2>
          <p
            style={{
              marginBottom: "3rem",
            }}
          >
            {service[1] || serviceFromShowCase[1] || "Ingen valgt"} |{" "}
            {service[2] || serviceFromShowCase[2] || "Ingen valgt"}
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
          <button
            disabled={showSummary}
            onClick={handleNextScreen}
            className="summary__btn"
          >
            Next
          </button>

          {error && (
            <p style={{ marginTop: "1rem", color: "red" }}>
              Vennligst velg dato
            </p>
          )}

          {timeError && (
            <p style={{ marginTop: "1rem", color: "red" }}>
              Vennligst velg klokkeslett
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default SummaryComponent;
