import React from "react";
import "./Info.css";
import InfoRow from "./InfoRow";
import featured from "./images/gallery/family/familie_13.jpg";

function Info() {
  return (
    <div className="info">
      <InfoRow
        image={featured}
        title="Dagens høydepunkt"
        description="Det var veldig hyggeligt, Ahmed var veldig flink og vi følte oss veldig komfortable - Nikitha"
      />
    </div>
  );
}

export default Info;
