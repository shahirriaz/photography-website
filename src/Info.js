import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Info.css";
import InfoRow from "./InfoRow";
import par from "./images/par.jpg";
import artist from "./images/artist.jpg";
import natur from "./images/natur.jpg";

function Info() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="info">
      <InfoRow
        duration="700"
        animation="fade-up"
        image={par}
        title="Parfotografering"
        description="Det var veldig hyggeligt, Ahmed var veldig flink og vi følte oss veldig komfortable - Fatima"
      />
      <InfoRow
        duration="700"
        animation="fade-up"
        image={artist}
        title="Artistfotografering"
        description="Hu Aman var veldig tålmodige med oss, overalt en fin opplevelse - Noen ånnaser"
      />
      <InfoRow
        duration="700"
        animation="fade-up"
        image={natur}
        title="Fotografering i naturen"
        description="Hu lille på 2 år synes det var kjempe kjekt å bli fotografert av Memorylane"
      />
    </div>
  );
}

export default Info;
