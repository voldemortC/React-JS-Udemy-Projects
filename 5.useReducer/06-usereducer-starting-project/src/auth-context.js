import React from "react";
import { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout : () => {},
    onLogin : () => {},
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const LoggedInUpdated = localStorage.getItem("isLoggedIn");
        if (LoggedInUpdated === "1"){
            setIsLoggedIn(true);
        }
    })    

    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn : isLoggedIn,
                onLogout : logoutHandler,
                onLogin : loginHandler,
            }}
        >{props.children}</AuthContext.Provider>
    );
}

export default AuthContext;