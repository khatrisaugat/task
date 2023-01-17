import React from "react";
import { HeaderContainer } from "./header.styles";
import CustomButton from "./../CustomButton/custom-button";

function Header() {
  return (
    <HeaderContainer>
      <h1>Cloco</h1>
      <CustomButton>Log Out</CustomButton>
    </HeaderContainer>
  );
}

export default Header;
