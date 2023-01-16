import React, { useState } from "react";
import { Content } from "./register.styles";
import FormInput from "./../FormInput/form-input";
import CustomButton from "../CustomButton/custom-button";

function Register() {
  const get18YearsAgo = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date.toISOString().split("T")[0];
  };
  console.log(get18YearsAgo());
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
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
  return (
    <Content className="no-scroll">
      <h2>Register User</h2>
      <FormInput
        label="First Name"
        name="firstName"
        type="text"
        value={state.firstName}
        handleChange={handleChange}
        required
      />
      <FormInput
        label="Last Name"
        name="lastName"
        type="password"
        value={state.lastName}
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
      <CustomButton>Register</CustomButton>
    </Content>
  );
}

export default Register;
