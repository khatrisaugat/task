import axios from "axios";
import { apiLink } from "./../utils/Config";

export const fetchAllUsers = async () => {
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.get(`${apiLink}users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken,
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err.response);
    if (err.response.status === 401) {
      console.log("401");
    }
    throw err.response.data;
  }
};

export const deleteUser = async (id) => {
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.delete(`${apiLink}users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken,
      },
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response.status);
    if (err.response.status === 401) {
      console.log("401");
      console.log(err.response.data);
    }
    throw err.response.data;
  }
};

export const updateUser = async (user, id) => {
  user = JSON.stringify(user);
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.put(`${apiLink}users/${id}`, user, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken,
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err.response.data);
    throw err.response.data;
  }
};

export const getCurrentUser = async () => {
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.get(`${apiLink}users/current`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken,
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err.response);
    throw err.response.data;
  }
};
