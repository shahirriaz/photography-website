import React from "react";
import "./Screen0.css";
import ServiceCard from "./ServiceCard";
import familie_1 from "../../images/gallery/family/compressed/familie_1.jpg";
import bryllup_1 from "../../images/gallery/bryllup/compressed/bryllup_1.jpg";
import barn_15 from "../../images/gallery/barn/compressed/barn_15.jpg";
import ShowCaseComponent from "./ShowCaseComponent";
import { generatePath, useHistory, useParams } from "react-router";

function Screen0() {
  const { summary } = useParams();
  const history = useHistory();

  //push to summary page
  const handleClick = idForPath => () => {
    history.push(
      generatePath("/bestill/step/:step/:summary", {
        step: 0,
        summary: idForPath,
      })
    );
  };

  const renderShowCase = summary => {
    switch (summary) {
      case undefined:
        return (
          <div className="serviceCard--container">
            <ServiceCard
              handleClick={handleClick}
              idForPath={"familie"}
              image={
                "https://firebasestorage.googleapis.com/v0/b/photography-5b191.appspot.com/o/familie_1.jpg?alt=media&token=5fe52872-de82-4ad1-a00b-488b138d71a7"
              }
              heading={"Familie Shoot"}
              hour={"1 time"}
              desc={"Innledende møte"}
            />
            <ServiceCard
              handleClick={handleClick}
              idForPath={"bryllup"}
              image={
                "https://firebasestorage.googleapis.com/v0/b/photography-5b191.appspot.com/o/bryllup_1.jpg?alt=media&token=12f1caf6-72b3-445e-840b-7536c8f5a2ce"
              }
              heading={"Bryllup Shoot"}
              hour={"1 time"}
              desc={"Innledende møte"}
            />
            <ServiceCard
              handleClick={handleClick}
              idForPath={"barn"}
              image={
                "https://firebasestorage.googleapis.com/v0/b/photography-5b191.appspot.com/o/barn_15.jpg?alt=media&token=11a93a3c-3bdc-4ba4-8416-47712109848f"
              }
              heading={"Barn Shoot"}
              hour={"1 time"}
              desc={"Innledende møte"}
            />
          </div>
        );

      case "familie":
        return (
          <ShowCaseComponent
            image={
              "https://firebasestorage.googleapis.com/v0/b/photography-5b191.appspot.com/o/bryllup_1.jpg?alt=media&token=12f1caf6-72b3-445e-840b-7536c8f5a2ce"
            }
            heading={"Familie Shoot"}
            duration={"1 time"}
            typeOfMeeting="Innledende møte"
            serviceDescP="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
          />
        );
      case "bryllup":
        return (
          <ShowCaseComponent
            image={
              "https://firebasestorage.googleapis.com/v0/b/photography-5b191.appspot.com/o/barn_15.jpg?alt=media&token=11a93a3c-3bdc-4ba4-8416-47712109848f"
            }
            heading={"Bryllup Shoot"}
            duration={"1 time"}
            typeOfMeeting="Innledende møte"
            serviceDescP="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
          />
        );
      case "barn":
        return (
          <ShowCaseComponent
            image={
              "https://firebasestorage.googleapis.com/v0/b/photography-5b191.appspot.com/o/barn_15.jpg?alt=media&token=11a93a3c-3bdc-4ba4-8416-47712109848f"
            }
            heading={"Barn Shoot"}
            duration={"1 time"}
            typeOfMeeting="Innledende møte"
            serviceDescP="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
          />
        );

      default:
    }
  };

  return (
    <div className="screen0">
      {summary === undefined ? <h1>Våres tjenester</h1> : ""}
      <section>{renderShowCase(summary)}</section>
    </div>
  );
}

export default Screen0;
