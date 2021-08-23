import React, { useState } from "react";
import "./Prices.css";
import MainRow from "./MainRow";
import { useEffect } from "react";
import familieBilde from "./images/gallery/beata/5.jpg";
import Footer from "./Footer";
import Banner from "./Banner";
import QuestionBanner from "./QuestionBanner";
import anette from "./images/gallery/couple/par_13.jpg";
import { Link } from "react-router-dom";

function Prices() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const fotografPakker = [
    {
      imageQuantity: "5",
      price: "2000",
      hexColors: "9C89B8",
      includes_1: "1 time",
      includes_2: "5 stk digitale bilder",
      includes_3: "Ferdig redigert",
      includes_4: "Høy oppløselig",
    },
    {
      imageQuantity: "10",
      price: "3500",
      hexColors: "F0A6CA",
      includes_1: "1 time",
      includes_2: "10 stk digitale bilder",
      includes_3: "Ferdig redigert",
      includes_4: "Høy oppløselig",
    },
    {
      imageQuantity: "15",
      price: "4800",
      hexColors: "EFC3E6",
      includes_1: "1 time",
      includes_2: "15 stk digitale bilder",
      includes_3: "Ferdig redigert",
      includes_4: "Høy oppløselig",
      includes_5: "Digital bildegalleri på nett",
    },
    {
      imageQuantity: "20",
      price: "5600",
      hexColors: "F0E6EF",
      includes_1: "1 time",
      includes_2: "20 stk digitale bilder",
      includes_3: "Ferdig redigert",
      includes_4: "Høy oppløselig",
      includes_5: "Digital bildegalleri på nett",
    },
  ];

  const bryllupObject = [
    {
      typeOfPackage: "Halvdagsfotografering",
      imageQuantity: "250",
      price: "4999",
      hexColors: "5762D5",
      includes_1: "Samtaletime i forkant av dagen",
      includes_2:
        "Forberedelse, hovedbildene, vielse og mottakelse, inntil fem timer fotografering",
      includes_3: "250 redigerte digitale bilder",
      includes_4: "Digital bildegalleri på nett",
    },
    {
      typeOfPackage: "Heldagsfotografering",
      imageQuantity: "400",
      price: "6999",
      hexColors: "6E7DAB",
      includes_1: "Samtaletime i forkant av dagen",
      includes_2: "Heldagsfotografering, inntil 10 timer",
      includes_3: "400 redigerte digitale bilder",
      includes_4: "Digital bildegalleri på nett",
    },
    {
      typeOfPackage: "Dagen før og heldagsfotografering",
      imageQuantity: "500",
      price: "7999",
      hexColors: "C191A1",
      includes_1: "Samtaletime i forkant av dagen",
      includes_2: "Fotografering mingling dagen før bryllupet, inntil to timer",
      includes_3: "Heldagsfotografering, inntil 10 timer",
      includes_4: "500 redigerte digitale bilder",
    },
  ];

  return (
    <div className="prices">
      <Banner
        img={anette}
        // title="Bryllup || Par || Familie"
        subTitle="Priser"
        // isBtnPrice
      />
      <MainRow
        title="Fotgraferings pakker"
        isFontColorWhite
        isPadding
        subTitle="Pakker nedenfor gjelder for par, familie, barn, gravid. ettårsdag, portrett og bedrift. Inkluderer forberedelser og planlegging før fotograferingen  "
      />
      <prices className="prices__mainContainer">
        {fotografPakker.map((fotografObj, index) => (
          <div className="prices__content">
            <div
              style={{ backgroundColor: `#${fotografObj.hexColors}` }}
              className="txtContainer"
            >
              <h1>Bildepakke {index + 1}</h1>
              <p>{fotografObj.imageQuantity} bilder</p>
              <h2>kr {fotografObj.price},-</h2>

              <Link to="/kontakt">
                <button className="prices__btn">Bestill</button>
              </Link>
            </div>
            <div className="price__include">
              <h2 style={{ textAlign: "center", marginTop: "12px" }}>
                Pris inkluderer:
              </h2>
              <ul className="prices__unorderedList">
                <li>{fotografObj.includes_1}</li>
                <li>{fotografObj.includes_2}</li>
                <li>{fotografObj.includes_3}</li>
                <li>{fotografObj.includes_4}</li>
                <li>{fotografObj.includes_5}</li>
              </ul>
            </div>
          </div>
        ))}
      </prices>
      <MainRow
        title="Bryllup"
        isFontColorWhite
        isPadding
        subTitle="Pakke pris for bryllup"
      />
      <prices className="prices__mainContainer">
        {bryllupObject.map(bryllupObject => (
          <div
            id="prices__bryllupContainer"
            className="prices__content"
            style={{ paddingBottom: "80px" }}
          >
            <div
              style={{ backgroundColor: `#${bryllupObject.hexColors}` }}
              className="txtContainer"
            >
              <h1>{bryllupObject.typeOfPackage}</h1>
              <p>{bryllupObject.imageQuantity} bilder</p>
              <h2>kr {bryllupObject.price},-</h2>
              <Link to="/kontakt">
                <button className="prices__btn">Bestill</button>
              </Link>
            </div>
            <div className="price__include">
              <h2 style={{ textAlign: "center", marginTop: "20px" }}>
                Pris inkluderer:
              </h2>
              <ul className="prices__unorderedList">
                <li id="bryllypList">{bryllupObject.includes_1}</li>
                <li id="bryllypList">{bryllupObject.includes_2}</li>
                <li id="bryllypList">{bryllupObject.includes_3}</li>
                <li id="bryllypList">{bryllupObject.includes_4}</li>
              </ul>
            </div>
          </div>
        ))}
      </prices>
      <MainRow
        title="Andre anledninger"
        isFontColorWhite
        isPadding
        subTitle="Vi tar også bilder av andre anlednigner, slik som bursdag, dåp, konfirmasjon, bridal og baby shower. Vi skreddersyr pakkepriser etter ditt behov. Vi vil gjerne høre fra deg om du ønsker fotografering for din anledning eller har noen spørsmål. Ta kontakt via vårt kontaktskjema eller via mail. "
      />
      <QuestionBanner />
      <Footer />
    </div>
  );
}

export default Prices;

//TODO: We need a component that only renders a row, that row can take image, title, subtitle, etc.
