const connectdb = async () => {
  var mysql = require("mysql2/promise");
  //local mysql db connection
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "cloco",
  });
  // console.log("connection", connection);
  return connection;
};

module.exports = { connectdb };
