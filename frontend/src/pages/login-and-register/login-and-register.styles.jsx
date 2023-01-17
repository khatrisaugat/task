import styled from "styled-components";
import bg from "./../../images/bg.jpg";

export const LoginAndRegisterPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: #2980b9; /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);
  // background: linear-gradient(to right, #2c3e50, #2980b9);
  background: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  width: 50%;
  margin-top: 2em;
  max-height: 80vh;
  position: relative;
  box-sizing: border-box;
  @media screen and (max-width: 570px) {
    width: 100%;
  }
`;

export const Tabs = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -45px;
  left: 0;
  z-index: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: 70vh;
  padding: 2em;
  border-radius: 30px;
  background-color: #faf9f6;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);
  opacity: 0.9;
`;
