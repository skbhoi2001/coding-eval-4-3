import { LOGOUT_SUCCESS, LOGIN_SUCCESS } from "./actionType"

export const loginSuccess = ()=>{
    return{
        type:LOGIN_SUCCESS
    }
}

export const logoutSuccess = () =>{
    return{
        type:LOGOUT_SUCCESS
    }
}