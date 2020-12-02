

import React, {useEffect, useState} from 'react'

import SidebarChat from './SidebarChat';

import db from '../firebase';


function SidebarChats() {
	const [chats, setChats] = useState([]);


	useEffect(() => {
		db.collection('chats').onSnapshot(snap => {
			setChats(
				snap.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}))
			)
		});
	}, []);


	return (
		<div className="sidebar__chats">
	      {chats.map(({id, chatName, chatIcon}) => {
	      	return <SidebarChat key={id} chatName={chatName} chatIcon={chatIcon} chatId={id} />
	      })}
    	</div>
	);
}

export default SidebarChats;