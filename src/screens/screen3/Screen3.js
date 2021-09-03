import React, { useEffect } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { useStateValue } from "../../StateProvider";
import db from "./../../firebase";

function Screen3() {
  const [{ date, timePicked, service, inputUser }, dispatch] = useStateValue();

  //when this last component mounts... everything  must be pushes to db or whatever
  useEffect(() => {
    if (date !== undefined || null) {
      if (date && timePicked && service && inputUser) {
        db.collection("bookingDate")
          .doc(format(date, "dd MMM yyyy").toString())
          .set({
            date: date,
          });
      } else {
        console.log("error");
      }
    }
  }, [date]);

  return (
    <div className="screen3">
      <div className="first--horizontal--row">
        <div className="screen3__heading">
          <h1>Digg! Da er du bestilt</h1>
        </div>
        <div className="screen3__desc">
          <p>En bekreftelses epost er på vei til deg</p>
        </div>
      </div>
      <div className="second--horizontal--row">
        <div className="dateColumn">
          <h2>{format(date, "dd", { locale: enGB })}</h2>
          <h3>{format(date, "MMM", { locale: enGB })}</h3>
          <p>
            {format(date, "EEEE")} {timePicked}
          </p>
        </div>
        <div className="confirmationColumn">
          <h2 style={{ marginBottom: "4px" }}>
            {service ? service[0] : "Ingen tjeneste valgt"}
          </h2>
          <p style={{ marginBottom: "8px" }}>
            {service ? service[1] : "Ingen tidsmengde valgt"} |{" "}
            {service ? service[2] : "Ingen type møte valgt"}
          </p>
          <p>Olaveien 23 Pluto 6700</p>
        </div>
      </div>
    </div>
  );
}

export default Screen3;
