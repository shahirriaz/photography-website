import React from "react";
import SummaryComponent from "./SummaryComponent";
import { useHistory } from "react-router";

function ReviewBookingMobile({ handleNextScreen }) {
  const history = useHistory();

  const handleBackBtn = () => {
    history.push("/bestill/step/1");
  };
  return (
    <div className="reviewBookingMobile">
      <button onClick={handleBackBtn} className="calendar__backBtn" href="">
        Back
      </button>
      <h1>Se gjennom bestillingen din</h1>
      <SummaryComponent handleNextScreen={handleNextScreen} />
    </div>
  );
}

export default ReviewBookingMobile;
