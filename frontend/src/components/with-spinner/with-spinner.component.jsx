import React from "react";

import {
  SpinnerContainer,
  SpinnerOverlay,
  Spinner,
} from "./with-spinner.styles";

export const WithSpinner = (WrappedComponent) => {
  const SpinnerComp = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return SpinnerComp;
};
