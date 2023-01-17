import React from "react";
import { TableCellDiv, TableRowDiv } from "./table-row.styles";
import CustomButton from "../CustomButton/custom-button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function TableRow({ isHeader, data }) {
  const makeActionsItem = () => {
    return (
      <div>
        <CustomButton iconButton>
          <AiFillEdit />
        </CustomButton>
        <CustomButton iconButton>
          <AiFillDelete />
        </CustomButton>
      </div>
    );
  };
  return (
    <TableRowDiv isHeader={isHeader}>
      {data.map((item, index) => (
        <TableCellDiv key={index} isHeader={isHeader}>
          {item !== "actionBody" ? item : makeActionsItem()}
        </TableCellDiv>
      ))}
    </TableRowDiv>
  );
}

export default TableRow;
