

import React from 'react';
import './SidebarChat.css';

import {useChat} from '../context/ChatContext';


function SidebarChat( {chatId, chatName, chatIcon} ) {
  const {chageChat} = useChat();


  const hundleSetChat = () => {
    chageChat(chatId, chatName)
  }


  return (
    <article className="sidebarChat" onClick={hundleSetChat}>
      <img src={chatIcon ? chatIcon : "https://www.praxisapr.com/images/unisex-avatar.png"} alt="Chat icon" title={chatName} className="sidebarChat__avatar"/>

      <div className="sidebarChat__content">
        <h3 className="sidebarChat__name">{chatName}</h3>
        <p className="sidebarChat__lastmessage">Last message</p>
        <span className="sidebarChat__timestamp"></span>
      </div>
    </article>
  );
}

export default SidebarChat;
