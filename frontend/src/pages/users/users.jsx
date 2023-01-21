import React, { useState, useEffect } from "react";
import Table from "../../components/Table/table";
import EditUser from "./editUser";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import { fetchAllUsers, deleteUser } from "../../api/usersApi";

function Users() {
  //state for users
  const [users, setUsers] = useState([]);
  const [updateTable, setUpdateTable] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(data) {
    setEditUser(data);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //get Users from api
  const getUsers = async () => {
    const res = await fetchAllUsers();
    // console.log(res);
    setUsers(res);
  };

  //run on every update
  useEffect(() => {
    getUsers();
  }, [updateTable]);

  const handleDelete = async (data) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    // console.log(data);
    deleteUser(data.id);
    setUpdateTable(!updateTable);
  };

  return (
    <div className="HomeContainer">
      <Sidebar />
      <div className="BodySection">
        <Header />
        <div className="container">
          <Table
            dataSet={users}
            handleEdit={openModal}
            handleDelete={handleDelete}
          />
          {modalIsOpen && (
            <EditUser
              openModal={modalIsOpen}
              closeModal={closeModal}
              data={editUser}
              isUpdated={() => setUpdateTable(!updateTable)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
