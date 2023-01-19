import React from "react";
import { TableCellDiv, TableRowDiv } from "./table-row.styles";
import CustomButton from "../CustomButton/custom-button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function TableRow({ isHeader, data, handleEdit, handleDelete }) {
  const newData = { ...data };
  if (newData.id) {
    delete newData.id;
  }
  const convertDateToYYYMMDD = (date) => {
    let d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };
  if (data.dob) {
    // console.log(convertDateToYYYMMDD(data.dob));
    data.dob = convertDateToYYYMMDD(data.dob);
  }

  const makeActionsItem = (data) => {
    return (
      <div>
        <CustomButton iconButton onClick={() => handleEdit(data)}>
          <AiFillEdit />
        </CustomButton>
        <CustomButton iconButton onClick={() => handleDelete(data)}>
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
        Object.values(newData).map((item, index) => {
          return (
            <TableCellDiv key={index}>
              {item !== "actionBody" ? item : makeActionsItem(data)}
            </TableCellDiv>
          );
        })}
    </TableRowDiv>
  );
}

export default TableRow;
