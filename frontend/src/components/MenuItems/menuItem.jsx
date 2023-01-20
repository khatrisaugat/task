import React from "react";
import { MenuItemContent, MenuTitle } from "./menuItem.styles";
import { NavLink, useLocation } from "react-router-dom";
// import { withRouter } from "../../utils/with-router";
const navStyles = {
  textDecoration: "none",
  color: "#fff",
};

function MenuItem({ title, icon }) {
  const location = useLocation();
  // console.log(location.pathname.toString() === "/" + title);
  const isActive = location.pathname.toString() === "/" + title;
  return (
    <NavLink to={`/${title}`} style={navStyles}>
      <MenuItemContent className={isActive ? `activeLink` : null}>
        <div className="menuIcon">
          <i className="fas fa-home"></i>
        </div>
        <MenuTitle>{title}</MenuTitle>
      </MenuItemContent>
    </NavLink>
  );
}

export default MenuItem;
