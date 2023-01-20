import React from "react";
import { TableContainer } from "./table.styles";
import TableRow from "../TableRow/table-row";

function Table({ dataSet, handleEdit, handleDelete, customRowComponent }) {
  console.log(dataSet);
  const getHeaderColumn = (data) => {
    let headerColumn = Object.keys(data).filter(
      (key) =>
        key !== "id" &&
        key !== "password" &&
        key !== "created_at" &&
        key !== "updated_at"
    );
    headerColumn = headerColumn.map((el) => el.replaceAll("_", " "));
    return headerColumn;
  };
  const getBodyColumn = (dataSet) => {
    dataSet.forEach((data) => {
      delete data.password;
      delete data.artist_id;
      delete data.created_at;
      delete data.updated_at;
      data.action = "actionBody";
      customRowComponent && (data.custom = customRowComponent(data.id));
    });

    return dataSet;
  };
  if (dataSet.length === 0) return <div>There is no data</div>;
  return (
    <TableContainer className="no-scroll">
      <TableRow isHeader={true} data={getHeaderColumn(dataSet[0])} />
      {getBodyColumn(dataSet).map((row, index) => (
        <TableRow
          key={index}
          data={row}
          isHeader={false}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </TableContainer>
  );
}

export default Table;
