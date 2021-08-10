import React from "react";
import "./Footer.css";
import logo_black from "./images/logo_black.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  var { name } = useParams();
  const location = useLocation();
  var exactLocation = location.pathname;

  // replace /galleri/    familie with something when

  var subPath;
  var newPath;

  const handlePath = nameOfUrl => {
    if (
      exactLocation === "/hjem" ||
      exactLocation === "/priser" ||
      exactLocation === "/omoss" ||
      exactLocation === "/kontakt"
    ) {
      subPath = "galleri/";
      if (nameOfUrl === "familie") {
        name = "familie";
        newPath = subPath + name;
        return newPath;
      } else if (nameOfUrl === "portrett") {
        name = "portrett";
        newPath = subPath + name;
        return newPath;
      } else if (nameOfUrl === "barn") {
        name = "barn";
        newPath = subPath + name;
        return newPath;
      } else if (nameOfUrl === "par") {
        name = "par";
        return newPath;
      } else if (nameOfUrl === "gravid") {
        name = "gravid";
        newPath = subPath + name;
        return newPath;
      } else if (nameOfUrl === "priser") {
        name = "priser";
        return name;
      } else if (nameOfUrl === "omoss") {
        name = "omoss";
        return name;
      } else if (nameOfUrl === "kontakt") {
        name = "kontakt";
        return name;
      }
    }
    // når du står på en av gallerien i url  --> man må få tilgang til andre gallerier fra det stedet
  };

  return (
    <footer className="footer">
      <div className="mainContainer">
        <div className="footer__firstPart">
          <div className="footer__firstPart--heading">
            <h2>Ønske liste</h2>
            <div className="heartIcon">
              <FavoriteIcon className="favoriteIcon" />
            </div>
          </div>
          <div className="footer__firstPart--paragraph">
            <p>
              Hvem har ikke lyst å ta familiebilder? <br /> Men altfor ofte
              forblir det bare en tanke og blir lagt i glemmeboka. Vi har en
              løsning for dette: Ønskelista. <br /> Har du veldig lyst på en
              fotografering, men vet ikke når, eller hvilken anledning. Meld deg
              inn i vårt ønskelista, og vi trekker en vinner hver måned som får
              en helt gratis fotografering. Alt du trenger å gjøre er å oppgi
              din mail til oss her: . les villkårene her
            </p>
          </div>
          <div className="footer__firstPart--email">
            <input type="email" />
            <button>Meld meg på</button>
          </div>
          <div className="footer__firstPart--socialMedia">
            <FacebookIcon
              onClick={() => {
                window.open(
                  "https://www.facebook.com/memorylanephotos.official"
                );
              }}
              className="svg_icons"
            />
            <InstagramIcon
              onClick={() => {
                window.open("https://www.instagram.com/memorylane_foto/");
              }}
              className="svg_icons"
            />
            {/* TikTok */}
          </div>
        </div>

        <div className="footer__secondPart">
          <div className="footer__secondPart--heading">
            <h2>Lokal kjent</h2>
          </div>
          <div className="footer__secondPart--paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at
              impedit aspernatur nulla voluptate{" "}
            </p>
          </div>
        </div>

        <div className="footer__thirdPart">
          <div className="footer__thirdPart--heading">
            <h2>Naviger</h2>
          </div>
          <div className="footer__thirdPart--navigationButtons">
            <Link to={handlePath("familie")}>
              <p>Familie</p>
            </Link>
            <Link to={handlePath("portrett")}>
              <p>Portrett</p>
            </Link>
            <Link to={handlePath("barn")}>
              <p>Barn</p>
            </Link>
            <Link to={handlePath("par")}>
              <p>Par</p>
            </Link>
            <Link to={handlePath("gravid")}>
              <p>Gravid</p>
            </Link>
            <Link to={handlePath("priser")}>
              <p>Priser</p>
            </Link>
            <Link to={handlePath("omoss")}>
              <p>Om oss</p>
            </Link>
            <Link to={handlePath("kontakt")}>
              <p>Kontakt oss</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <p>
          Memory Lane Fotografi • Sjøhagen 4, 4023, Stavanger • Tlf: 40071168{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
