import styled from "styled-components";
import bg from "../../images/bg.jpg";
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 90%;
  width: 70%;
  box-sizing: border-box;
  background-color: #f2f2f2;
  opacity: 0.9;
  border-radius: 30px;
  margin-left: -1em;
  margin-right: 1em;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;
