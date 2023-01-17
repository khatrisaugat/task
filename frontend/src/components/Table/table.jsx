import React from "react";
import { TableContainer } from "./table.styles";
import TableRow from "../TableRow/table-row";

function Table({ dataSet }) {
  const getHeaderColumn = (data) => {
    let headerColumn = Object.keys(data).filter(
      (key) =>
        key !== "id" &&
        key !== "password" &&
        key !== "created_at" &&
        key !== "updated_at"
    );
    headerColumn = headerColumn.map((el) => el.replace("_", " "));
    headerColumn.push("action");
    return headerColumn;
  };
  const getBodyColumn = (dataSet) => {
    let bodyColumn = dataSet.map((data) => {
      return Object.values(data).filter(
        (value) =>
          value !== data.id &&
          value !== data.password &&
          value !== data.created_at &&
          value !== data.updated_at
      );
    });
    bodyColumn = bodyColumn.map((row) => {
      row.push("actionBody");
      return row;
    });
    return bodyColumn;
  };
  if (dataSet.length === 0) return <div>There is no data</div>;
  return (
    <TableContainer className="no-scroll">
      <TableRow isHeader={true} data={getHeaderColumn(dataSet[0])} />
      {getBodyColumn(dataSet).map((row, index) => (
        <TableRow key={index} data={row} isHeader={false} />
      ))}
    </TableContainer>
  );
}

export default Table;
