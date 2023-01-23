import React, { useState } from "react";
import { Content } from "./register.styles";
import FormInput from "./../FormInput/form-input";
import CustomButton from "../CustomButton/custom-button";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authApi";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    try {
      const data = await registerUser(state);
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
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <Content className="no-scroll">
      <h1>Register User</h1>

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
      <div className={error ? `error` : null}>{error}</div>
      <CustomButton onClick={handleSubmit} isLoading={isLoading}>
        Register
      </CustomButton>
    </Content>
  );
}

export default Register;
