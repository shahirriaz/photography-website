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

  const userArray = [
    {
      name: user.name,
      email: user.email,
      phone: user.phone,
      type: user.type,
      age: user.age,
      date: user.date,
    },
  ];

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      className="yourInformation"
    >
      <MainRow
        title="Takk for henvendelsen"
        subTitle="Her er dine opplysninger"
        image="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        descriptionArray={userArray}
        isMarginFirstRow
        isPadding
        isBackgroundWhite
      />
    </div>
  );
}

export default YourInformation;
