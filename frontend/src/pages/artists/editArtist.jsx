import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import FormInput from "../../components/FormInput/form-input";
import CustomButton from "../../components/CustomButton/custom-button";
import { Wrapper, Content } from "../users/users.styles";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { updateArtist, addArtist } from "../../api/artistsApi";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";

Modal.setAppElement("#root");

const ModalWithSpnner = WithSpinner(Modal);

function EditArtist({ openModal, closeModal, data, isUpdated, isAddModel }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!isAddModel) {
      data.action && delete data.action;
      data.custom && delete data.custom;
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

  const handleSubmit = async (event) => {
    setIsLoading(true);
    try {
      const user = await updateArtist(state, data.id);
      if (user[0]) {
        console.log(user[0]);
        isUpdated(true);
        closeModal();
        setIsLoading(false);
      } else if (user.error) {
        setError(user.error);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const handleAdd = async () => {
    setIsLoading(true);
    try {
      const artist = await addArtist(state);
      if (artist) {
        console.log(artist);
        isUpdated(true);
        setIsLoading(false);
        closeModal();
      } else if (artist.error) {
        setError(artist.error);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsLoading(false);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <Wrapper>
      <ModalWithSpnner
        isOpen={openModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="modal"
        contentLabel="Example Modal"
      >
        <CustomButton closeButton onClick={closeModal}>
          <AiOutlineClose />
        </CustomButton>
        <div className={error ? `error` : null}>{error}</div>
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
            <CustomButton onClick={handleAdd} isLoading={isLoading}>
              Add
            </CustomButton>
          ) : (
            <CustomButton onClick={handleSubmit} isLoading={isLoading}>
              Update
            </CustomButton>
          )}
        </Content>
        <FaArrowDown className="blinkAnimation" />
      </ModalWithSpnner>
    </Wrapper>
  );
}

export default EditArtist;
