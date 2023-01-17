import React from "react";
import Header from "../../components/Header/header";
import Sidebar from "../../components/Sidebar/sidebar";
import Users from "../../components/Users/users";
import { BodySection, HomeContainer } from "./home.styles";
function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <BodySection>
        <Header />
        <Users />
      </BodySection>
    </HomeContainer>
  );
}

export default Home;
