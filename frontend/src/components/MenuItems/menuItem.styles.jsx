import styled from "styled-components";

export const MenuItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 1.5em;
  width: 100%;
  padding: 1.5em 0.5em;
  margin: 0.5em;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #fff;
    color: #000;
    border-radius: 30px;
  }
`;

export const MenuTitle = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  text-transform: capitalize;
`;
