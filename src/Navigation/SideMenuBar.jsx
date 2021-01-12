import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {NavBarContext} from "../ContextProviders/NavigationContext.jsx";
import { NatalieJonesProfile } from "../FE_SampleData/SampleMembers.jsx";

import "foundation-sites/dist/css/foundation.min.css";
import "./SideMenuBar.css";

const SideMenuBar = () => {
  const {onClick} = useContext(NavBarContext);
  return (
    <div
      className="off-canvas position-right"
      id="offCanvasRight"
      data-off-canvas=""
      data-transition="overlap"
    >
      <ul className="menu vertical sidemenu">
        <li>
          <div className="UserProfileImgContainer">
            <img
              className="UserProfileImg"
              src={NatalieJonesProfile.profileImg}
              alt="sampleProfileImage"
            />
          </div>
        </li>
        <li onClick={() => onClick(null)} data-close="">
          <Link to="/profile">My Profile</Link>
        </li>
        <li onClick={() => onClick(null)} data-close="">
          <Link to="/messsages">Messages</Link>
        </li>
        <li onClick={() => onClick(null)} data-close="">
          <Link to="/">Preferences</Link>
        </li>
        <li onClick={() => onClick(null)} data-close="">
          <Link to="/">Settings</Link>
        </li>
        <li data-close="">
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
    </div>
  );
};

const SideMenuButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="46"
    height="100%"
    viewBox="0 0 46 33"
  >
    <g transform="translate(-307 -26)">
      <g className="sideMenu-a" transform="translate(307 26)">
        <rect className="sideMenu-b" width="46" height="9" rx="4.5" />
        <rect className="sideMenu-c" x="2.5" y="2.5" width="41" height="4" rx="2" />
      </g>
      <g className="sideMenu-a" transform="translate(307 50)">
        <rect className="sideMenu-b" width="46" height="9" rx="4.5" />
        <rect
          className="sideMenu-c"
          x="2.5"
          y="2.5"
          width="41"
          height="4"
          rx="2"
        />
      </g>
      <g className="sideMenu-a" transform="translate(307 38)">
        <rect className="sideMenu-b" width="46" height="9" rx="4.5" />
        <rect
          className="sideMenu-c"
          x="2.5"
          y="2.5"
          width="41"
          height="4"
          rx="2"
        />
      </g>
    </g>
  </svg>
);

export default SideMenuBar;
export { SideMenuButton };
