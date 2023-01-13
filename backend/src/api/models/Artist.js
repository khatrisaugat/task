const artistFields = {
  id: { type: "int", nullable: false, primary: true, autoIncrement: true },
  name: { type: "varchar", maxlength: 255, nullable: false },
  dob: { type: "datetime", nullable: false },
  gender: { type: "enum", values: ["m", "f", "o"], nullable: false },
  first_release_year: { type: "year", nullable: false },
  no_of_albums_released: { type: "int", nullable: false },
  createdAt: { type: "datetime", nullable: true },
  updatedAt: { type: "datetime", nullable: true },
};
