import React, { useState } from "react";
import { useEffect } from "react";
import { useStateValue } from "./../../StateProvider";
import "./../../Bestill.css";
import Expand from "react-expand-animated";

function InputfieldComponent() {
  const [{ errorInput }, dispatch] = useStateValue();
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  // console.log(errorInput);

  let name, value;
  const handleChange = e => {
    name = e.target.name;
    value = e.target.value;

    // console.log(value);

    setInputUser({
      ...inputUser,
      [name]: value,
    });
  };

  //WHAT THIS IS DOING IS THAT IT IS SETTING AN ERROR ON COMPOUNENT MOUNT --> THIS MUST ONLY RUN BASED ON A CONDITION

  useEffect(() => {
    dispatch({
      type: "SEND_INPUTUSER",
      inputUser: inputUser,
    });
  }, [inputUser]);

  return (
    <div className="bestill__input--container">
      <p>Name</p>
      <div className="input--name">
        <input
          value={inputUser.name}
          name="name"
          onChange={handleChange}
          type="text"
        />
        {errorInput.name && <p className="input__error">{errorInput.name}</p>}
      </div>
      <p style={{ marginTop: errorInput ? "2rem" : "" }}>Emaill</p>
      <div className="input--email">
        <input
          value={inputUser.email}
          name="email"
          onChange={handleChange}
          type="email"
        />
      </div>
      {errorInput.email && <p className="input__error">{errorInput.email}</p>}

      <p>Phone number</p>
      <div className="input--number">
        <input
          value={inputUser.number}
          name="number"
          onChange={handleChange}
          type="text"
        />
        {errorInput.number && (
          <p className="input__error">{errorInput.number}</p>
        )}
      </div>

      <p style={{ marginTop: errorInput ? "2rem" : "" }}>Add your message</p>
      <div className="input--message">
        <input
          value={inputUser.message}
          name="message"
          onChange={handleChange}
          type="text"
        />
      </div>
      {errorInput.message && (
        <p className="input__error">{errorInput.message}</p>
      )}
      {/* <span>Required Info</span> */}
    </div>
  );
}

export default InputfieldComponent;
