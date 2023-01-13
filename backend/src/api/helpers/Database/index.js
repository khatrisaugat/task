const crud = require("./crud");
const table = require("./table");

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
    return table.createTable(tableName, columns);
  };

  //add foreign key with relationship
  addForeignKey = (columnName, refTableName, refColumnName) => {
    const tableName = this.tableName;
    return table.addForeignKey(
      tableName,
      columnName,
      refTableName,
      refColumnName
    );
  };

  //insert data into table
  create = (data) => {
    const tableName = this.tableName;
    return crud.create(tableName, data);
  };

  //get data from table
  read = (where = null, fields = "*") => {
    const tableName = this.tableName;
    return crud.read(tableName, where, fields);
  };

  //update data in table
  update = (data, where) => {
    const tableName = this.tableName;
    return crud.update(tableName, data, where);
  };

  //delete data from table
  delete = (where) => {
    const tableName = this.tableName;
    return crud.delete(tableName, where);
  };
}

module.exports = Database;
