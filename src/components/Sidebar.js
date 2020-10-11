
import React from 'react';
import './Sidebar.css';


import SidebarHeader from './SidebarHeader';
import SidebarChat from './SidebarChat';


function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarHeader />

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </aside>
  );
}

export default Sidebar;
