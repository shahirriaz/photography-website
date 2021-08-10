import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo_white from "./images/logo_white.png";
import logo_black from "./images/logo_black.png";
import MenuIcon from "@material-ui/icons/Menu";
import { useTransition, animated } from "react-spring";
import Dropdown from "./Dropdown";
import "./Dropdown.css";
import Expand from "react-expand-animated";

function Header({ isAnimated, isAbsoluteFixed, isSticky }) {
  const [show, handleShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleGallery, setToggleGallery] = useState(false);

  const menuArray = ["barn", "familie", "par", "portrett"];

  const handleGalleryToggle = e => {
    e.preventDefault();
    setToggleGallery(prevState => !prevState);
  };

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
            {isAnimated ? (
              <img
                className="header__mobileLogo"
                style={{
                  objectFit: "contain",
                  marginBottom: "2px",
                }}
                src={show ? logo_black : logo_white}
                alt=""
              />
            ) : (
              <img
                className="header__mobileLogo"
                style={{
                  // height: "30px",
                  objectFit: "contain",
                  // border: "1px solid black",
                  marginBottom: "2px",
                }}
                src={logo_black}
                alt=""
              />
            )}
          </NavLink>
        </div>
        <NavLink
          exact
          to="/hjem"
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
          className={`header__heading--gallery header__heading--mobile ${
            toggleDropdown ? "dropdown active" : "dropdown"
          }`}
        >
          <h4 id="galleri__arrow" className="header__title">
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
          to="/priser"
          style={{ textDecoration: "none" }}
          activeClassName="header__heading--active"
        >
          <div className="header__heading--prices header__heading--mobile">
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
          to="/omoss"
          style={{ textDecoration: "none" }}
          activeClassName="header__heading--active"
        >
          <div className="header__heading--aboutUs header__heading--mobile">
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
          to="/kontakt"
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
          <MenuIcon fontSize="small" onClick={() => setShowMenu(!showMenu)} />

          {/* MOBILE MENU */}
          {maskTransitions(
            (styles, item) =>
              item && (
                <animated.div
                  style={styles}
                  className={`${showMenu && "half-black"}`}
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
                      justifyContent: "flex-start",
                    }}
                  >
                    <NavLink to="/hjem">
                      <img
                        style={{
                          // border: "1px solid red",
                          height: "50px",
                          width: "100px",
                          objectFit: "contain",
                          marginTop: "16px",
                          marginLeft: "42px",
                        }}
                        className="header__mobileLogo"
                        src={logo_black}
                        alt="memorylane fotografi"
                      />
                    </NavLink>
                  </div>
                  <div className="header__mobileMenuContents">
                    <div className="header__mobileMenuContentsContainer">
                      <NavLink
                        exact
                        to="/hjem"
                        onClick={() => setShowMenu(!showMenu)}
                        style={{ textDecoration: "none" }}
                      >
                        <h4
                          style={{
                            fontSize: "16px",
                            color: "#fff",
                          }}
                        >
                          Hjem
                        </h4>
                      </NavLink>
                      <div className="header__border"></div>
                      <div
                        className={`gallery__menu  ${
                          toggleGallery ? "dropdown active" : "dropdown"
                        }`}
                        onClick={handleGalleryToggle}
                      >
                        <h4
                          id="gallery__arrowMobile"
                          style={{
                            fontSize: "16px",
                            color: "#fff",
                            // border: "1px solid red",
                          }}
                        >
                          Galleri
                        </h4>
                        <Expand open={toggleGallery}>
                          <div className="gallery__subMenu">
                            {menuArray.map((item, i, arr) => (
                              <div key={item} className="gallery__item">
                                <NavLink
                                  to={`/galleri/${item}`}
                                  onClick={() => setShowMenu(!showMenu)}
                                  style={{ textDecoration: "none" }}
                                >
                                  <h5
                                    style={{
                                      paddingLeft: "12px",
                                      fontSize: "12px",
                                      paddingBottom: "3px",
                                      color: "#fff",
                                    }}
                                  >
                                    {item.charAt(0).toUpperCase() +
                                      item.slice(1)}
                                  </h5>
                                </NavLink>
                                <div
                                  style={{
                                    display:
                                      arr.length - 1 === i ? "none" : "block",
                                  }}
                                  className="header__border"
                                ></div>
                              </div>
                            ))}
                          </div>
                        </Expand>
                      </div>
                      <div className="header__border"></div>
                      <NavLink
                        exact
                        to="/priser"
                        onClick={() => setShowMenu(!showMenu)}
                        style={{ textDecoration: "none" }}
                        activeclassname="header__heading--active2"
                      >
                        <h4 style={{ fontSize: "16px", color: "#fff" }}>
                          Priser
                        </h4>
                      </NavLink>
                      <div className="header__border"></div>
                      <NavLink
                        exact
                        to="/omoss"
                        onClick={() => setShowMenu(!showMenu)}
                        style={{ textDecoration: "none" }}
                        activeclassname="header__heading--active2"
                      >
                        <h4 style={{ fontSize: "16px", color: "#fff" }}>
                          Om oss
                        </h4>
                      </NavLink>
                      <div className="header__border"></div>
                      <NavLink
                        exact
                        to="/kontakt"
                        onClick={() => setShowMenu(!showMenu)}
                        style={{ textDecoration: "none" }}
                      >
                        <h4 style={{ fontSize: "16px", color: "#fff" }}>
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
                </animated.div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
