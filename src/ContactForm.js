import React, { useEffect, useState } from "react";
import "./ContactForm.css";
import logo from "./images/logo.png";
import maps from "./images/maps.png";
import formValidation from "./formValidation";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { CircularProgress } from "@material-ui/core";
import axios from "./axios";

function ContactForm({ submitForm }) {
  //React Context
  const [state, dispatch] = useStateValue();

  //User State
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    age: "",
    date: "",
  });

  //Error handling
  const [errors, setErrors] = useState({});

  //Button states
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  //Form validation
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  //CheckBox
  const [checked, setChecked] = useState(false);

  //Submit handling
  const handleSubmit = async e => {
    e.preventDefault();
    setErrors(formValidation(user, checked));
    setDataIsCorrect(true);
  };

  /**Form name and value attributes */
  let name, value;

  const handleChange = e => {
    setDisabled(e.empty);
    setChecked(e.target.checked);

    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  //Scroll to top on rerender
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Request handling
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      setProcessing(true);
      axios({
        method: "POST",
        url: "/yourInformation",
        data: {
          firstName: user.name,
          email: user.email,
          phone: user.phone,
          type: user.type,
          age: user.age,
          dato: user.date,
        },
        timeout: 10000,
        headers: { "Content-Type": "application/json" },
      })
        .then(response => {
          console.log(response);
          console.log(response.status);
          if (response.status === 201) {
            dispatch({
              type: "SEND_USER",
              user: user,
            });
          } else {
          }
          // setProcessing(false);
          setSucceeded(true);

          setTimeout(() => {
            submitForm(true);
          }, 10000);
          setUser({
            name: "",
            email: "",
            phone: "",
            type: "",
            age: "",
            date: "",
          });
        })
        .catch(err => {
          alert(err);
          setProcessing(false);
        });
    }
  }, [errors]);

  return (
    <div className="contactForm">
      <form className="contactForm__form" onSubmit={handleSubmit}>
        <div className="contactForm__form--left">
          <div className="contactForm__title">
            <h1>Kontakt oss</h1>
          </div>
          <div className="contactForm__form--inputs">
            <input
              className="contactForm__input"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Navn"
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              className="contactForm__input"
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="E-post"
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              className="contactForm__input"
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Telefon"
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
            <select
              style={{ color: "black" }}
              name="type"
              className="contactForm__input contactForm__input--select"
              value={user.type}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Type fotografering
              </option>
              <option value="Bryllup">Bryllup</option>
              <option value="Familie">Familie</option>
              <option value="Forlovelse">Forlovelse</option>
              <option value="1års fotografering">1års fotografering</option>
              <option value="Gravidfotografering">Gravidfotografering</option>
              <option value="Nyfødtfotografering">Nyfødtfotografering</option>
            </select>
            {errors.type && <div className="error__container"></div>}
            <input
              className="contactForm__input"
              type="text"
              name="age"
              value={user.age}
              onChange={handleChange}
              placeholder="Skriv alder og kjønn på den/de som skal fotografere"
            />
            {errors.age && <p className="error">{errors.age}</p>}
            <input
              className="contactForm__input"
              type="text"
              name="date"
              value={user.date}
              onChange={handleChange}
              placeholder="Når ønsker du fotografering?"
            />
            {errors.date && <p className="error">{errors.date}</p>}
          </div>
          <div className="contactForm__form--text">
            <p>
              Vi er forpliktet til å beskytte og respektere personvernet ditt,
              og vi bruker bare din personlige informasjon til å levere
              produktene og tjenestene du ba om fra oss.
              <span style={{ color: "red" }}>*</span>
            </p>
          </div>
          {/* CHECKBOX */}
          <div className="contactForm__form--checkbox">
            <input type="checkbox" onChange={handleChange} checked={checked} />
            <span className="contactForm__form--checkbox--text">
              Jeg godtar lagring og behandling av mine personopplysninger*
            </span>
            {errors.checked && <p className="error">{errors.checked}</p>}
          </div>

          <div className="contactForm__form--button">
            <button disabled={processing || disabled || succeeded}>
              <span>
                {processing ? (
                  <CircularProgress style={{ color: "white" }} />
                ) : (
                  "Send"
                )}
              </span>
            </button>
          </div>
        </div>

        <div className="contactForm__form--right">
          <div className="contactForm__logo">
            <img src={logo} alt="" />
          </div>
          <div className="contactForm__maps">
            <h2>Her finner du oss!</h2>
            <img src={maps} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

// if (Object.keys(errors).length === 0) {

//   Axios.post("http://localhost:3001/contact", {
//     firstName: user.name,
//     email: user.email,
//     phone: user.phone,
//     type: user.type,
//     age: user.age,
//     dato: user.date,
//   }).then(response => {
//     console.log(response.status);

//     setProcessing(false);
//     setSucceeded(true);
//   });
//   // .catch(error => {
//   //   console.log(error);
//   // });
//   // alert("Posted");
// } else {
//   alert("Cannot post data");
// }
