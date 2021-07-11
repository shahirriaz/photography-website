import React from "react";
import "./Info.css";
import InfoRow from "./InfoRow";
import par from "./images/gallery/anniversary/anniversary_2.jpg";

function Info() {
  return (
    <div className="info">
      <InfoRow
        image={par}
        title="Parfotografering"
        description="Det var veldig hyggeligt, Ahmed var veldig flink og vi følte oss veldig komfortable - Nikitha"
      />
    </div>
  );
}

export default Info;
