

import React, {useState, useMemo} from 'react';

const UserContext = React.createContext();

export function UserProvider(props) {
	const [user, setUser] = useState(null);

	const login = (userData) => {
		setUser(userData);
	}

	const logout = () => {
		setUser(null);
	}


	const value = useMemo(() => {
		return({
			user,
			login,
			logout
		});
	}, [user]);

	return <UserContext.Provider value={value} {...props}  /> 
}


export function useUser() {
	const context = React.useContext(UserContext);

	if(!context) {
		throw new Error("error");
	} 

	return context;
}

