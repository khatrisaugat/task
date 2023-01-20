const crud = require("./crud");
const table = require("./table");
const db = require("./../../../config/db");
// db.connectdb();
// const connection = db.connectdb();

class Database {
  constructor(tableName, columns) {
    this.tableName = tableName;
    this.columns = columns;
    //create table if not exists
    this.createTable();
  }
  //create table using fields
  createTable = async () => {
    const tableName = this.tableName;
    const columns = this.columns;
    const sql = table.createTable(tableName, columns);
    const connection = await db.connectdb();
    const [rows, fields] = await connection.query(sql);
    connection.end();
    // await connection.query(sql);
    // console.log(rows);
  };

  //add foreign key with relationship
  addForeignKey = async (columnName, refTableName, refColumnName) => {
    const tableName = this.tableName;
    const sql = table.addForeignKey(
      tableName,
      columnName,
      refTableName,
      refColumnName
    );
    const connection = await db.connectdb();
    const [rows, fields] = await connection.query(sql);
    connection.end();
    console.log("Foreign key added");
  };

  //insert data into table
  create = async (data) => {
    const tableName = this.tableName;
    const sql = crud.create(tableName, data);
    const connection = await db.connectdb();
    const [rows, fields] = await connection.query(sql);
    connection.end();
    // console.log("rows: ", rows);
    return rows.insertId;
  };

  //get data from table
  find = async (condition) => {
    const tableName = this.tableName;
    const sql = crud.read(tableName, condition);

    const connection = await db.connectdb();
    const [rows] = await connection.query(sql);
    connection.end();
    // console.log("rowsData: ", rows);
    return rows;
  };

  //update data in table
  update = async (data, where) => {
    const tableName = this.tableName;
    const sql = crud.update(tableName, data, where);
    const connection = await db.connectdb();
    const [rows] = await connection.query(sql);
    // console.log("rowsData: ", rows);
    if (rows.affectedRows == 0) return { error: "No data found to update" };
    const result = await this.find(where);
    connection.end();
    console.log("result: ", result);
    return result;
  };

  //delete data from table
  delete = async (where) => {
    const tableName = this.tableName;
    const sql = crud.delete(tableName, where);
    const connection = await db.connectdb();
    const [rows] = await connection.query(sql);
    connection.end();
    // console.log("rowsData: ", rows);
    if (rows.affectedRows == 0) return { error: "No data found to delete" };
    return { message: "Data deleted successfully" };
  };
}

module.exports = Database;
