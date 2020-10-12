

import React from 'react';
import './SidebarChat.css';

import {useChat} from '../context/ChatContext';


function SidebarChat( {chatId, chatName} ) {
  const {chageChat} = useChat();


  const hundleSetChat = () => {
    chageChat(chatId, chatName)
  }


  return (
    <article className="sidebarChat" onClick={hundleSetChat}>
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHhp1kPxEFj4A/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=kIm3hZSOakfLVnRQJFeHpW4WtXfVTT3fxuDL3DD2g9Q" alt="" className="sidebarChat__avatar"/>

      <div className="sidebarChat__content">
        <h3 className="sidebarChat__name">{chatName}</h3>
        <p className="sidebarChat__lastmessage">Last message</p>
        <span className="sidebarChat__timestamp">1 minute</span>
      </div>
    </article>
  );
}

export default SidebarChat;
