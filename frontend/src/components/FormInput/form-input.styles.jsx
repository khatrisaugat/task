import styled, { css } from "styled-components";
const mainColor = "black";
const subColor = "grey";
const shrinkLabel = css`
  top: -5px;
  font-size: 16px;
  color: ${mainColor};
`;
const otherLabel = css`
  position: relative;
  top: 0;
  left: 0;
  color: ${subColor};
`;

export const FormGroup = styled.div`
  position: relative;
  width: 80%;
`;
const radio = css`
  display: inline-block;
  position: relative;
`;

const inputStyles = css`
  background: none;
  background-color: #faf9f6;
  color: ${subColor};
  font-size: 18px;
  font-weight: normal;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
`;
export const SelectInputContainer = styled.select`
  ${inputStyles}
`;

export const FormInputContainer = styled.input`
  ${(props) => (props.type === "radio" ? radio : inputStyles)}

  &:focus ~ label {
    ${(props) =>
      props.type === "radio" || props.type === "date" ? null : shrinkLabel}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 38px;
  ${({ otherProps }) =>
    otherProps.type === "radio" || otherProps.type === "date"
      ? otherLabel
      : null}
  transition: 300ms ease all;
  ${({ otherProps }) => {
    if (otherProps.value !== undefined)
      return otherProps.type !== "date" || otherProps.type !== "radio"
        ? otherProps.value.length && shrinkLabel
        : null;
  }}
`;
