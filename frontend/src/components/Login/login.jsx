import React, { useState } from "react";
import { Content } from "./login.styles";
import FormInput from "./../FormInput/form-input";
import CustomButton from "../CustomButton/custom-button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };
  const loginUser = async (user) => {
    console.log(user);
    user = JSON.stringify(user);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
      }
      return res.data;
    } catch (err) {
      console.log(err.response.data);
      return err.response.data;
    }
  };
  const handleSubmit = async (event) => {
    const data = await loginUser(state);
    if (data.success) {
      navigate("/home");
    } else if (data.error) {
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
      <CustomButton onClick={handleSubmit}>Login</CustomButton>
      <p className="error">{error}</p>
    </Content>
  );
}

export default Login;
