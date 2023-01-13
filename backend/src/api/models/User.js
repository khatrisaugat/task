const Database = require("../helpers/Database");
const UserFields = {
  id: { type: "int", nullable: false, primary: true, autoIncrement: true },
  firstName: { type: "varchar", maxlength: 255, nullable: false },
  lastName: { type: "varchar", maxlength: 255, nullable: false },
  email: { type: "varchar", maxlength: 255, nullable: false, unique: true },
  password: { type: "varchar", maxlength: 500, nullable: false },
  phone: { type: "varchar", maxlength: 20, nullable: false },
  dob: { type: "datetime", nullable: false },
  gender: { type: "enum", values: ["m", "f", "o"], nullable: false },
  address: { type: "varchar", maxlength: 255, nullable: false },
  created_at: { type: "datetime", nullable: true },
  updated_at: { type: "datetime", nullable: true },
};

const User = new Database("users", UserFields);
// User.create({ firstName: "Hello", lastName: "World", email: "hello@world" });
// User.read();
// User.read("id=1", "id, firstName, lastName");
// User.read(null, "id, firstName, lastName");
// User.update(
//   { firstName: "Hello", lastName: "World", email: "hello@world" },
//   "id=1"
// );
// User.delete("id=1");

module.exports = User;
