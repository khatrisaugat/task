import React from "react";
import { TableCellDiv, TableRowDiv } from "./table-row.styles";
import CustomButton from "../CustomButton/custom-button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function TableRow({ isHeader, data, handleEdit }) {
  const makeActionsItem = () => {
    return (
      <div>
        <CustomButton iconButton onClick={() => handleEdit(data)}>
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
      {isHeader &&
        data.map((item, index) => (
          <TableCellDiv key={index} isHeader={isHeader}>
            {item}
          </TableCellDiv>
        ))}
      {!isHeader &&
        Object.values(data).map((item, index) => (
          <TableCellDiv key={index}>
            {item !== "actionBody" ? item : makeActionsItem()}
          </TableCellDiv>
        ))}
    </TableRowDiv>
  );
}

export default TableRow;
