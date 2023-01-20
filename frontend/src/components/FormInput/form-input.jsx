import React from "react";
import {
  FormGroup,
  FormInputContainer,
  FormInputLabel,
  SelectInputContainer,
} from "./form-input.styles";

function FormInput({ handleChange, label, selectOptions, ...otherProps }) {
  return (
    <FormGroup>
      {otherProps.higherLable && (
        <FormInputLabel otherProps={otherProps} style={{ color: "black" }}>
          {otherProps.higherLable} <br />
        </FormInputLabel>
      )}
      {selectOptions ? (
        <SelectInputContainer {...otherProps} onChange={handleChange}>
          {selectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectInputContainer>
      ) : (
        <FormInputContainer onChange={handleChange} {...otherProps} />
      )}
      {label && otherProps.type !== "date" ? (
        <FormInputLabel
          otherProps={otherProps}
          style={selectOptions && { top: "-5px", color: "black" }}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </FormGroup>
  );
}

export default FormInput;
