import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import FormInput from "../../components/FormInput/form-input";
import CustomButton from "../../components/CustomButton/custom-button";
import { Wrapper, Content } from "../users/users.styles";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { addMusic, updateMusic } from "../../api/musicsApi";

Modal.setAppElement("#root");

function EditMusic({
  openModal,
  closeModal,
  data,
  isUpdated,
  artistId,
  isAddModel,
}) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // console.log(data);
  const [state, setState] = useState({
    title: "",
    album_name: "",
    genre: "",
    artist_id: artistId,
  });

  useEffect(() => {
    if (!isAddModel) {
      data.action && delete data.action;
      setState(data);
    }
  }, [data, isAddModel]);

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
    // console.log("state", state);
    const music = await updateMusic(state, data.id);
    if (music[0]) {
      console.log(music[0]);
      isUpdated(true);
      setIsLoading(false);
      closeModal();
    } else if (music.error) {
      setError(music.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const handleAdd = async () => {
    setIsLoading(true);
    const music = await addMusic(state);
    console.log(music);
    if (music) {
      console.log(music);
      isUpdated(true);
      setIsLoading(false);
      closeModal();
    } else if (music.error) {
      setError(music.error);
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
          <h1>{isAddModel ? `Add Music` : `Edit Music Details`}</h1>
          <FormInput
            label="Music Title"
            name="title"
            type="text"
            value={state.title}
            handleChange={handleChange}
            required
          />
          <FormInput
            label="Album Name"
            name="album_name"
            type="text"
            value={state.album_name}
            handleChange={handleChange}
            required
          />
          <FormInput
            label="Genre"
            name="genre"
            type="text"
            value={state.genre}
            handleChange={handleChange}
            selectOptions={["jazz", "rnb", "country", "classic", "rock"]}
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
      </Modal>
    </Wrapper>
  );
}

export default EditMusic;
