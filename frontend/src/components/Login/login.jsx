import React, { useState } from "react";
import { Content } from "./login.styles";
import FormInput from "./../FormInput/form-input";
import CustomButton from "../CustomButton/custom-button";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };
  return (
    <Content>
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
      <CustomButton inverted>Login</CustomButton>
    </Content>
  );
}

export default Login;
