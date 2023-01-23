const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
  data.last_name = !isEmpty(data.last_name) ? data.last_name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  // data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  // username checks
  if (Validator.isEmpty(data.first_name)) {
    errors.message = "First Name field is required";
  }
  if (Validator.isEmpty(data.last_name)) {
    errors.message = "Last Name field is required";
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.message = "Email is invalid";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.message = "Password field is required";
  }
  // if (Validator.isEmpty(data.password2)) {
  //   errors.password2 = "Confirm password field is required";
  // }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.message = "Password must be at least 6 characters";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.message = "Phone field is required";
  }
  if (Validator.isEmpty(data.address)) {
    errors.message = "Address field is required";
  }
  // if (!Validator.equals(data.password, data.password2)) {
  //   errors.password2 = "Passwords must match";
  // }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
