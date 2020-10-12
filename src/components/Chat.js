


import React from 'react';
import './Chat.css';

import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';



function Chat() {
  return (
    <section className="chat">  
      <ChatHeader />
      <ChatMessages />
      <ChatInput />      
    </section>
  );
}

export default Chat;
