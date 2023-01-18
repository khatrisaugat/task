import React, { useState, useEffect } from "react";
import { UserContainer } from "./users.styles";
import Table from "../Table/table";
import axios from "axios";
import EditUser from "./editUser";

function Users() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(data) {
    setEditUser(data);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJSb25hbGRAd29ybGQiLCJpYXQiOjE2NzM5NjM4NDcsImV4cCI6MTY3NDA1MDI0N30.dhC5Ln-XgXD6af5Vif16WesCzkctchiCVbVBo0Ws64o",
      },
    });
    if (res.data[0].dob) {
      res.data.forEach((user) => {
        user.dob = user.dob.slice(0, 10);
      });
    }
    setUsers(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContainer>
      <Table dataSet={users} handleEdit={openModal} />

      <EditUser
        openModal={modalIsOpen}
        closeModal={closeModal}
        data={editUser}
      />
    </UserContainer>
  );
}

export default Users;
