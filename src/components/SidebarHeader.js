


import React from 'react';

function SidebarHeader() {
  return (
    <header className="sidebar__header">
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHhp1kPxEFj4A/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=kIm3hZSOakfLVnRQJFeHpW4WtXfVTT3fxuDL3DD2g9Q" className="sidebar__header__avatar" alt="" />

      <div className="sidebar__header__search">
        <input type="text" placeholder="Search" />
      </div>

      <img src="" className="sidebar__header__addchat" alt="" />
    </header>
  );
}

export default SidebarHeader;
