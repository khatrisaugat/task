import React from "react";
import { HeaderContainer } from "./header.styles";
import CustomButton from "./../CustomButton/custom-button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <HeaderContainer>
      <h1>Cloco</h1>
      <CustomButton onClick={handleLogOut}>Log Out</CustomButton>
    </HeaderContainer>
  );
}

export default Header;
