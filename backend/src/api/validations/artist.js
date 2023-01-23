const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateArtistInput(data) {
  let errors = {};
  console.log("data", data);
  console.log("data.name", isEmpty(data.name));
  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.first_release_year = !isEmpty(data.first_release_year)
    ? data.first_release_year
    : "";
  data.no_of_albums_released = !isEmpty(data.no_of_albums_released)
    ? data.no_of_albums_released
    : "";
  if (Validator.isEmpty(data.no_of_albums_released)) {
    errors.message = "Number of albums field is required";
  }

  if (Validator.isEmpty(data.first_release_year)) {
    errors.message = "First Release year is required";
  }
  if (Validator.isEmpty(data.name)) {
    errors.message = "Name field is required";
  }
  //   console.log("errors", errors);
  //   console.log(isValid);
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
