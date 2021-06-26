import React, { useEffect, useState } from "react";
import "./Contact.css";
import logo from "./images/logo.png";
import maps from "./images/maps.png";
import Axios from "axios";
import formValidation from "./formValidation";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { CircularProgress } from "@material-ui/core";
import axios from "./axios";

function Contact() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    age: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors(formValidation(user));
    setDataIsCorrect(true);

    if (dataIsCorrect) {
      setProcessing(true);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
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
      }).then(response => {
        console.log(response);
        dispatch({
          type: "SEND_USER",
          user: user,
        });
        setTimeout(() => {
          history.replace("/yourInformation");
        }, 2000);

        // if (response.statusCode === 200 || response.statusCode === 201) {
        //   setProcessing(false);
        //   setSucceeded(true);
        // }

        setUser({
          name: "",
          email: "",
          phone: "",
          type: "",
          age: "",
          date: "",
        });
      });
    }
  }, [errors]);

  /**Form name and value attributes */
  let name, value;

  const handleChange = e => {
    setDisabled(e.empty);

    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form--left">
          <div className="contact__title">
            <h1>Kontakt oss</h1>
          </div>
          <div className="contact__form--inputs">
            <input
              className="contact__input"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Navn"
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              className="contact__input"
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="E-post"
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              className="contact__input"
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Telefon"
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
            <select
              name="type"
              className="contact__input"
              value={user.type}
              onChange={handleChange}
            >
              <option value="Type fotografering">Type fotografering</option>
              <option value="Bryllup">Bryllup</option>
              <option value="Familie">Familie</option>
              <option value="Forlovelse">Forlovelse</option>
              <option value="1års fotografering">1års fotografering</option>
              <option value="Gravidfotografering">Gravidfotografering</option>
              <option value="Nyfødtfotografering">Nyfødtfotografering</option>
            </select>
            {errors.type && <div className="error__container"></div>}
            <input
              className="contact__input"
              type="text"
              name="age"
              value={user.age}
              onChange={handleChange}
              placeholder="Skriv alder og kjønn på den/de som skal fotografere"
            />
            {errors.age && <p className="error">{errors.age}</p>}
            <input
              className="contact__input"
              type="text"
              name="date"
              value={user.date}
              onChange={handleChange}
              placeholder="Når ønsker du fotografering?"
            />
            {errors.date && <p className="error">{errors.date}</p>}
          </div>
          <div className="contact__form--button">
            <button disabled={processing || disabled || succeeded}>
              <span>
                {processing ? (
                  <CircularProgress style={{ color: "#ff8c27" }} />
                ) : (
                  "Send"
                )}
              </span>
            </button>
            {/* <button>Send</button> */}
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
    </div>
  );
}

export default Contact;

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

// dispatch({
//   type: "SEND_USER",
//   user: user,
// });
