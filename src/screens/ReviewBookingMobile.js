import React from "react";
import SummaryComponent from "./SummaryComponent";
import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";


function ReviewBookingMobile({ handleNextScreen }) {

  const history = useHistory();

  const [{width}, dispatch] = useStateValue();
  console.log(width)
  const handleBackBtn = () => {
    history.push("/bestill/step/1");
  };
  return (
    <div className="reviewBookingMobile">
      <button onClick={handleBackBtn} className="calendar__backBtn">
        Tilbake
      </button>
      <h1>Se gjennom bestillingen din</h1>
      <SummaryComponent  handleNextScreen={handleNextScreen} />
    </div>
  );
}

export default ReviewBookingMobile;
