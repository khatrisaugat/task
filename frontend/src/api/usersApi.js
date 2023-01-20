import axios from "axios";

export const fetchAllUsers = async () => {
  console.log("get users");
  const getToken = localStorage.getItem("token");
  try {
    const res = await axios.get("http://localhost:5000/api/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err.response);
    if (err.response.status === 401) {
      console.log("401");
      return { error: "Unauthorized" };
    }
  }
};

export const deleteUser = async (id) => {
  const getToken = localStorage.getItem("token");
  try {
    const res = await axios.delete(`http://localhost:5000/api/users/${id}`, {
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
      return { error: "Unauthorized" };
    }
  }
};
