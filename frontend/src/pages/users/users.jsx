import React, { useState, useEffect, useCallback } from "react";
import Table from "../../components/Table/table";
import axios from "axios";
import EditUser from "./editUser";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({});

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(data) {
    console.log(data);
    setEditUser(data);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const getUsers = useCallback(async () => {
    console.log("get users");
    const getToken = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:5000/api/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken,
        },
      });
      console.log("res");

      console.log(res.data);
      setUsers(res.data);
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  }, [navigate]);
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="HomeContainer">
      <Sidebar />
      <div className="BodySection">
        <Header />
        <div className="container">
          <Table dataSet={users} handleEdit={openModal} />
          <EditUser
            openModal={modalIsOpen}
            closeModal={closeModal}
            data={editUser}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;
