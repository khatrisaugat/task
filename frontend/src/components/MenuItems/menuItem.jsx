import React from "react";
import { MenuItemContent, MenuTitle } from "./menuItem.styles";
import { NavLink } from "react-router-dom";
import { withRouter } from "../../utils/with-router";
const navStyles = {
  textDecoration: "none",
  color: "#fff",
};
const activeStyle = {
  textDecoration: "none",
};

function MenuItem({ title, icon, router }) {
  console.log(router.location.pathname.toString() === "/" + title);
  const isActive = router.location.pathname.toString() === "/" + title;
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

export default withRouter(MenuItem);
