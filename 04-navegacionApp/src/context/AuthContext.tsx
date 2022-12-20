
// Definir como luce, que informacion tendre aqui

import React,{ createContext, useReducer } from "react";
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string
}


// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined, 
    favoriteIcon: undefined
}

// Lo usaremos para dercile como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type: 'signin'})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName});
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}