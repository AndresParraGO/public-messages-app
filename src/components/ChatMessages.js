


import React, {useState, useEffect} from 'react';
import './ChatMessages.css';
import db from '../firebase';

import Msg from './Msg';

import {useChat} from '../context/ChatContext';



function ChatMessages() {
	const [messages, setMessages] = useState([]);
  const {chatId} = useChat();


  useEffect(() => {
    if(chatId) {     
    	db.collection("chats").doc(chatId).collection("messages")
  			.orderBy("timestamp", "desc")
        .onSnapshot(snap => 
          setMessages(
            snap.docs.map(doc => [{data: doc.data(), id: doc.id}] )
          )
        )
    }
  }, [chatId]);


  


  return (
    <div className="chat__messages">
      {
        messages.map(msg => {
          return <Msg key={msg[0].id} id={msg[0].id} content={msg[0].data} />
        })
      }
    </div>
  );
}

export default ChatMessages;
