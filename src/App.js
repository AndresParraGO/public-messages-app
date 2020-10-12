import React, {useState, useEffect} from 'react';
import './App.css';

import MessageApp from './components/MessageApp';
import Login from './components/Login';

import {ChatProvider} from './context/ChatContext';
import {UserProvider,useUser} from './context/UserContext';

import {auth, provider} from './firebase';

export default () => <UserProvider>
	<ChatProvider>
		<App></App>
	</ChatProvider>
</UserProvider>;


function App() {
	const {user, login, logout} = useUser();

	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			if(authUser) {
				// logged in
				login({
					uid: authUser.uid,
					photo: authUser.photoURL,
					email: authUser.email,
					displayName: authUser.displayName
				})
			} else {
				// logged out
				logout();
			}
		});
	}, []);

  return (
	  <div className="App">
	    {
	    	user ? <MessageApp /> : <Login />
	    }
	  </div>
  );
}

