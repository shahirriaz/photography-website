import React, { useState } from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import YourInformation from "./YourInformation";

function Contact() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div className="contact">
      {!formIsSubmitted ? (
        <ContactForm submitForm={submitForm} />
      ) : (
        <YourInformation />
      )}
    </div>
  );
}

export default Contact;
