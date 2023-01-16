import React from "react";
import {
  ContentWrapper,
  LoginAndRegisterPageContainer,
  Tabs,
  Wrapper,
} from "./login-and-register.styles";
import CustomButton from "./../../components/CustomButton/custom-button";
import Login from "./../../components/Login/login";
import Register from "./../../components/Register/register";
import { FaArrowDown } from "react-icons/fa";

function LoginAndRegister() {
  const [tab, setTab] = React.useState("login");
  const loginTab = () => {
    setTab("login");
  };
  const registerTab = () => {
    setTab("register");
  };
  return (
    <LoginAndRegisterPageContainer>
      <Wrapper>
        <Tabs>
          <CustomButton
            navTabButtonStyles={tab === "login" ? false : true}
            navTabButtonStylesWhite={tab === "login" ? true : false}
            onClick={loginTab}
          >
            Login
          </CustomButton>
          <CustomButton
            navTabButtonStyles={tab === "register" ? false : true}
            navTabButtonStylesWhite={tab === "register" ? true : false}
            onClick={registerTab}
          >
            Register
          </CustomButton>
        </Tabs>
        <ContentWrapper>
          {tab === "login" ? (
            <Login />
          ) : tab === "register" ? (
            <>
              <Register />
              <FaArrowDown className="blinkAnimation" />
            </>
          ) : null}
        </ContentWrapper>
      </Wrapper>
    </LoginAndRegisterPageContainer>
  );
}

export default LoginAndRegister;
