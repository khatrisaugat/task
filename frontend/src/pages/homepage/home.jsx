import React from "react";
import Header from "../../components/Header/header";
import Sidebar from "../../components/Sidebar/sidebar";
function Home() {
  return (
    <div className="HomeContainer">
      <Sidebar />
      <div className="BodySection">
        <Header />
        <div className="container">
          <h1>Welcome to Dashboard</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
