import React from "react";
import {
  FormGroup,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <FormGroup>
      {otherProps.higherLable && (
        <FormInputLabel otherProps={otherProps} style={{ color: "black" }}>
          {otherProps.higherLable} <br />
        </FormInputLabel>
      )}
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label && otherProps.type !== "date" ? (
        <FormInputLabel otherProps={otherProps}>{label}</FormInputLabel>
      ) : null}
    </FormGroup>
  );
}

export default FormInput;
