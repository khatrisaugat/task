import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Table from "../../components/Table/table";
import CustomButton from "../../components/CustomButton/custom-button";
import { AiOutlineUserAdd } from "react-icons/ai";
import EditMusic from "./editMusic";

function Artists() {
  const { ArtistId } = useParams();
  const [artist, setArtist] = useState({});
  const navigate = useNavigate();
  const [musics, setArtists] = useState([]);
  const [editMusic, setEditArtist] = useState({});
  const [isAddModel, setIsAddModel] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(data) {
    console.log(data);
    setEditArtist(data);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleDelete = async (data) => {
    console.log(data);
    const getToken = localStorage.getItem("token");
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/musics/${data.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken,
          },
        }
      );
      console.log(res.data);
      getMusics();
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  };

  const handleAdd = () => {
    setIsAddModel(true);
    setIsOpen(true);
  };

  const getMusics = useCallback(async () => {
    setIsAddModel(false);
    console.log("get musics");
    const getToken = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:5000/api/musics/artist/${ArtistId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken,
          },
        }
      );
      console.log(res.data);
      if (res.data[0].dob) {
        res.data.forEach((artist) => {
          artist.dob =
            new Date(artist.dob).getFullYear() +
            "-" +
            (new Date(artist.dob).getMonth() + 1) +
            "-" +
            new Date(artist.dob).getDate();
        });
      }
      console.log(res.data);
      setArtists(res.data);
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  }, [navigate, ArtistId]);
  const getArtist = useCallback(async () => {
    const getToken = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:5000/api/artists/${ArtistId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken,
          },
        }
      );
      console.log("artist");
      setArtist(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  }, [navigate, ArtistId]);
  useEffect(() => {
    getArtist();
    getMusics();
  }, [getMusics, getArtist]);
  return (
    <div className="HomeContainer">
      <Sidebar />
      <div className="BodySection">
        <Header />
        <div className="container">
          <CustomButton inverted onClick={handleAdd}>
            <AiOutlineUserAdd />
            Add Music
          </CustomButton>
          <h1>{artist.name}</h1>
          <Table
            dataSet={musics}
            handleDelete={handleDelete}
            handleEdit={openModal}
          />
          {modalIsOpen && (
            <EditMusic
              openModal={modalIsOpen}
              closeModal={closeModal}
              data={editMusic}
              isAddModel={isAddModel}
              isUpdated={getMusics}
              artistId={ArtistId}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Artists;
