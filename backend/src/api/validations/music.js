const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateMusicInput(data) {
  let errors = {};
  //   console.log("data", data);
  //   console.log("data.name", isEmpty(data.name));
  // Convert empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : "";
  data.album_name = !isEmpty(data.album_name) ? data.album_name : "";
  if (Validator.isEmpty(data.album_name)) {
    errors.message = "Album Name is required";
  }
  if (Validator.isEmpty(data.title)) {
    errors.message = "Music title field is required";
  }
  //   console.log("errors", errors);
  //   console.log(isValid);
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
