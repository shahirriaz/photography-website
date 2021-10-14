import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { useParams } from "react-router";
import { useStateValue } from "../StateProvider";
import LoadingOverlay from "react-loading-overlay";
import { CircularProgress } from "@material-ui/core";

function SummaryComponent({
  handleNextScreen,
  error,
  timeError,
  showSummary,
  processingReq,
}) {
  const [
    { service, serviceFromShowCase, storeDate, theme, timePicked, width },
    dispatch,
  ] = useStateValue();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  // useEffect(() => {
  //   if (processingReq) {
  //     setTimeout(() => setLoaded(false), 1000);
  //   }
  //   // console.log(loaded);
  // }, [loaded]);

  const handleThemeClick = (e) => {
    setSelectedTheme(e.target.id);
  };

  useEffect(() => {
    dispatch({
      type: "SEND_THEME",
      theme: selectedTheme,
    });
  }, [selectedTheme]);

  // console.log(width)

  return (
    <div className="wrapperSummray">
      <div className="summary">
        <LoadingOverlay active={processingReq} spinner={<CircularProgress />}>
          <div className="summary--container">
            <h2 className="calendar__heading2">
              {service[0] || serviceFromShowCase[0] || "Familie Shoot"}
            </h2>
            <p
              style={{
                marginBottom: "3rem",
              }}
            >
              {service[1] || serviceFromShowCase[1]}{" "}
              {service[2] ||
                serviceFromShowCase[2] ||
                `1 time | ${" "} Innledende møte`}
            </p>
            <strong>
              <p style={{ marginBottom: "1rem" }}>
                {storeDate
                  ? format(storeDate, "dd MMM yyyy", {
                      locale: enGB,
                    })
                  : "Ingen dato valgt"}{" "}
                &nbsp;
                {timePicked}
              </p>
            </strong>

            <p style={{ marginBottom: "1rem" }}>
              {theme ? (
                <span>
                  Jeg ønsker å ha shoot{" "}
                  {theme === "Natur" ? "i" : theme === "Strand" ? "med" : "i"}{" "}
                  <strong>{theme}</strong>
                </span>
              ) : (
                "Ingen setting valgt"
              )}
            </p>

            <div className="themes">
              <div onClick={(e) => handleThemeClick(e)} className="selection">
                <input id="Natur" name="theme" type="radio" />
                <label for="Natur">Natur</label>
              </div>
              <div onClick={(e) => handleThemeClick(e)} class="selection">
                <input id="Strand" name="theme" type="radio" />
                <label for="Strand">Strand</label>
              </div>
              <div onClick={(e) => handleThemeClick(e)} class="selection">
                <input id="Studio" name="theme" type="radio" />
                <label for="Studio">Studio</label>
              </div>
            </div>
            {/* <p>Trollskogen, 4085, Hundvåg</p>
          <p>Stavanger, Rogaland</p> */}
            <button
              style={{
                position: width <= 499 ? "absolute" : "",
                transform: width <= 499 ? "translate(0,35vh)" : "",
              }}
              disabled={showSummary}
              onClick={handleNextScreen}
              className="summary__btn"
            >
              Neste
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
        </LoadingOverlay>
      </div>
    </div>
  );
}
export default SummaryComponent;
