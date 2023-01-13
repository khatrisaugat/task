const crud = {};
crud.read = function (tableName, where = null, fields = "*") {
  let query = "SELECT " + fields + " FROM " + tableName;
  if (where) {
    query += " WHERE " + where;
  }
  console.log(query);
  return query;
};

crud.create = (tableName, data) => {
  let query = "INSERT INTO " + tableName + " (";
  let keys = [],
    values = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      keys.push(key);
      values.push(data[key]);
    }
  }
  query += keys.join(", ") + ") VALUES ('" + values.join("','") + "')";
  console.log(query);
  return query;
};

crud.update = (tableName, data, where) => {
  let query = "UPDATE " + tableName + " SET ";
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      query += key + " = '" + data[key] + "', ";
    }
  }
  query = query.slice(0, -2);
  query += " WHERE " + where;
  console.log(query);
  return query;
};

crud.delete = (tableName, where) => {
  let query = "DELETE FROM " + tableName + " WHERE " + where;
  console.log(query);
  return query;
};

module.exports = crud;
