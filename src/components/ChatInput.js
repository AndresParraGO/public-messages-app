

import React, {useState} from 'react';
import firebase from 'firebase';
import db from '../firebase';
import './ChatInput.css';

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useChat} from '../context/ChatContext';
import {useUser} from '../context/UserContext';



function ChatInput() {
  const [inputMsg, setInputMsg] = useState("");
  const {chatId, chatName} = useChat();
  const {user} = useUser();


	// Send Message
  const sendMessage = (e) => {
    e.preventDefault();

    if(chatId) {
      db.collection("chats").doc(chatId).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: inputMsg,
        uid: user.uid,
        photo: user.photo,
        email: user.email,
        displayName: user.displayName
      });
    }

    setInputMsg(e.target.value);
    setInputMsg('');
  }

  return (
    <article className="chat__input">
      <input 
      	type="text" 
      	placeholder="Write..." 
        onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : false}
      	value={inputMsg}
				onChange={(e) => setInputMsg(e.target.value)}
    	/>
      <button type="submit" onClick={sendMessage}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </article>
  );
}

export default ChatInput;
