import React, { useState } from "react";
import { Content } from "./register.styles";
import FormInput from "./../FormInput/form-input";
import CustomButton from "../CustomButton/custom-button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const get18YearsAgo = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date.toISOString().split("T")[0];
  };
  console.log(get18YearsAgo());
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    dob: get18YearsAgo(),
    gender: "m",
    address: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };
  const handleSubmit = async (event) => {
    const data = await registerUser(state);
    if (data.success) {
      navigate("/admin");
    } else if (data.error) {
      setError(data.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const registerUser = async (user) => {
    console.log(user);
    user = JSON.stringify(user);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
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
  return (
    <Content className="no-scroll">
      <h1>Register User</h1>
      <p className="error">{error}</p>
      <FormInput
        label="First Name"
        name="first_name"
        type="text"
        value={state.first_name}
        handleChange={handleChange}
        required
      />
      <FormInput
        label="Last Name"
        name="last_name"
        type="text"
        value={state.last_name}
        handleChange={handleChange}
        required
      />
      <FormInput
        label="email"
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
      <FormInput
        label="Phone Number"
        name="phone"
        type="phone"
        value={state.phone}
        handleChange={handleChange}
        required
      />
      <FormInput
        higherLable="Date Of Birth"
        label="Date Of Birth"
        name="dob"
        type="date"
        value={state.dob}
        handleChange={handleChange}
        required
      />
      <FormInput
        higherLable="Gender"
        label="Male"
        name="gender"
        type="radio"
        value="m"
        checked={state.gender === "m"}
        handleChange={handleChange}
        required
      />
      <FormInput
        label="Female"
        name="gender"
        type="radio"
        value="f"
        checked={state.gender === "f"}
        handleChange={handleChange}
        required
      />
      <FormInput
        label="Others"
        name="gender"
        type="radio"
        value="o"
        checked={state.gender === "o"}
        handleChange={handleChange}
        required
      />
      <FormInput
        label="Address"
        name="address"
        type="text"
        value={state.address}
        handleChange={handleChange}
        required
      />
      <CustomButton onClick={handleSubmit}>Register</CustomButton>
    </Content>
  );
}

export default Register;
