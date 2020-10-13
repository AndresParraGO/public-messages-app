

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
      <img src="https://www.praxisapr.com/images/unisex-avatar.png" alt="" className="sidebarChat__avatar"/>

      <div className="sidebarChat__content">
        <h3 className="sidebarChat__name">{chatName}</h3>
        <p className="sidebarChat__lastmessage">Last message</p>
        <span className="sidebarChat__timestamp">1 minute</span>
      </div>
    </article>
  );
}

export default SidebarChat;
