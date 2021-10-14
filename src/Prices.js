import React, { useState } from "react";
import "./Prices.css";
import MainRow from "./MainRow";
import { useEffect } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import pricesBanner from "./images/pricesBanner.jpg";
import priceBanner from "./images/priceBanner.jpg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import star from "./images/star.png";
import blue from "./images/blue.png";
import darkblue from "./images/darkblue.png";
import red from "./images/red.png";
import gold1 from "./images/gold1.png";
import gold2 from "./images/gold2.png";
import gold3 from "./images/gold3.jpg";

function Prices() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMore, setShowMore] = useState(true);

  const [btnText, setBtnText] = useState("Vis resten");
  const [btnText2, setBtnText2] = useState("Vis resten");
  const [btnText3, setBtnText3] = useState("Vis resten");

  const [extendCard1, setExtendCard1] = useState(false);
  const [extendCard2, setExtendCard2] = useState(false);
  const [extendCard3, setExtendCard3] = useState(false);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    //for specific card nr 3
    const [card1, card2, card3, card4] =
      document.getElementsByClassName("containerr");
    card3.classList.add("extend");
  }, []);

  useEffect(() => {
    const upDateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", upDateWindowDimensions);
    return () => {
      window.removeEventListener("resize", upDateWindowDimensions);
    };
  }, [width]);

  const handleShowMore = (e) => {
    let clickedBtn = e.target.id;

    setShowMore(false);

    const [card1, card2, card3, card4] =
      document.getElementsByClassName("containerr");

    switch (clickedBtn) {
      case "0":
        setExtendCard1(!extendCard1);
        !extendCard1
          ? card1.classList.add("extend")
          : card1.classList.remove("extend");
        if (card1.classList.contains("extend")) {
          setBtnText("Skjul resten");
        } else setBtnText("Vis resten");

        break;
      case "1":
        setExtendCard2(!extendCard2);
        !extendCard2
          ? card2.classList.add("extend")
          : card2.classList.remove("extend");
        if (card2.classList.contains("extend")) {
          setBtnText2("Skjul resten");
        } else setBtnText2("Vis resten");
        break;
      case "3":
        setExtendCard3(!extendCard3);
        !extendCard3
          ? card4.classList.add("extend")
          : card4.classList.remove("extend");
        if (card4.classList.contains("extend")) {
          setBtnText3("Skjul resten");
        } else setBtnText3("Vis resten");
        break;

      default:
        break;
    }
  };

  const fotografPakker = [
    {
      imageQuantity: "5",
      price: "2000",
      hexColors: blue,
      includes_1: "1 time",
      includes_2: "5 stk digitale bilder",
      includes_3: "Ferdig redigert",
      includes_4: "Høy oppløselig",
      includes_5: "Bilder blir sendt på email",
    },
    {
      imageQuantity: "10",
      price: "3500",
      hexColors: red,
      includes_1: "1 time",
      includes_2: "10 stk digitale bilder",
      includes_3: "Ferdig redigert",
      includes_4: "Høy oppløselig",
      includes_5: "Bilder blir sendt på email",
    },
    {
      imageQuantity: "15",
      price: "4800",
      hexColors: priceBanner,
      includes_1: "1 time",
      includes_2: "15 stk digitale bilder",
      includes_3: "Ferdig redigert",
      includes_4: "Høy oppløselig",
      includes_5: "Bilder blir sendt på email",
      includes_6: "Digital bildegalleri (Les mer)",
    },
    {
      imageQuantity: "20",
      price: "5600",
      hexColors: darkblue,
      includes_1: "1 time",
      includes_2: "20 stk digitale bilder",
      includes_3: "Ferdig redigert",
      includes_4: "Høy oppløselig",
      includes_5: "Bilder blir sendt på email",
      includes_6: "Digital bildegalleri (Les mer)",
    },
  ];

  const bryllupObject = [
    {
      typeOfPackage: "Halvdagsfotografering",
      imageQuantity: "250",
      price: "12999",
      hexColors: gold2,
      includes_1: "Samtaletime i forkant av dagen",
      includes_2: "Forberedelse, hovedbildene, vielse og mottakelse",
      includes_3: "Inntil fem timer fotografering",
      includes_4: "250 redigerte digitale bilder",
      includes_5: "Digital bildegalleri på nett",
    },
    {
      typeOfPackage: "Heldagsfotografering",
      imageQuantity: "400",
      price: "14999",
      hexColors: gold3,
      includes_1: "Samtaletime i forkant av dagen",
      includes_2: "Heldagsfotografering, inntil 10 timer",
      includes_3: "400 redigerte digitale bilder",
      includes_4: "Digital bildegalleri på nett",
    },
    {
      typeOfPackage: "Dagen før og heldagsfotografering",
      imageQuantity: "500",
      price: "16999",
      hexColors: gold1,
      includes_1: "Samtaletime i forkant av dagen",
      includes_2: "Fotografering mingling dagen før bryllupet, inntil to timer",
      includes_3: "Heldagsfotografering, inntil 10 timer",
      includes_4: "500 redigerte digitale bilder",
    },
  ];

  return (
    <div className="prices">
      <Banner
        img={pricesBanner}
        positionX="40%"
        positionY="50%"
        title="Vår"
        subTitle="Priser"
        isBtn
        prices
      />
      <MainRow
        title="Pakker"
        isFontColorWhite
        isPadding
        subTitle="Pakker nedenfor gjelder for par, familie, barn, gravid. ettårsdag, portrett og bedrift. Inkluderer forberedelser og planlegging før fotograferingen.  "
      />
      <div className="prices__mainContainer">
        {fotografPakker.map((fotografObj, index) => (
          <div class="wrapper">
            <div
              style={{
                transform: `scale(${
                  index === 2 && width > 1440 ? "1.07" : "1"
                })`,
                boxShadow: `${
                  index === 2 && width > 500
                    ? "-10px 0 8px -8px rgba(0,0,0,0.5), 10px 0 8px -8px rgba(0,0,0,0.5)"
                    : ""
                }`,
                postion: `${index === 2 ? "relative" : "relative"}`,
                zIndex: `${index === 2 ? "2" : ""}`,
                paddingBottom: `${
                  index === 2 || index === 3 ? "80px" : "80px"
                }`,
              }}
              id={index}
              class={`containerr showLess`}
            >
              <div className="prices__content">
                <div
                  style={{
                    background: `url(${fotografObj.hexColors})`,
                    backgroundPosition: "50% 50%",
                    position: "relative",
                  }}
                  className="txtContainer"
                >
                  {index === 2 ? (
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "30px",
                      }}
                      className="bestChoice"
                    >
                      <img width="40px" src={star} alt="best choice" />
                    </div>
                  ) : (
                    ""
                  )}

                  <h1 className="imageQuantity__title">
                    {fotografObj.imageQuantity} bilder
                  </h1>
                  {/* <p>{fotografObj.imageQuantity} bilder</p> */}
                  <h2>kr {fotografObj.price},-</h2>

                  <Link to="/kontakt">
                    <button className="prices__btn">Kontakt</button>
                  </Link>
                </div>
                <div className="price__include">
                  <h2 style={{ textAlign: "center", marginTop: "12px" }}>
                    Pris inkluderer:
                  </h2>
                  <div className="list--mainContainer">
                    <div
                      style={{
                        height: `${
                          index === 2 || index === 3 ? "245px" : "205px"
                        }`,
                      }}
                      className="price__checkIcon"
                    >
                      <CheckBoxIcon />
                      <CheckBoxIcon />
                      <CheckBoxIcon />
                      <CheckBoxIcon />
                      {index === 0 || index === 1 ? <CheckBoxIcon /> : ""}
                      {index === 2 || index === 3 ? <CheckBoxIcon /> : ""}
                      {index === 2 || index === 3 ? <CheckBoxIcon /> : ""}
                    </div>
                    <div className="listContainer">
                      <ul className="prices__unorderedList">
                        <li>{fotografObj.includes_1}</li>
                        <li>{fotografObj.includes_2}</li>
                        <li>{fotografObj.includes_3}</li>
                        <li>{fotografObj.includes_4}</li>
                        <li>{fotografObj.includes_5}</li>
                        <li>{fotografObj.includes_6}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id={index}
                className={`${
                  index === 0 || index === 1 || index === 3 ? "fade" : ""
                } `}
              ></div>
            </div>
            {index === 0 || index === 1 || index === 3 ? (
              <button id={index} onClick={(e) => handleShowMore(e)} class="btn">
                {index === 0 && btnText}
                {index === 1 && btnText2}
                {index === 3 && btnText3}
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      {/* <MainRow
        title="Bryllup"
        isFontColorWhite
        isPadding
        subTitle="Pakke pris for bryllup"
      /> */}
      {/* <div className="prices__mainContainer">
        {bryllupObject.map((bryllupObject, index) => {
          return (
            <div
              style={{
                paddingBottom: width <= 500 ? "120px" : "80px",
              }}
              id="prices__bryllupContainer"
              className="prices__content"
            >
              <div
                // style={{ backgroundColor: `#${bryllupObject.hexColors}` }}
                style={{
                  background: `url(${bryllupObject.hexColors}) no-repeat`,
                  backgroundPosition: "50% 50%",
                  // backgroundSize: "cover",
                }}
                className="txtContainer"
              >
                <h1 style={{ color: "#E8E8E8" }}>
                  {bryllupObject.typeOfPackage}
                </h1>
                <p style={{ color: "#fff", fontSize: "23px" }}>
                  {bryllupObject.imageQuantity} bilder
                </p>
                <h2 id="bryllupPrice" style={{ color: "#fff" }}>
                  kr {bryllupObject.price},-
                </h2>
                <Link to="/kontakt">
                  <button id="bryllypsBtn" className="prices__btn">
                    Kontakt
                  </button>
                </Link>
              </div>
              <div className="price__include">
                <h2 style={{ textAlign: "center", marginTop: "20px" }}>
                  Pris inkluderer:
                </h2>
                <div className="list--mainContainer">
                  <div
                    style={{
                      height: `${
                        index === 1 || index === 2 ? "168px" : "205px"
                      }`,
                    }}
                    className="price__checkIcon"
                  >
                    <CheckBoxIcon />
                    <CheckBoxIcon />
                    <CheckBoxIcon />
                    <CheckBoxIcon />
                    {index === 0 ? <CheckBoxIcon /> : ""}
                  </div>
                  <div className="listContainer">
                    <ul className="prices__unorderedList">
                      <li id="bryllypList">{bryllupObject.includes_2}</li>
                      <li id="bryllypList">{bryllupObject.includes_1}</li>
                      <li id="bryllypList">{bryllupObject.includes_3}</li>
                      <li id="bryllypList">{bryllupObject.includes_4}</li>
                      <li id="bryllypList">{bryllupObject.includes_5}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
  
      </div> */}
      <MainRow
        title="Andre anledninger"
        isFontColorWhite
        isPadding
        subTitle="Vi tar også bilder av andre anlednigner, slik som bursdag, dåp, konfirmasjon, bridal og baby shower. Vi skreddersyr pakkepriser etter ditt behov. Vi vil gjerne høre fra deg om du ønsker fotografering for din anledning eller har noen spørsmål. Ta kontakt via vårt kontaktskjema eller via mail. "
      />
      {/* <QuestionBanner />
      <Footer /> */}
    </div>
  );
}

export default Prices;

//TODO: We need a component that only renders a row, that row can take image, title, subtitle, etc.

//  <div
//    style={{
//      transform: `scale(${index === 2 && width > 1400 ? "1.07" : "1"})`,
//      boxShadow: `${
//        index === 2 && width > 500
//          ? "-10px 0 8px -8px rgba(0,0,0,0.5), 10px 0 8px -8px rgba(0,0,0,0.5)"
//          : ""
//      }`,
//      postion: `${index === 2 ? "relative" : "relative"}`,
//      zIndex: `${index === 2 ? "2" : ""}`,
//      paddingBottom: `${index === 2 || index === 3 ? "120px" : "80px"}`,
//    }}
//    className="prices__content showMore"
//  >
//    <div
//      style={{
//        background: `url(${fotografObj.hexColors})`,
//        backgroundPosition: "50% 50%",
//        position: "relative",
//      }}
//      className="txtContainer"
//    >
//      {index === 2 ? (
//        <div
//          style={{ position: "absolute", top: "10px", right: "30px" }}
//          className="bestChoice"
//        >
//          <img width="40px" src={star} alt="best choice" />
//        </div>
//      ) : (
//        ""
//      )}

//      <h1>{fotografObj.imageQuantity} bilder</h1>
//      {/* <p>{fotografObj.imageQuantity} bilder</p> */}
//      <h2>kr {fotografObj.price},-</h2>

//      <Link to="/kontakt">
//        <button className="prices__btn">Kontakt</button>
//      </Link>
//    </div>
//    <div className="price__include">
//      <h2 style={{ textAlign: "center", marginTop: "12px" }}>
//        Pris inkluderer:
//      </h2>
//      <div className="list--mainContainer">
//        <div
//          style={{
//            height: `${index === 2 || index === 3 ? "245px" : "205px"}`,
//          }}
//          className="price__checkIcon"
//        >
//          <CheckBoxIcon />
//          <CheckBoxIcon />
//          <CheckBoxIcon />
//          <CheckBoxIcon />
//          {index === 0 || index === 1 ? <CheckBoxIcon /> : ""}
//          {index === 2 || index === 3 ? <CheckBoxIcon /> : ""}
//          {index === 2 || index === 3 ? <CheckBoxIcon /> : ""}
//        </div>
//        <div className="listContainer">
//          <ul className="prices__unorderedList">
//            <li>{fotografObj.includes_1}</li>
//            <li>{fotografObj.includes_2}</li>
//            <li>{fotografObj.includes_3}</li>
//            <li>{fotografObj.includes_4}</li>
//            <li>{fotografObj.includes_5}</li>
//            <li>{fotografObj.includes_6}</li>
//          </ul>
//        </div>
//      </div>
//    </div>
//    <button className="showMoreBtn">Show more</button>

//    <div className="fade"></div>
//  </div>;
