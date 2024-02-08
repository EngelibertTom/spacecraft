import React, { createContext, useState, useContext } from 'react';


interface AuthContextProps {
    isSignedIn: boolean;
    setIsSignedIn: (isSignedIn: boolean) => void;
}


const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

// Créez un composant fournisseur pour envelopper votre application avec le contexte
export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
console.log(isSignedIn)
    return (

        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);
