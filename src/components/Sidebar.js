
import React from 'react';
import './Sidebar.css';


import SidebarHeader from './SidebarHeader';
import SidebarChats from './SidebarChats';


function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarHeader />
      <SidebarChats />
    </aside>
  );
}

export default Sidebar;
