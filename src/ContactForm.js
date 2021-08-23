import React, { useEffect, useState } from "react";
import "./ContactForm.css";
import formValidation from "./formValidation";
import { useStateValue } from "./StateProvider";
import { CircularProgress } from "@material-ui/core";
import axios from "./axios";
import barn from "./images/gallery/barn/barn_13.jpg";

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
    comment: "",
    pricePackage: "",
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
          comment: user.comment,
          pricePackage: user.pricePackage,
        },
        timeout: 10000,
        headers: { "Content-Type": "application/json" },
      })
        .then(response => {
          if (response.status === 201) {
            dispatch({
              type: "SEND_USER",
              user: user,
            });
          } else {
          }
          // setProcessing(false);
          setSucceeded(true);

          submitForm(true);

          setUser({
            name: "",
            email: "",
            phone: "",
            type: "",
            age: "",
            date: "",
            comment: "",
            pricePackage: "",
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
            <div className="input__container">
              <input
                className="contactForm__input"
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Navn"
              />
            </div>

            {errors.name && <p className="error">{errors.name}</p>}
            <div className="input__container">
              <input
                className="contactForm__input"
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="E-post"
              />
            </div>

            {errors.email && <p className="error">{errors.email}</p>}
            <div className="input__container">
              <input
                className="contactForm__input"
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Telefon"
              />
            </div>

            {errors.phone && <p className="error">{errors.phone}</p>}
            <div className="input__container">
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
                <option value="Barn">Barn</option>
                <option value="Gravid">Gravid</option>
                <option value="Portrett">Portrett</option>
              </select>
            </div>

            {errors.type && <div className="error__container"></div>}
            <div className="input__container">
              <input
                className="contactForm__input"
                type="text"
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="Skriv alder"
              />
            </div>
            {errors.age && <p className="error">{errors.age}</p>}
            <div className="input__container">
              <input
                className="contactForm__input"
                type="text"
                name="date"
                value={user.date}
                onChange={handleChange}
                placeholder="Når ønsker du fotografering?"
              />
            </div>
            {errors.date && <p className="error">{errors.date}</p>}

            <div className="input__container">
              <select
                style={{ color: "black" }}
                name="pricePackage"
                className="contactForm__input contactForm__input--select"
                value={user.pricePackage}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Type pakke
                </option>
                <option value="Har ikke bestemt meg enda">
                  Har ikke bestemt meg enda
                </option>
                <option value="Bildepakke 1, 5 bilder, 2000kr">
                  Bildepakke 1, 5 bilder, 2000kr
                </option>
                <option value="Bildepakke 2, 10 bilder, 3500kr">
                  Bildepakke 2, 10 bilder, 3500kr
                </option>
                <option value="Bildepakke 3, 15 bilder, 4800kr">
                  Bildepakke 3, 15 bilder, 4800kr
                </option>
                <option value="Bildepakke 4, 20 bilder, 5600kr">
                  Bildepakke 4, 20 bilder, 5600kr
                </option>
                <option value="Bryllupspakke - Halvdag, 250 bilder, 4999kr">
                  Bryllupspakke - Halvdag, 250 bilder, 4999kr
                </option>
                <option value="Bryllupspakke - Halvdag, 250 bilder, 4999kr">
                  Bryllupspakke - Heldag, 400 bilder, 6999kr
                </option>
                <option value="Bryllupspakke - Dagen før og heldag, 500 bilder, 7999kr">
                  Bryllupspakke - Dagen før og heldag, 500 bilder, 7999kr
                </option>
              </select>
            </div>

            <div id="comment__input--container" className="input__container">
              <input
                id="comment__input"
                className="contactForm__input"
                type="text"
                name="comment"
                value={user.comment}
                onChange={handleChange}
                placeholder="Kommentar"
              />
            </div>
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
      </form>

      <div className="contactForm__form--right">
        <img src={barn} alt="" />

        {/* <div className="contactForm__logo">
            <img src={logo} alt="" />
          </div>
          <div className="contactForm__maps">
            <h2>Her finner du oss!</h2>
            <img src={maps} alt="" />
          </div> */}
      </div>
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
