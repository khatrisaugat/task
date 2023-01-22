import React from "react";
import { Button } from "./custom-button.styles";

function CustomButton({ children, isLoading, ...otherProps }) {
  return (
    <Button disabled={isLoading} {...otherProps}>
      {isLoading ? "Loading..." : children}
    </Button>
  );
}

export default CustomButton;
