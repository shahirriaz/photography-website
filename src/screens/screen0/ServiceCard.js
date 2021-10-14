import React, { useEffect } from "react";
import "./ServiceCard.css";
import {
  generatePath,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router";
import { useStateValue } from "../../StateProvider";

function ServiceCard({ image, heading, hour, desc, handleClick, idForPath }) {
  const [state, dispatch] = useStateValue();
  const history = useHistory();

  //push to next screen code
  const handleClick2 = () => {
    history.push("/bestill/step/1");
    dispatch({
      type: "SEND_SERVICE",
      service: [heading, hour, desc],
    });
  };

  return (
    <div className="serviceCard">
      <div className="serviceCard__img">
        <div onClick={handleClick(idForPath)} class="overlay51"></div>
        <img src={image} alt="" />
      </div>
      <div className="serviceCard__content">
        <h2>{heading}</h2>
        <p className="serviceCard__content--p">{hour}</p>
        <p className="serviceCard__content--p">{desc}</p>
      <div className="serviceCard__btn">
        <button onClick={handleClick2}>La oss møtes</button>
      </div>
      </div>
    </div>
  );
}

export default ServiceCard;
