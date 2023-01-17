import React from "react";
import { MenuPart, SidebarContainer, HeadingPart } from "./sidebar.styles";
import MenuItem from "./../MenuItems/menuItem";

function Sidebar() {
  return (
    <SidebarContainer>
      <HeadingPart>
        <h2>ADMIN</h2>
      </HeadingPart>
      <MenuPart>
        <MenuItem title="home" />
        <MenuItem title="users" />
        <MenuItem title="artists" />
      </MenuPart>
    </SidebarContainer>
  );
}

export default Sidebar;
