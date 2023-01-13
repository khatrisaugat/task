musicFields = {
  id: { type: "int", nullable: false, primary: true, autoIncrement: true },
  title: { type: "varchar", maxlength: 255, nullable: false },
  artist_id: { type: "int", nullable: false },
  album_name: { type: "varchar", maxlength: 255, nullable: false },
  genre: {
    type: "enum",
    values: ["rnb", "country", "classic", "rock", "jazz"],
    nullable: false,
  },
  created_at: { type: "datetime", nullable: true },
  updated_at: { type: "datetime", nullable: true },
};
