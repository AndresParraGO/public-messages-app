

import React, {useState} from 'react';
import './Login.css';

import {auth, provider} from '../firebase';


function Login() {

	const signIn = () => {
		auth.signInWithPopup(provider)
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div className="login">
			<img className="login__img" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fxenatt%2Fthe-circle%2F512%2FApp-Messages-icon.png&f=1&nofb=1" alt="Logo Public Messages" />
			<h1 className="login__title">Login</h1>

			<button className="login__btn" onClick={signIn}>Sign In</button>

			<span className="login__copy">Hecho con 💛 por <a href="https://andresparra.vercel.app/" target="_blank">Andrés Parra</a></span>
		</div>
	);
}

export default Login;