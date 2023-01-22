const connectdb = async () => {
  require("dotenv").config();
  var mysql = require("mysql2/promise");
  //local mysql db connection
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  // console.log("connection", connection);
  return connection;
};

module.exports = { connectdb };
