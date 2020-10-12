

import React, {useState} from 'react';

import {auth, provider} from '../firebase';


function Login() {

	const signIn = () => {
		auth.signInWithPopup(provider)
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<h1>Login</h1>

			<button onClick={signIn}>Sign In</button>
		</div>
	);
}

export default Login;