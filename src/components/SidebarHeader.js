


import React, {useState} from 'react';
import './SidebarHeader.css';

import Modal from './Modal';

import { faSearch, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db, {auth} from '../firebase';

import {useUser} from '../context/UserContext';

function SidebarHeader() {
  const [stateModal, setStateModal] = useState(false);

  const {user} = useUser();

  // const addChat = () => {
  //   const chatName = prompt("Ingrese el nombre del nuevo chat: ");

  //   db.collection("chats").add({
  //     chatName: chatName
  //   });
  // }


  const signOut = () => {
    auth.signOut();
  } 


  return (
    <header className="sidebar__header">
      <img onClick={() => setStateModal(!stateModal)} src={user.photo} className="sidebar__header__avatar" alt="" />

      {
        stateModal 
          ? <Modal signOut={signOut}  />
          : ''
      }

      <div className="sidebar__header__search">
        <FontAwesomeIcon icon={faSearch} color="#ccc" />
        <input type="text" placeholder="Search" />
      </div>

      {/* <div className="sidebar__header__addchat" onClick={addChat}>
        <FontAwesomeIcon icon={faPlusSquare} color="#ccc" />
      </div> */}
    </header>
  );
}

export default SidebarHeader;
