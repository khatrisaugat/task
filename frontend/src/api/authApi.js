import axios from "axios";
import { apiLink } from "./../utils/Config";

export const loginUser = async (user) => {
  console.log(user);
  user = JSON.stringify(user);
  try {
    const res = await axios.post(`${apiLink}users/login`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const registerUser = async (user) => {
  console.log(user);
  user = JSON.stringify(user);
  try {
    const res = await axios.post(`${apiLink}users/register`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};
