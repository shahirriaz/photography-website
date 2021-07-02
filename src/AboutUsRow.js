import React, { useEffect } from "react";
import "./AboutUsRow.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUsRow() {
  useEffect(() => {
    AOS.init();
  });
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  return <div></div>;
}

export default AboutUsRow;
