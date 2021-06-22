import React, { useEffect } from "react";
import "./Contact.css";
import logo from "./images/logo.png";
import maps from "./images/maps.png";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <form className="contact__form">
        <div className="contact__form--left">
          <div className="contact__title">
            <h1>Kontakt oss</h1>
          </div>
          <div className="contact__form--inputs">
            <input
              className="contact__input"
              type="text"
              name="name"
              placeholder="Navn"
            />
            <input
              className="contact__input"
              type="text"
              name="email"
              placeholder="E-post"
            />
            <input
              className="contact__input"
              type="text"
              name="telefon"
              placeholder="Telefon"
            />
            <select className="contact__input">
              <option>Bryllup</option>
              <option>Familie</option>
              <option>Forlovelse</option>
            </select>
            <input
              className="contact__input"
              type="text"
              name="alder"
              placeholder="Skriv alder og kjønn på den/de som skal fotografere"
            />
            <input
              className="contact__input"
              type="text"
              name="dato"
              placeholder="Når ønsker du fotografering?"
            />
          </div>
          <div className="contact__form--button">
            <button>Send</button>
          </div>
        </div>

        <div className="contact__form--right">
          <div className="contact__logo">
            <img src={logo} alt="" />
          </div>
          <div className="contact__maps">
            <h2>Her finner du oss!</h2>
            <img src={maps} alt="" />
          </div>
        </div>
      </form>

      {/* title */}
      {/* name input */}
      {/* email input */}
      {/* telefon input */}
      {/* select dropdown */}
      {/* alder og kjønn input */}
      {/* når ønsker du din fotografering input */}
      {/* lurer du på noe input */}
    </div>
  );
}

export default Contact;
