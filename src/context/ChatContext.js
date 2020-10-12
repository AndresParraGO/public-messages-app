

import React, {useState, useMemo} from 'react';

const ChatContext = React.createContext();


export function ChatProvider(props) {
	const [chatId, setChatId] = useState(null);
	const [chatName, setChatName] = useState(null);

	const chageChat = (chatId, chatName) => {
		setChatId(chatId);
		setChatName(chatName);
	}


	const value = useMemo(() => {
		return({
			chatId,
			chatName,
			chageChat
		});
	}, [chatId, chatName]);

	return <ChatContext.Provider value={value} {...props} />
}


export function useChat() {
	const context = React.useContext(ChatContext);

	if(!context) {
		throw new Error("error");
	} 

	return context;
}