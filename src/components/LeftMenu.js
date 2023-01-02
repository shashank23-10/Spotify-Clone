import React from "react";
import "../styles/leftmenu.css";

import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

function LeftMenu() {
  return (
    <div className="LeftMenu">
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search here.." />
        <i className="search-icon">
          <BiSearchAlt />
        </i>
      </div>
    </div>
  );
}

export { LeftMenu };
