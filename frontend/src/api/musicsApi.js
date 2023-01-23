import axios from "axios";
import { apiLink } from "./../utils/Config";

export const fetchMusicsFromArtist = async (ArtistId) => {
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.get(`${apiLink}musics/artist/${ArtistId}`, {
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
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err.response);
    throw err.response.data;
  }
};

export const deleteMusic = async (id) => {
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.delete(`${apiLink}musics/${id}`, {
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
export const addMusic = async (music) => {
  music = JSON.stringify(music);
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.post(`${apiLink}musics`, music, {
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

export const updateMusic = async (music, id) => {
  music = JSON.stringify(music);
  try {
    const getToken = localStorage.getItem("token");
    const res = await axios.put(`${apiLink}musics/` + id, music, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken,
      },
    });
    // console.log(res.data);
    // if (res.data.success) {
    //   localStorage.setItem("token", res.data.token);
    // }
    return res.data;
  } catch (err) {
    // console.log(err.response.data);
    throw err.response.data;
  }
};
