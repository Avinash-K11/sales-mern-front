import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [ token, setToken ] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);


    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem('token', serverToken);
    };

    
    const isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken(null);
    };

    return <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext); 

    if(!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }

    return authContextValue;
}