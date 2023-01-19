import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "../../components/Table/table";
import EditArtist from "./editArtist";
import CustomButton from "../../components/CustomButton/custom-button";
import { AiOutlineUserAdd } from "react-icons/ai";

function Artists() {
  const navigate = useNavigate();
  const [artists, setArtists] = useState([]);
  const [editArtist, setEditArtist] = useState({});
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
        `http://localhost:5000/api/artists/${data.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getToken,
          },
        }
      );
      console.log(res.data);
      getArtists();
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

  const getArtists = useCallback(async () => {
    setIsAddModel(false);
    console.log("get artists");
    const getToken = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:5000/api/artists", {
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken,
        },
      });
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
      console.log(err.response.status);
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  }, [navigate]);
  useEffect(() => {
    getArtists();
  }, [getArtists]);
  return (
    <div className="HomeContainer">
      <Sidebar />
      <div className="BodySection">
        <Header />
        <div className="container">
          <CustomButton inverted onClick={handleAdd}>
            <AiOutlineUserAdd />
            Add Artist
          </CustomButton>
          <Table
            dataSet={artists}
            handleDelete={handleDelete}
            handleEdit={openModal}
          />
          {modalIsOpen && (
            <EditArtist
              openModal={modalIsOpen}
              closeModal={closeModal}
              data={editArtist}
              isAddModel={isAddModel}
              isUpdated={getArtists}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Artists;
