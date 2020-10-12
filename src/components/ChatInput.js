

import React, {useState} from 'react';
import './ChatInput.css';

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useChat} from '../context/ChatContext';



function ChatInput() {
  const [inputMsg, setInputMsg] = useState("");
  const {chatId, chatName} = useChat();


  const sendMessage = () => {
  	
  }

	// Send Message
  // const sendMessage = (e) => {
  //   e.preventDefault();

  //   if(chatId) {
  //     db.collection("chats").doc(chatId).collection("messages").add({
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //       message: inputMsg,
  //       uid: user.uid,
  //       photo: user.photo,
  //       email: user.email,
  //       displayName: user.displayName
  //     });
  //   }

  //   setInputMsg(e.target.value);
  // }

  return (
    <article className="chat__input">
      <input 
      	type="text" 
      	placeholder="Write..." 
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
