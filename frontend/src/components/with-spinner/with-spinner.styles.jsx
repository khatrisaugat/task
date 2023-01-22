import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000;
  display: flex;
  opacity: 0.8;
  backdrop-filter: blur(55px);
  justify-content: center;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  transform: translateZ(1px);
`;
export const Spinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: #ffffff;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  @keyframes lds-circle {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;
