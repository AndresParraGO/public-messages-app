


import React from 'react';
import './SidebarHeader.css';

import { faSearch, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SidebarHeader() {
  return (
    <header className="sidebar__header">
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHhp1kPxEFj4A/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=kIm3hZSOakfLVnRQJFeHpW4WtXfVTT3fxuDL3DD2g9Q" className="sidebar__header__avatar" alt="" />

      <div className="sidebar__header__search">
        <FontAwesomeIcon icon={faSearch} color="#ccc" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="sidebar__header__addchat">
        <FontAwesomeIcon icon={faPlusSquare} color="#ccc" />
      </div>
    </header>
  );
}

export default SidebarHeader;
