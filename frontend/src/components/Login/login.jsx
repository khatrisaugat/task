import React, { useState } from "react";
import { Content } from "./login.styles";
import FormInput from "./../FormInput/form-input";
import CustomButton from "../CustomButton/custom-button";
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };
  const handleSubmit = (event) => {
    console.log("Login");
    navigate("/admin");
  };
  return (
    <Content className="no-scroll">
      <h1>User Login</h1>
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={state.email}
        handleChange={handleChange}
        required
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        value={state.password}
        handleChange={handleChange}
        required
      />
      <CustomButton onClick={handleSubmit}>Login</CustomButton>
    </Content>
  );
}

export default Login;
