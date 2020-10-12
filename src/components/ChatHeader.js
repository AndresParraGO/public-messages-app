

import React from 'react';
import './ChatHeader.css';

import {useChat} from '../context/ChatContext';


function ChatHeader() {
  const {chatName} = useChat();

  return (
    <header className="chat__header">
      <p>To: {chatName}</p>
      <strong>Details</strong>
    </header>
  );
  
}

export default ChatHeader;

