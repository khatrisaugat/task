const crud = require("./crud");
const table = require("./table");
const db = require("./../../../config/db");

class Database {
  constructor(tableName, columns) {
    this.tableName = tableName;
    this.columns = columns;
    //create table if not exists
    this.createTable();
  }
  //create table using fields
  createTable = () => {
    const tableName = this.tableName;
    const columns = this.columns;
    const sql = table.createTable(tableName, columns);
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Table created");
    });
  };

  //add foreign key with relationship
  addForeignKey = (columnName, refTableName, refColumnName) => {
    const tableName = this.tableName;
    const sql = table.addForeignKey(
      tableName,
      columnName,
      refTableName,
      refColumnName
    );
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Relationship created");
    });
  };

  //insert data into table
  create = (data) => {
    const tableName = this.tableName;
    const sql = crud.create(tableName, data);
    db.query(sql, async (err, result, fields) => {
      if (err) throw err;
      console.log("Data inserted");
      console.log(result.insertId);
      return result.insertId;
    });
  };

  //get data from table
  read = (where = null, fields = "*") => {
    const tableName = this.tableName;
    const sql = crud.read(tableName, where, fields);
    db.query(sql, (err, result, fields) => {
      if (err) throw err;
      console.log("getting data");
      console.log(result);
      return result;
    });
  };

  //update data in table
  update = (data, where) => {
    const tableName = this.tableName;
    const sql = crud.update(tableName, data, where);
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Relationship created");
      console.log(result);
      return result;
    });
  };

  //delete data from table
  delete = (where) => {
    const tableName = this.tableName;
    const sql = crud.delete(tableName, where);
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Relationship created");
      console.log(result);
    });
  };
}

module.exports = Database;
