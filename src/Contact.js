import React, { useState } from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import YourInformation from "./YourInformation";
import Footer from "./Footer";

function Contact() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div className="contact">
      <h1 style={{fontSize: "9rem", marginTop: "4rem"}}>Under utvikling</h1>
      {/* {!formIsSubmitted ? (
        <ContactForm submitForm={submitForm} />
      ) : (
        <YourInformation />
      )}
      <Footer /> */}
    </div>
  );
}

export default Contact;
