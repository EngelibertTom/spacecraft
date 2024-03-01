import React, {createContext, useState, useContext, PropsWithChildren} from 'react';


interface AuthContextProps {
    isSignedIn: boolean;
    setIsSignedIn: (isSignedIn: boolean) => void;
}


const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }) => {

    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

    return (

        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);
