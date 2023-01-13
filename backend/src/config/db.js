var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cloco",
});

connection.getConnection((err) => {
  if (!err) {
    console.log("Successfully connected to the db.");
  } else {
    console.log("There was an error \n Error: " + JSON.stringify(err));
  }
});

module.exports = connection;
