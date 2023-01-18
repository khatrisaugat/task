import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import FormInput from "../FormInput/form-input";
import CustomButton from "../CustomButton/custom-button";
import { Wrapper, Content } from "./users.styles";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
Modal.setAppElement("#root");

function EditUser({ openModal, closeModal, data }) {
  console.log(data);
  useEffect(() => {
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
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  return (
    <Wrapper>
      <Modal
        isOpen={openModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="modal"
        contentLabel="Example Modal"
      >
        <CustomButton closeButton onClick={closeModal}>
          <AiOutlineClose />
        </CustomButton>
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
          <CustomButton>Update</CustomButton>
        </Content>
        <FaArrowDown className="blinkAnimation" />
      </Modal>
    </Wrapper>
  );
}

export default EditUser;
