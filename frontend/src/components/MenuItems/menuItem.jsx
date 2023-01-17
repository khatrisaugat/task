import React from "react";
import { MenuItemContent, MenuTitle } from "./menuItem.styles";

function MenuItem({ title, icon }) {
  return (
    <MenuItemContent>
      <div className="menuIcon">
        <i className="fas fa-home"></i>
      </div>
      <MenuTitle>{title}</MenuTitle>
    </MenuItemContent>
  );
}

export default MenuItem;
