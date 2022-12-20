import { AuthState } from "./AuthContext";

type authAction = 
 | {type: 'signin'}
 | {type: 'changeFavIcon', payload: string}
 | {type: 'logout'}

//Genera estado
export const authReducer = (state: AuthState, action: authAction): AuthState => {
    switch(action.type){
        case 'signin':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        case 'logout':
            return {
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        default: 
            return state;
    }
}