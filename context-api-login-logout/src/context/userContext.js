import { createContext, useContext, useState } from "react";

export const userContext = createContext({
    user: null,
    login: () => {},
    logout: () => {}
});

const USER = {
    name: "Guest",
    isGuestUser: true
}

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(USER);
    function login(username) {
        setUser({isGuestUser: false, name: username})
    }
    function logout() {
        setUser(USER)
    }
    return (
        <userContext.Provider value={{user, login, logout}}>
            {children}
        </userContext.Provider>
    );
}

export function useUserContext() {
    const {user, login, logout} = useContext(userContext);
    return {user, login, logout};
}

