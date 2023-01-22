import React, { useState } from "react";
import { Content } from "./login.styles";
import FormInput from "./../FormInput/form-input";
import CustomButton from "../CustomButton/custom-button";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };
  const handleSubmit = async (event) => {
    setIsLoading(true);
    const data = await loginUser(state);
    if (data.success) {
      setIsLoading(false);
      navigate("/home");
    } else if (data.error) {
      setIsLoading(false);
      setError(data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
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
      <CustomButton onClick={handleSubmit} isLoading={isLoading}>
        Login
      </CustomButton>
      <p className="error">{error}</p>
    </Content>
  );
}

export default Login;
