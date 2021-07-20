import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import { useTransition, animated } from "react-spring";
import Dropdown from "./Dropdown";

function Header({ isAnimated, isAbsoluteFixed, isSticky }) {
  const [show, handleShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    setToggleDropdown(prevState => !prevState);
  };

  const closeToggle = () => {
    setToggleDropdown(false);
  };

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
                width: "50px",
                // height: "30px",
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
            <h4 className="header__title">
              {isAnimated ? (
                <span
                  className={`header__titleWhite ${
                    show && "header__titleBlack"
                  }`}
                >
                  Hjem
                </span>
              ) : (
                <span className="header__titleBlack">Hjem</span>
              )}
            </h4>
          </div>
        </NavLink>

        <div
          onClick={handleToggle}
          className="header__heading--gallery header__heading--mobile dropdown "
        >
          <h4 className="header__title">
            {isAnimated ? (
              <span
                className={`header__titleWhite ${show && "header__titleBlack"}`}
              >
                Galleri
              </span>
            ) : (
              <span className="header__titleBlack">Galleri</span>
            )}
          </h4>
          {toggleDropdown && <Dropdown closeToggle={closeToggle} />}
        </div>

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
            <h4 className="header__title">
              {isAnimated ? (
                <span
                  className={`header__titleWhite ${
                    show && "header__titleBlack"
                  }`}
                >
                  Priser
                </span>
              ) : (
                <span className="header__titleBlack">Priser</span>
              )}
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
            <h4 className="header__title">
              {isAnimated ? (
                <span
                  className={`header__titleWhite ${
                    show && "header__titleBlack"
                  }`}
                >
                  Om oss
                </span>
              ) : (
                <span className="header__titleBlack">Om oss</span>
              )}
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
            <h4 className="header__title">
              {isAnimated ? (
                <span
                  className={`header__titleWhite ${
                    show && "header__titleBlack"
                  }`}
                >
                  Kontakt oss
                </span>
              ) : (
                <span className="header__titleBlack">Kontakt oss</span>
              )}
            </h4>
          </div>
        </NavLink>
        <div
          className={`header__burgerIcon
          ${isSticky ? "header__burgerIconBlack" : "header__burgerIconWhite"}
          ${show && "header__burgerIconBlack"}`}
        >
          <MenuIcon fontSize="medium" onClick={() => setShowMenu(!showMenu)} />

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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      // backgroundColor: "#232323",
                    }}
                  >
                    <NavLink to="/home">
                      <img
                        style={{
                          width: "70px",
                          objectFit: "contain",
                          marginTop: "12px",
                          marginBottom: "12px",
                          backgroundColor: "white",
                          borderRadius: "3px",
                          padding: "10px",
                        }}
                        src={logo}
                        alt="memorylane fotografi"
                      />
                    </NavLink>
                  </div>
                  <div className="header__mobileMenuContents">
                    <div className="header__mobileMenuContentsContainer">
                      <NavLink
                        exact
                        to="/home"
                        onClick={() => setShowMenu(!showMenu)}
                        style={{ textDecoration: "none" }}
                        activeClassName="header__heading--active2"
                      >
                        <h4
                          style={{ fontSize: "22px" }}
                          className="header__titleBlack"
                        >
                          Hjem
                        </h4>
                      </NavLink>
                      <div className="gallery__menu">
                        <h4
                          style={{ fontSize: "22px" }}
                          className="header__titleBlack"
                        >
                          Galleri
                        </h4>
                        <div className="gallery__subMenu header__titleBlack">
                          <NavLink
                            exact
                            to="/gallery/par"
                            onClick={() => setShowMenu(!showMenu)}
                            style={{ textDecoration: "none" }}
                            // activeClassName="header__heading--active2"
                          >
                            <h5
                              style={{
                                paddingLeft: "12px",
                                fontSize: "18px",
                                paddingBottom: "3px",
                              }}
                              className="header__titleBlack"
                            >
                              Par
                            </h5>
                          </NavLink>
                          <NavLink
                            exact
                            to="/gallery/familie"
                            onClick={() => setShowMenu(!showMenu)}
                            style={{ textDecoration: "none" }}
                            // activeClassName="header__heading--active2"
                          >
                            <h5
                              style={{
                                paddingLeft: "12px",
                                fontSize: "18px",
                                paddingBottom: "3px",
                              }}
                              className="header__titleBlack"
                            >
                              Familie
                            </h5>
                          </NavLink>
                          <NavLink
                            exact
                            to="/gallery/barn"
                            onClick={() => setShowMenu(!showMenu)}
                            style={{ textDecoration: "none" }}
                            // activeClassName="header__heading--active2"
                          >
                            <h5
                              style={{
                                paddingLeft: "12px",
                                fontSize: "18px",
                                paddingBottom: "3px",
                              }}
                              className="header__titleBlack"
                            >
                              Barn
                            </h5>
                          </NavLink>
                          <NavLink
                            exact
                            to="/gallery/gravid"
                            onClick={() => setShowMenu(!showMenu)}
                            style={{ textDecoration: "none" }}
                            // activeClassName="header__heading--active2"
                          >
                            <h5
                              style={{
                                paddingLeft: "12px",
                                fontSize: "18px",
                                paddingBottom: "3px",
                              }}
                              className="header__titleBlack"
                            >
                              Gravid
                            </h5>
                          </NavLink>
                        </div>
                      </div>

                      <NavLink
                        exact
                        to="/prices"
                        onClick={() => setShowMenu(!showMenu)}
                        style={{ textDecoration: "none" }}
                        activeClassName="header__heading--active2"
                      >
                        <h4
                          style={{ fontSize: "22px" }}
                          className="header__titleBlack"
                        >
                          Priser
                        </h4>
                      </NavLink>
                      <NavLink
                        exact
                        to="/aboutUs"
                        onClick={() => setShowMenu(!showMenu)}
                        style={{ textDecoration: "none" }}
                        activeClassName="header__heading--active2"
                      >
                        <h4
                          style={{ fontSize: "22px" }}
                          className="header__titleBlack"
                        >
                          Om oss
                        </h4>
                      </NavLink>
                      <NavLink
                        exact
                        to="/contact"
                        onClick={() => setShowMenu(!showMenu)}
                        style={{ textDecoration: "none" }}
                        activeClassName="header__heading--active2"
                      >
                        <h4
                          style={{ fontSize: "22px" }}
                          className="header__titleBlack"
                        >
                          Kontakt
                        </h4>
                      </NavLink>
                    </div>
                  </div>
                  <div className="header__mobileMenuContact">
                    <div className="header__mobileMenuContactContainer">
                      <address>
                        <p>
                          <strong>Memorylane</strong>
                        </p>
                        <p>Sjøhagen 4, Stavanger 4066</p>
                        <p>
                          <a href="tel: 40071168 ">tlf: 40071168 </a>
                          &nbsp;&nbsp;
                          <a href="mailto:mlfoto@hotmail.no">
                            mlfoto@hotmail.no
                          </a>
                        </p>
                        <p> Mandag-fredag 10-16</p>
                        <p> Lørdag-Søndag 09-16</p>
                      </address>
                    </div>
                  </div>
                  "
                </animated.div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
