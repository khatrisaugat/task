import styled, { css } from "styled-components";

export const TableFooterContainer = styled.div`
  background-color: #f1f1f1;
  padding: 8px 0px;
  width: 100%;
  font-weight: 500;
  text-align: left;
  font-size: 16px;
  margin: auto;
  color: #2c3e50;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
`;
const activeButton = css`
  color: white;
  background: #185adb;
`;

const inactiveButton = css`
  color: #2c3e50;
  background: #f9f9f9;
`;

export const TableFooterButton = styled.button`
  border: none;
  padding: 7px 14px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 4px;
  margin-left: 4px;
  ${(props) => (props.isActive ? activeButton : inactiveButton)}
`;
