import { LOGIN,LOGOUT,INVALID_CREDENTIALS,USERNAME_DNE,USER_ALREADY_EXISTS } from "../constants";
import * as api from '../api';

export const login= (user,history,onInvalidCredentials,onUsernameDNE)=>async(dispatch)=>{
    try {
        
        const { data } = await api.signIn(user);

        dispatch({ type: LOGIN, data });
        history.push('/');
        
    } catch (error) {
        const errorMessage=error.response.data.message;
        switch (errorMessage) {
            case INVALID_CREDENTIALS:
                onInvalidCredentials();
                break;
            case USERNAME_DNE:
                onUsernameDNE();
                break;        
            default:
                //no action as of now
        }
    }
    
}
export const signup= (user,history,onUsernameAlreadyExists)=>async(dispatch)=>{
    try {
        const { data } = await api.signUp(user);
        dispatch({ type: LOGIN, data });
        history.push('/');
        
    } catch (error) {
        console.log(error.response.data);
        const errorMessage=error.response.data.message;
        switch (errorMessage) {
            case USER_ALREADY_EXISTS:
                onUsernameAlreadyExists();

                
                break;
        
            default:
                break;
        }
        
    }
    
    
}
// export const logout=(history,onUserLogout)=>async(dispatch)=>{
//     dispatch({type:LOGOUT});
//     onUserLogout();
//     history.push('/');

// }
