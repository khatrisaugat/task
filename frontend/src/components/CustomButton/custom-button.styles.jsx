import styled, { css } from "styled-components";

const button = css`
  width: 225px;
  margin-bottom: 15px;
  padding: 10px 15px;
  opacity: 0.85;
  font-size: large;
  border-radius: 10px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

const buttonStyles = css`
  border: none;
  background: #000;
  color: #fff;
  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
    animation: pulse 1s infinite;
  }
  @keyframes pulse {
    0% {
      border: 1px solid #000;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }
    70% {
      border: 1px solid #000;
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
      border: 1px solid #000;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
`;

const invertedButtonStyles = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  &:hover {
    background-color: #000;
    border: 1px solid #fff;
    color: #fff;
    animation: pulse 1s infinite;
  }
  @keyframes pulse {
    0% {
      border: 1px solid #fff;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }
    70% {
      border: 1px solid #000;
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
      border: 1px solid #fff;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
`;

const navTabButtonStyles = css`
  display: flex;
  justify-content: center;
  padding: 1em 0;
  width: 50%;
  border: 0;
  outline: 0;
  font-size: 1.2rem;
  font-weight: 500;
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);
  background: linear-gradient(to right, #2c3e50, #2980b9);
  box-shadow: 1px 1px 1px 3px hsl(0, 0%, 100%);
  -webkit-box-shadow: 1px 1px 1px 3px hsl(0, 0%, 100%);
  -moz-box-shadow: 1px 1px 1px 3px hsl(0, 0%, 100%);
  color: hsl(0, 0%, 100%);
  border-radius: 30px 30px 0 0;
  opacity: 1;
  cursor: pointer;
`;
const navTabButtonStylesWhite = css`
  ${navTabButtonStyles}
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
`;
const buttonType = (props) => {
  if (props.navTabButtonStyles) {
    return navTabButtonStyles;
  }
  if (props.navTabButtonStylesWhite) {
    return navTabButtonStylesWhite;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const Button = styled.button`
  ${button}
  ${buttonType}
`;
