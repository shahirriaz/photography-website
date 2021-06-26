import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          style={{
            width: "300px",
            height: "100px",
            objectFit: "contain",
            border: "1px solid black",
            borderRadius: "2px",
          }}
          src={logo}
          alt=""
        />
      </div>
      <NavLink
        exact
        to="/home"
        style={{ textDecoration: "none" }}
        activeClassName="header__heading--active"
      >
        <div className="header__heading--home  header__heading--mobile">
          <h4>Hjem</h4>
        </div>
      </NavLink>
      <NavLink
        exact
        to="/gallery"
        style={{ textDecoration: "none" }}
        activeClassName="header__heading--active"
      >
        <div className="header__heading--gallery header__heading--mobile ">
          <h4>Galleri</h4>
        </div>
      </NavLink>

      <NavLink
        exact
        to="/prices"
        style={{ textDecoration: "none" }}
        activeClassName="header__heading--active"
      >
        <div
          className="header__heading--prices header__heading--mobile"
          activeClassName="header__heading--active"
        >
          <h4>Priser</h4>
        </div>
      </NavLink>
      <NavLink
        exact
        to="/aboutUs"
        style={{ textDecoration: "none" }}
        activeClassName="header__heading--active"
      >
        <div
          className="header__heading--aboutUs header__heading--mobile"
          activeClassName="header__heading--active"
        >
          <h4>Om oss</h4>
        </div>
      </NavLink>

      <NavLink
        exact
        to="/contact"
        style={{ textDecoration: "none" }}
        activeClassName="header__heading--active"
      >
        <div className="header__heading--contact header__heading--mobile">
          <h4>Kontakt</h4>
        </div>
      </NavLink>
      <div className="header__burgerIcon">
        <MenuIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Header;
