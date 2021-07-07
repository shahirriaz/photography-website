import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import { useTransition, animated } from "react-spring";

function Header({ isAnimated, isAbsoluteFixed, isSticky }) {
  const [show, handleShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div
      className={`header ${show && isAnimated ? "header__white" : null} ${
        isAbsoluteFixed && "header__absoluteFixed"
      } ${isSticky && "header__sticky"} `}
    >
      <div className="header__buttons">
        <div className="header__logo">
          <NavLink to="/home">
            <img
              style={{
                width: "300px",
                height: "60px",
                objectFit: "contain",
                // border: "1px solid black",
                borderRadius: "2px",
              }}
              src={logo}
              alt=""
            />
          </NavLink>
        </div>
        <NavLink
          exact
          to="/home"
          style={{ textDecoration: "none" }}
          activeClassName="header__heading--active"
        >
          <div className="header__heading--home  header__heading--mobile">
            <h4
              className={`header__title ${
                show && isAnimated ? "header__titleBlack" : null
              } `}
            >
              Hjem
            </h4>
          </div>
        </NavLink>
        <NavLink
          exact
          to="/gallery"
          style={{ textDecoration: "none" }}
          activeClassName="header__heading--active"
        >
          <div className="header__heading--gallery header__heading--mobile ">
            <h4 className={`header__title ${show && "header__titleBlack"} `}>
              Galleri
            </h4>
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
            <h4 className={`header__title ${show && "header__titleBlack"} `}>
              Priser
            </h4>
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
            <h4 className={`header__title ${show && "header__titleBlack"} `}>
              Om oss
            </h4>
          </div>
        </NavLink>

        <NavLink
          exact
          to="/contact"
          style={{ textDecoration: "none" }}
          activeClassName="header__heading--active"
        >
          <div className="header__heading--contact header__heading--mobile">
            <h4 className={`header__title ${show && "header__titleBlack"} `}>
              Kontakt
            </h4>
          </div>
        </NavLink>
        <div className="header__burgerIcon">
          <MenuIcon fontSize="large" onClick={() => setShowMenu(!showMenu)} />

          {/* MOBILE MENU */}
          {maskTransitions(
            (styles, item) =>
              item && (
                <animated.div
                  style={styles}
                  className="half-black"
                  onClick={() => setShowMenu(!showMenu)}
                ></animated.div>
              )
          )}

          {menuTransitions(
            (styles, item) =>
              item && (
                <animated.div style={styles} className="header__mobileMenu">
                  <div className="header__mobileMenuContents">
                    <NavLink
                      exact
                      to="/home"
                      onClick={() => setShowMenu(!showMenu)}
                      style={{ textDecoration: "none" }}
                      activeClassName="header__heading--active"
                    >
                      <h4 className="header__titleBlack">Hjem</h4>
                    </NavLink>
                    <NavLink
                      exact
                      to="/gallery"
                      onClick={() => setShowMenu(!showMenu)}
                      style={{ textDecoration: "none" }}
                      activeClassName="header__heading--active"
                    >
                      <h4 className="header__titleBlack">Galleri</h4>
                    </NavLink>
                    <NavLink
                      exact
                      to="/prices"
                      onClick={() => setShowMenu(!showMenu)}
                      style={{ textDecoration: "none" }}
                      activeClassName="header__heading--active"
                    >
                      <h4 className="header__titleBlack">Priser</h4>
                    </NavLink>
                    <NavLink
                      exact
                      to="/aboutUs"
                      onClick={() => setShowMenu(!showMenu)}
                      style={{ textDecoration: "none" }}
                      activeClassName="header__heading--active"
                    >
                      <h4 className="header__titleBlack">Om oss</h4>
                    </NavLink>
                    <NavLink
                      exact
                      to="/contact"
                      onClick={() => setShowMenu(!showMenu)}
                      style={{ textDecoration: "none" }}
                      activeClassName="header__heading--active"
                    >
                      <h4 className="header__titleBlack">Kontakt</h4>
                    </NavLink>
                  </div>
                </animated.div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
