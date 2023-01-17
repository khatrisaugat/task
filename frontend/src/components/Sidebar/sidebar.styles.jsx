import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 90%;
  width: 20%;
  background-color: #636c78;
  border-radius: 30px;
  color: #fff;
  margin-left: 1em;
  padding: 1em;
  padding-right: 2em;
  opacity: 0.9;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 1em;
    box-sizing: border-box;
    margin: 0;
  }
`;

export const MenuPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
`;

export const HeadingPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
