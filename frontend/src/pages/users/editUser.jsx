import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import FormInput from "../../components/FormInput/form-input";
import CustomButton from "../../components/CustomButton/custom-button";
import { Wrapper, Content } from "./users.styles";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { updateUser } from "../../api/usersApi";

Modal.setAppElement("#root");

function EditUser({ openModal, closeModal, data, isUpdated }) {
  const [error, setError] = useState("");
  // console.log(data);

  useEffect(() => {
    data.action && delete data.action;
    setState(data);
  }, [data]);

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "m",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };

  const handleSubmit = async (event) => {
    const user = await updateUser(state, data.id);
    if (user[0]) {
      // console.log(user[0]);
      isUpdated(true);
      closeModal();
    } else if (user.error) {
      setError(user.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <Wrapper>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        className="modal"
        contentLabel="Example Modal"
      >
        <CustomButton closeButton onClick={closeModal}>
          <AiOutlineClose />
        </CustomButton>
        <p className="error">{error}</p>
        <Content className="no-scroll">
          <h1>Edit User Details</h1>
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
            type="last_name"
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
          <CustomButton onClick={handleSubmit}>Update</CustomButton>
        </Content>
        <FaArrowDown className="blinkAnimation" />
      </Modal>
    </Wrapper>
  );
}

export default EditUser;
