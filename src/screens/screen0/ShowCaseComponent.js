import React, { useEffect } from "react";
import "./ShowCaseComponent.css";
import {
  generatePath,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router";
import { useStateValue } from "../../StateProvider";

function ShowCaseComponent({
  image,
  heading,
  duration,
  typeOfMeeting,
  serviceDescP,
}) {
  const [{ service }, dispatch] = useStateValue();
  const history = useHistory();
  const { step } = useParams();
  const { path } = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick3 = next => () => {
    history.push(
      generatePath(path, {
        step: Math.max(1, Math.min(Number(step) + next, 3)),
      })
    );
    dispatch({
      type: "SEND_SERVICE_FROM_SHOWCASE",
      serviceFromShowCase: [heading, duration, typeOfMeeting],
    });
  };

  return (
    <div className="showCase">
      <header
        className="showCase__banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image})`,
          backgroundPosition: "50% 40%",
          opacity: "0.9",
        }}
      ></header>
      <div className="showCase__content--container">
        <div className="showCase__heading">
          <h1>{heading}</h1>
        </div>
        <div className="showCase__cardContainer">
          <div className="duration">
            <p>{duration}</p>
          </div>
          <div className="showCase__desc">
            <p>{typeOfMeeting}</p>
          </div>
        </div>
        <dib className="showCase__btn">
          <button onClick={handleClick3(1)}>Book Now</button>
        </dib>

        <hr className="showCase__hr" />
        <div className="showCase__serviceDescription">
          <h2>Tjenestebeskrivelse </h2>
          <p className="showCase__serviceDescription--p">{serviceDescP}</p>
          {/* <hr /> */}
          <h2>Kontakt</h2>
          <p className="showCase__serviceDescription--p">
            500 Terry Francois Street, San Francisco, CA, USA
            mobile-menu@test.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShowCaseComponent;
