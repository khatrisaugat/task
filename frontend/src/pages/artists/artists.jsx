import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "../../components/Table/table";

function Artists() {
  const navigate = useNavigate();
  const [artists, setArtists] = useState([]);
  const getArtists = useCallback(async () => {
    console.log("get artists");
    const getToken = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:5000/api/artists", {
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken,
        },
      });
      console.log(res.data);
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
      setArtists(res.data);
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  }, [navigate]);
  useEffect(() => {
    getArtists();
  }, [getArtists]);
  return (
    <div className="HomeContainer">
      <Sidebar />
      <div className="BodySection">
        <Header />
        <div className="container">
          <Table dataSet={artists} />
        </div>
      </div>
    </div>
  );
}

export default Artists;
