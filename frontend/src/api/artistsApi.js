import axios from "axios";
import { apiLink } from "./../utils/Config";

export const fetchArtistById = async (ArtistId) => {
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.get(`${apiLink}artists/${ArtistId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken,
      },
    });
    // console.log("artist");
    //   setArtist(res.data);
    return res.data;
    // console.log(res.data);
  } catch (err) {
    console.log(err.response);
    throw err.response.data;
  }
};

export const fetchAllArtists = async () => {
  //   console.log("get artists");
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.get(`${apiLink}artists`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken,
      },
    });
    // console.log(res.data);
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
    //   setArtists(res.data);
    return res.data;
  } catch (err) {
    console.log(err.response.status);
    throw err.response.data;
  }
};

export const deleteArtist = async (id) => {
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.delete(`${apiLink}artists/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken,
      },
    });
    return res.data;
    // console.log(res.data);
  } catch (err) {
    console.log(err.response.status);
    throw err.response.data;
  }
};

export const updateArtist = async (artist, id) => {
  //   console.log("id", id);
  artist = JSON.stringify(artist);
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.put(`${apiLink}artists/` + id, artist, {
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

export const addArtist = async (artist) => {
  artist = JSON.stringify(artist);
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.post(`${apiLink}artists`, artist, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken,
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err.response.data;
  }
};
