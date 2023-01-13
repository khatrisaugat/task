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
  createdAt: { type: "datetime", nullable: true },
  updatedAt: { type: "datetime", nullable: true },
};
