import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Info.css";
import InfoRow from "./InfoRow";
import par from "./images/gallery/anniversary/anniversary_2.jpg";

function Info() {
  // useEffect(() => {
  //   AOS.init();
  // });

  return (
    <div className="info">
      <InfoRow
        // duration="700"
        // animation="fade-up"
        image={par}
        title="Parfotografering"
        description="Det var veldig hyggeligt, Ahmed var veldig flink og vi følte oss veldig komfortable - Nikitha"
      />
    </div>
  );
}

export default Info;
