import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/table";
import EditArtist from "./editArtist";
import CustomButton from "../../components/CustomButton/custom-button";
import { AiOutlineUserAdd, AiOutlineSound } from "react-icons/ai";
import { fetchAllArtists, deleteArtist } from "../../api/artistsApi";
import { WithSpinner } from "./../../components/with-spinner/with-spinner.component";

const TableWithSpinner = WithSpinner(Table);

function Artists() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [updateTable, setUpdateTable] = useState(false);
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
    if (!window.confirm("Are you sure you want to delete this artist?")) {
      return;
    }
    setIsLoading(true);
    console.log(data);
    deleteArtist(data.id);
    setUpdateTable(!updateTable);
  };

  const handleAdd = () => {
    setIsAddModel(true);
    setIsOpen(true);
  };

  const getArtists = async () => {
    setIsAddModel(false);
    const res = await fetchAllArtists();
    setArtists(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getArtists();
  }, [updateTable]);

  const CustomButtonRender = (id) => {
    return (
      <CustomButton onClick={() => navigate("/musics/" + id)} view>
        <AiOutlineSound />
        Musics
      </CustomButton>
    );
  };
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
          <TableWithSpinner
            dataSet={artists}
            handleDelete={handleDelete}
            handleEdit={openModal}
            customRowComponent={CustomButtonRender}
            isLoading={isLoading}
          />
          {modalIsOpen && (
            <EditArtist
              openModal={modalIsOpen}
              closeModal={closeModal}
              data={editArtist}
              isAddModel={isAddModel}
              isUpdated={() => setUpdateTable(!updateTable)}
              isLoading={(loading) => setIsLoading(loading)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Artists;
