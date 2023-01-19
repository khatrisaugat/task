import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 5em;
  box-sizing: border-box;
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
export const Content = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        overflow: hidden;
        overflow-y: scroll;
        height: 80%;
        margin: auto;
        position: relative;
        z-index: 1000;
        animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
`;
