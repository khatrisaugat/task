import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import { useParams } from "react-router-dom";
import Table from "../../components/Table/table";
import CustomButton from "../../components/CustomButton/custom-button";
import { AiOutlineUserAdd } from "react-icons/ai";
import EditMusic from "./editMusic";
import { fetchMusicsFromArtist, deleteMusic } from "../../api/musicsApi";
import { fetchArtistById } from "../../api/artistsApi";
import { WithSpinner } from "./../../components/with-spinner/with-spinner.component";

const TableWithSpinner = WithSpinner(Table);

function Artists() {
  const [isLoading, setIsLoading] = useState(true);
  const { ArtistId } = useParams();
  const [artist, setArtist] = useState({});
  const [updateTable, setUpdateTable] = useState(false);
  const [musics, setMusics] = useState([]);
  const [editMusic, setEditArtist] = useState({});
  const [isAddModel, setIsAddModel] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(data) {
    // console.log(data);
    setEditArtist(data);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDelete = async (data) => {
    if (!window.confirm("Are you sure you want to delete this music?")) {
      return;
    }
    setIsLoading(true);
    // console.log(data);
    deleteMusic(data.id);
    setUpdateTable(!updateTable);
  };

  const handleAdd = () => {
    setIsAddModel(true);
    setIsOpen(true);
  };

  const getMusics = async () => {
    setIsAddModel(false);
    setIsLoading(true);
    const res = await fetchMusicsFromArtist(ArtistId);
    // console.log("res", res);
    setMusics(res);
    setIsLoading(false);
  };
  const getArtist = async () => {
    const res = await fetchArtistById(ArtistId);
    setArtist(res);
  };

  useEffect(() => {
    getArtist();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getMusics();
  }, [updateTable]); // eslint-disable-line react-hooks/exhaustive-deps
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
          <TableWithSpinner
            dataSet={musics}
            handleDelete={handleDelete}
            handleEdit={openModal}
            isLoading={isLoading}
          />
          {modalIsOpen && (
            <EditMusic
              openModal={modalIsOpen}
              closeModal={closeModal}
              data={editMusic}
              isAddModel={isAddModel}
              isUpdated={() => setUpdateTable(!updateTable)}
              artistId={ArtistId}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Artists;
