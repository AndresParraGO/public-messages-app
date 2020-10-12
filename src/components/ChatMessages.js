


import React, {useState, useEffect} from 'react';
import db from '../firebase';


import {useChat} from '../context/ChatContext';


function ChatMessages() {
	const [messages, setMessages] = useState([]);
  const {chatId, chatName} = useChat();


  useEffect(() => {
    if(chatId) {     
    	db.collection("chats").doc(chatId).collection("messages")
    		.onSnapshot(snap => {
    			setMessages(
    				snap.forEach(doc => {doc.data()})
    			)
    		});
    }
  }, [chatId]);


  


  return (
    <div className="chat__messages">

    </div>
  );
}

export default ChatMessages;
