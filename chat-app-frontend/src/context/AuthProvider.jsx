import React, { createContext, useContext, useState } from 'react'
import Cookies from "js-cookie";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp");
    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined);
    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;

export const useAuth = () => useContext(AuthContext);