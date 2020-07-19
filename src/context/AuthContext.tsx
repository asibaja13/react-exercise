import React, { createContext, useState } from "react";


type AuthProps = {
    setLogin: Function,
    username: string,
    logout: Function
}

export const AuthContext = createContext<Partial<AuthProps>>({});

export const AuthProvider = (props: any) => {
    const [username, setLogin] = useState('');

    const logout = () => {
        setLogin('');
    }

    return (
        <AuthContext.Provider value={{username, setLogin, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}