const formValidation = (user, checked) => {
  let errors = {};

  if (!user.name) {
    errors.name = "Navn er påkrevd";
  }

  if (!user.email) {
    errors.email = "E-post er påkrevd";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "E-post er ugyldig";
  }
  if (!user.phone) {
    errors.phone = "Telefon er påkrevd";
  }

  if (!user.type) {
    errors.type = "Type is required";
  }

  if (!user.age) {
    errors.age = "Alder er påkrevd og må skrives med tall";
  }

  if (!user.date) {
    errors.date = "Dato er påkrevd";
  }

  if (!checked) {
    errors.checked = "Dette feltet er påkrevd";
  }

  return errors;
};

export default formValidation;
