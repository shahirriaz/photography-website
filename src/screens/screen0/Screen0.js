  import React from "react";
import "./Screen0.css";
import ServiceCard from "./ServiceCard";
import small_family from "../../images/gallery/family/screen0/small.jpg";
import small_bryllup from "../../images/gallery/bryllup/small.jpg";
import small_barn from "../../images/gallery/barn/screen0/small.jpg";
import small_couple from "../../images/gallery/couple/screen0/small.jpg";
import f_familie_1 from "../../images/gallery/family/compressed/f_familie_1.jpg";
import f_bryllup_1 from "../../images/gallery/bryllup/compressed/f_bryllup_1.jpg";
import f_barnBeata from "../../images/gallery/beata/compressed/f_beata.jpg";
import f_couple from "../../images/gallery/couple/compressed/f_par_2.jpg";
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
              image={small_family}
              heading={"Familie Shoot"}
              hour={"1 time"}
              desc={"Innledende møte"}
            />
            <ServiceCard
              handleClick={handleClick}
              idForPath={"bryllup"}
              image={small_bryllup}
              heading={"Bryllup Shoot"}
              hour={"1 time"}
              desc={"Innledende møte"}
            />
            <ServiceCard
              handleClick={handleClick}
              idForPath={"barn"}
              image={small_barn}
              heading={"Barn Shoot"}
              hour={"1 time"}
              desc={"Innledende møte"}
            />
            <ServiceCard
              handleClick={handleClick}
              idForPath={"portrett"}
              image={
                "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              }
              heading={"Portrett"}
              hour={"1 time"}
              desc={"Innledende møte"}
            />
            <ServiceCard
              handleClick={handleClick}
              idForPath={"par"}
              image={small_couple}
              heading={"Par"}
              hour={"1 time"}
              desc={"Innledende møte"}
            />
            <ServiceCard
              handleClick={handleClick}
              idForPath={"gravid"}
              image={
                "https://images.unsplash.com/photo-1585010873004-923f9a54e54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
              }
              heading={"Gravid"}
              hour={"1 time"}
              desc={"Innledende møte"}
            />
          </div>
        );

      case "familie":
        return (
          <ShowCaseComponent
            image={f_familie_1}
            heading={"Familie Shoot"}
            duration={"1 time"}
            typeOfMeeting="Innledende møte"
            serviceDescP="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
          />
        );
      case "bryllup":
        return (
          <ShowCaseComponent
            image={f_bryllup_1}
            heading={"Bryllup Shoot"}
            duration={"1 time"}
            typeOfMeeting="Innledende møte"
            serviceDescP="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
          />
        );
      case "barn":
        return (
          <ShowCaseComponent
            image={f_barnBeata}
            heading={"Barn Shoot"}
            duration={"1 time"}
            typeOfMeeting="Innledende møte"
            serviceDescP="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
          />
        );
      case "portrett":
        return (
          <ShowCaseComponent
            image={
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            }
            heading={"Portrett"}
            duration={"1 time"}
            typeOfMeeting="Innledende møte"
            serviceDescP="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
          />
        );
      case "par":
        return (
          <ShowCaseComponent
            image={f_couple}
            heading={"Par"}
            duration={"1 time"}
            typeOfMeeting="Innledende møte"
            serviceDescP="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
          />
        );
      case "gravid":
        return (
          <ShowCaseComponent
            image={
              "https://images.unsplash.com/photo-1585010873004-923f9a54e54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
            }
            heading={"Gravid"}
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
      {summary === undefined ? <h1>Våre tjenester</h1> : ""}
      <section>{renderShowCase(summary)}</section>
    </div>
  );
}

export default Screen0;
