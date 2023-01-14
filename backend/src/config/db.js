const connectdb = async () => {
  var mysql = require("mysql2/promise");
  //local mysql db connection
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cloco",
  });
  // console.log("connection", connection);
  return connection;
};

module.exports = { connectdb };
