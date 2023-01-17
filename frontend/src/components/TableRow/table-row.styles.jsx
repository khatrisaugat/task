import styled, { css } from "styled-components";

const headerRow = css`
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
`;

export const TableRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 5px;

  ${({ isHeader }) => (isHeader ? headerRow : null)}
`;

export const TableCellDiv = styled.div`
  flex-basis: 100px;
  flex-shrink: 0;
  word-break: break-word;
  border-bottom: 1.5px solid #ccc;
  box-shadow: 0px 1px 0px #e0e5eb;
  ${({ isHeader }) => (isHeader ? "  background-color: #eef1f7;" : null)}
`;
