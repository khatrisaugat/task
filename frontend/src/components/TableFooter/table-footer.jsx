import React, { useEffect } from "react";
import { TableFooterButton, TableFooterContainer } from "./table-footer.styles";
const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <TableFooterContainer>
      {range.map((el, index) => (
        <TableFooterButton
          key={index}
          isActive={el === page}
          onClick={() => setPage(el)}
        >
          {el}
        </TableFooterButton>
      ))}
    </TableFooterContainer>
  );
};

export default TableFooter;
