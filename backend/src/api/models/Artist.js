const Database = require("../helpers/Database");
const artistFields = {
  id: { type: "int", nullable: false, primary: true, autoIncrement: true },
  name: { type: "varchar", maxlength: 255, nullable: false },
  dob: { type: "datetime", nullable: false },
  gender: { type: "enum", values: ["m", "f", "o"], nullable: false },
  first_release_year: { type: "year", nullable: false },
  no_of_albums_released: { type: "int", nullable: false },
  created_at: { type: "datetime", nullable: true },
  updated_at: { type: "datetime", nullable: true },
};

const Artist = new Database("artists", artistFields);
// Artist.create({
//   name: "Hello World",
//   dob: "2020-01-01",
//   gender: "m",
//   first_release_year: "2020",
//   no_of_albums_released: 1,
// });
// Artist.read();
// Artist.update({ name: "Hello World" }, "id=1");
// Artist.delete("id=1");
module.exports = Artist;
