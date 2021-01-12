import React, { useContext } from "react";
import { NavBarContext } from "../ContextProviders/NavigationContext.jsx";
import MenuButtons from "./MenuButtons.jsx";
import { SideMenuButton } from "./SideMenuBar.jsx";
import { Link } from "react-router-dom";

import "foundation-sites/dist/css/foundation.min.css";
import "./NavBar.css";

const NavBar = () => {
  const { menuIcons, onClick } = useContext(NavBarContext);
  return (
    <div data-sticky-container>
      <div
        className="mainmenu top-bar stacked-for-medium"
        data-sticky=""
        data-options="marginTop:0;"
        style={{ width: "100%" }}
      >
        <div className="top-bar-left">
          <ul className="menu" role="menubar">
            <li className="menu-text">{"Link & Ink"}</li>
            {menuIcons.map((icon, id) => (
              <MenuButtons
                key={id}
                icon={icon}
                id={id}
                onClick={() => onClick(id)}
              />
            ))}
            <li className="admin" onClick={() => onClick(null)}>
              <Link to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <button
                className="sideMenu"
                type="button"
                data-toggle="offCanvasRight"
              >
                <SideMenuButton />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
