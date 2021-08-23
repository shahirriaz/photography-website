const inputValidation = inputUser => {
  let errors = {};

  //checking if input field is empty
  if (!inputUser.name) {
    errors.name = "Navn er påkrevd";
  }
  if (!inputUser.email) {
    errors.email = "Epost er påkrevd";
  } else if (!/\S+@\S+\.\S+/.test(inputUser.email)) {
    errors.email = "Epost er ugyldig";
  }
  if (!inputUser.number) {
    errors.number = "Nummer er påkrevd";
  }
  if (!inputUser.message) {
    errors.message = "Melding hadde vært fint:)";
  }
  return errors;
};

export default inputValidation;
