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
//dummy data for UserFields
// dummyUser={
//   firstName: "Hello",
//   lastName: "World",
//   email: "hello@world",
//   password:"hello",
//   phone:"1234567890",
//   dob:"2020-01-01",
//   gender:"m",
//   address:"hello world"
// }

// User.create({ firstName: "Hello", lastName: "World", email: "hello@world" });
// User.read();
// User.read("id=1", "id, firstName, lastName");
// User.read(null, "id, firstName, lastName");
// User.update(
//   { firstName: "hi", lastName: "dude", email: "hello@world1234" },
//   { where: { id: 45 } }
// );
// console.log(User.delete({ where: { id: 45 } }));

module.exports = User;
