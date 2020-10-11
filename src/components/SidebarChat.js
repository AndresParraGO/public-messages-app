

import React from 'react';
import './SidebarChat.css';


function SidebarChat() {
  return (
    <article className="sidebarChat">
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHhp1kPxEFj4A/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=kIm3hZSOakfLVnRQJFeHpW4WtXfVTT3fxuDL3DD2g9Q" alt="" className="sidebarChat__avatar"/>

      <div className="sidebarChat__content">
        <h3 className="sidebarChat__name">Andres Parra</h3>
        <p className="sidebarChat__lastmessage">Last message</p>
        <span className="sidebarChat__timestamp">1 minute</span>
      </div>
    </article>
  );
}

export default SidebarChat;
