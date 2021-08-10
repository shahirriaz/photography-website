import React from "react";
import Card from "./Card";
import "./KundeOmtale.css";
import par_15 from "./images/gallery/couple/par_15.jpg";
import par_9 from "./images/gallery/couple/par_9.jpg";
import par_7 from "./images/gallery/couple/par_7.jpg";
import par_11 from "./images/gallery/couple/par_11.jpg";

function KundeOmtale() {
  return (
    <div className="kundeomtale">
      <Card
        name={"Anette og Typen"}
        image={par_15}
        review={
          "Det var velidg hygeligt å bli fotografert av ML foto. Vi følte oss ganske fornøyde med resultatet"
        }
      />
      <Card
        name={"Fatima og Mannen"}
        image={par_9}
        review={
          "Ml foto var veldig profesjonelle og vi følte oss veldig komfortable gjennom fotograferings prosessen. 10/10! "
        }
      />
      {/* <Card
        name={"Nikitha"}
        image={par_7}
        review={
          "Proin condimentum, nunc at pharetra posuere, odio enim rhoncus ex, sed sodales nisi felis non risus. "
        }
      />
      <Card
        name={"Beate og mannen"}
        image={par_11}
        review={
          "Proin condimentum, nunc at pharetra posuere, odio enim rhoncus ex, sed sodales nisi felis non risus."
        }
      /> */}
    </div>
  );
}

export default KundeOmtale;
