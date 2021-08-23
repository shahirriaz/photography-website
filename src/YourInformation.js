import React, { useEffect } from "react";
import "./YourInformation.css";
import { useStateValue } from "./StateProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import MainRow from "./MainRow";

function YourInformation() {
  const [{ user }, dispatch] = useStateValue();

  const imaggeArray = [
    "https://images.unsplash.com/photo-1577640256262-8488aa247e17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  ];

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      className="yourInformation"
    >
      <div className="yourInformation__container">
        <div className="yourInformation__left">
          <div className="top">
            <h1>Takk for hendvendelsen</h1>
          </div>
          <h2>Ditt navn: {user.name}</h2>
          <h2>Din email: {user.email}</h2>
          <h2>Ditt nr: {user.phone}</h2>
          <h2>Type fotografering: {user.type}</h2>
          <h2>Alder: {user.age}</h2>
          <h2>Dato: {user.date}</h2>
          <h2>Dato: {user.comment}</h2>
        </div>
        <div className="yourInformation__right">
          <img
            src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default YourInformation;
