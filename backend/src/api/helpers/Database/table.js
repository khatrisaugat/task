const table = {};
table.createTable = (tableName, columns) => {
  let query = "CREATE TABLE IF NOT EXISTS " + tableName + " (";
  for (const key in columns) {
    if (columns.hasOwnProperty(key)) {
      const column = columns[key];
      query += key + " " + column.type;
      if (column.type === "enum") {
        query += "('" + column.values.join("','") + "')";
      }
      if (column.maxlength) {
        query += "(" + column.maxlength + ")";
      }
      if (column.primary) {
        query += " PRIMARY KEY";
      }
      if (column.autoIncrement) {
        query += " AUTO_INCREMENT";
      }
      if (column.unique) {
        query += " UNIQUE";
      }
      if (column.nullable) {
        query += " NULL";
      } else {
        query += " NOT NULL";
      }
      if (column.default) {
        query += " DEFAULT " + column.default;
      }
      query += ",";
    }
  }
  query = query.slice(0, -1);
  query += ")";
  console.log(query);
  return query;
};

table.addForeignKey = (tableName, columnName, refTableName, refColumnName) => {
  //   ALTER TABLE musics
  // ADD CONSTRAINT `musics_ibfk_1`
  // FOREIGN KEY IF NOT EXISTS (artist_id) REFERENCES artists(id) ON DELETE CASCADE ON UPDATE CASCADE
  let query =
    "ALTER TABLE " +
    tableName +
    " ADD CONSTRAINT " +
    tableName +
    "_" +
    columnName +
    "_fk" +
    " FOREIGN KEY " +
    "IF NOT EXISTS (" +
    columnName +
    ") REFERENCES " +
    refTableName +
    "(" +
    refColumnName +
    ")" +
    " ON DELETE CASCADE ON UPDATE CASCADE";
  console.log(query);
  return query;
};

module.exports = table;
