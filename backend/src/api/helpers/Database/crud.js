const crud = {};

crud.read = (tableName, { where, fields, join }) => {
  if (fields) {
    var query = "SELECT " + fields + " FROM " + tableName;
  } else {
    var query = "SELECT * FROM " + tableName;
  }
  if (join) {
    Object.keys(join).forEach((key) => {
      query += " JOIN " + key + " ON " + join[key];
    });
  }
  if (where) {
    Object.keys(where).forEach((key, i) => {
      if (i > 0) {
        query += " AND ";
      }
      query += " WHERE " + key + " = '" + where[key] + "'";
    });
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

crud.update = (tableName, data, { where }) => {
  let query = "UPDATE " + tableName + " SET ";
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      query += key + " = '" + data[key] + "', ";
    }
  }
  query = query.slice(0, -2);
  if (where) {
    Object.keys(where).forEach((key, i) => {
      if (i > 0) {
        query += " AND ";
      }
      query += " WHERE " + key + " = '" + where[key] + "'";
    });
  }
  console.log(query);
  return query;
};

crud.delete = (tableName, { where }) => {
  let query = "DELETE FROM " + tableName;
  if (where) {
    Object.keys(where).forEach((key, i) => {
      if (i > 0) {
        query += " AND ";
      }
      query += " WHERE " + key + " = '" + where[key] + "'";
    });
  }
  console.log(query);
  return query;
};

module.exports = crud;
