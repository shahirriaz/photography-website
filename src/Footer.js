import React from "react";
import "./Footer.css";
import logo from "./images/logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <footer className="footer">
      <img
        style={{
          width: "300px",
          height: "300px",
          objectFit: "contain",
        }}
        src={logo}
        alt=""
      />
      <div className="footer__icons">
        <FacebookIcon className="svg_icons" />
        <div className="footer__spaceBox"></div>
        <InstagramIcon className="svg_icons" />
      </div>
      <h2>©Copyright 2021</h2>
    </footer>
  );
}

export default Footer;
