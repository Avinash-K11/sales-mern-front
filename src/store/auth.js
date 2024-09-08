import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const getInitialCart = () => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : { items: [], user: null };
    };

    const [ user, setUser ] = useState();

    const [ cart, setCart ] = useState(getInitialCart);

    const [ token, setToken ] = useState(localStorage.getItem("token"));

    const isLoggedIn = !!token;
    
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    useEffect(() => {
        if (isLoggedIn) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, isLoggedIn]);

    // Function to update user information
    const updateUser = (newUser) => {
        setUser(newUser);
    };

    const addToCart = (newItem) => {
        console.log(newItem);
        setCart(prevState => ({
            ...prevState,
            items:[...prevState.items,
                newItem],
            user: user
        }));
        console.log(cart);
    }

    const removeItemFromCart = (itemId) => {
        setCart(prevCart => ({
          ...prevCart,
          items: prevCart.items.filter(item => item.id !== itemId)
        }));
    };

    const removeCart = () => {
        setCart(prevCart => ({
            ...prevCart, // Spread the previous state to keep user info
            items: [],   // Set items to an empty array
            user: null
        }));
        localStorage.removeItem("cart");
    }

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
    };

    const LogoutUser = () => {
        setToken(null);
    };

    return <AuthContext.Provider value={{ cart, addToCart, updateUser, removeItemFromCart, removeCart, isLoggedIn, storeTokenInLS, LogoutUser }}>
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