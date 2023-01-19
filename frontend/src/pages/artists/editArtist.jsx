import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import FormInput from "../../components/FormInput/form-input";
import CustomButton from "../../components/CustomButton/custom-button";
import { Wrapper, Content } from "../users/users.styles";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import axios from "axios";

Modal.setAppElement("#root");

function EditArtist({ openModal, closeModal, data, isUpdated, isAddModel }) {
  const [error, setError] = useState("");
  useEffect(() => {
    if (!isAddModel) {
      data.action && delete data.action;
      setState(data);
    }
  }, [isAddModel, data]);
  const [state, setState] = useState({
    name: "",
    dob: "",
    gender: "m",
    first_release_year: "",
    no_of_albums_released: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  const updateUser = async (user, id) => {
    console.log("id", id);
    const getToken = localStorage.getItem("token");
    user = JSON.stringify(user);
    try {
      const res = await axios.put(
        "http://localhost:5000/api/artists/" + id,
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken,
          },
        }
      );
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
      return err.response.data;
    }
  };

  const addArtist = async (artist) => {
    const getToken = localStorage.getItem("token");
    artist = JSON.stringify(artist);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/artists",
        artist,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken,
          },
        }
      );
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
      return err.response.data;
    }
  };

  const handleSubmit = async (event) => {
    const user = await updateUser(state, data.id);
    if (user[0]) {
      console.log(user[0]);
      isUpdated(true);
      closeModal();
    } else if (user.error) {
      setError(user.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const handleAdd = () => {
    const artist = addArtist(state);
    if (artist) {
      console.log(artist);
      isUpdated(true);
      closeModal();
    } else if (artist.error) {
      setError(artist.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

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
        <p className="error">{error}</p>
        <Content className="no-scroll">
          <h1>{isAddModel ? "Add Artist" : "Edit Artist Details"}</h1>
          <FormInput
            label="Name"
            name="name"
            type="text"
            value={state.name}
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
            label="First release year"
            name="first_release_year"
            type="number"
            min="1900"
            max={new Date().getFullYear().toString()}
            step="1"
            value={`${state.first_release_year}`}
            handleChange={handleChange}
            required
          />

          <FormInput
            label="Number of albums released"
            name="no_of_albums_released"
            type="number"
            value={`${state.no_of_albums_released}`}
            handleChange={handleChange}
            required
          />
          {isAddModel ? (
            <CustomButton onClick={handleAdd}>Add</CustomButton>
          ) : (
            <CustomButton onClick={handleSubmit}>Update</CustomButton>
          )}
        </Content>
        <FaArrowDown className="blinkAnimation" />
      </Modal>
    </Wrapper>
  );
}

export default EditArtist;
