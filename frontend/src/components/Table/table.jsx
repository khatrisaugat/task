import React from "react";
import { TableContainer } from "./table.styles";
import TableRow from "../TableRow/table-row";

function Table({ dataSet, handleEdit }) {
  const getHeaderColumn = (data) => {
    let headerColumn = Object.keys(data).filter(
      (key) =>
        key !== "id" &&
        key !== "password" &&
        key !== "created_at" &&
        key !== "updated_at"
    );
    headerColumn = headerColumn.map((el) => el.replace("_", " "));
    return headerColumn;
  };
  const getBodyColumn = (dataSet) => {
    dataSet.forEach((data) => {
      delete data.id;
      delete data.password;
      delete data.created_at;
      delete data.updated_at;
      data.action = "actionBody";
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
        />
      ))}
    </TableContainer>
  );
}

export default Table;
