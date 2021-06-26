const formValidation = user => {
  let errors = {};

  if (!user.name) {
    errors.name = "Name is required";
  }

  if (!user.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "Email is invalid";
  }
  if (!user.phone) {
    errors.phone = "Phone is required";
  }
  if (!user.type) {
    errors.type = "Type is required";
  }

  if (!user.age) {
    errors.age = "Age is required";
  }
  if (!user.date) {
    errors.date = "Date is required";
  }

  return errors;
};

export default formValidation;
