// contexts/UserContext.js
import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export function useUser() {
	return useContext(UserContext);
}

export function UserProvider({ children }) {
	const [user, setUser] = useState(null);

	const value = {
		user,
		setUser,
	};

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
}