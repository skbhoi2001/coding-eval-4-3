import { LOGOUT_SUCCESS,  LOGIN_SUCCESS } from "./actionType"

const init = {
    isAuth:false
}

const authReducer  = (state = init, action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:{
            return{
                ...state,
                isAuth:true
            }
        }
        case LOGOUT_SUCCESS:{
            return{
                ...state,
                isAuth:false
            }
        }
        default:{
            return state
        }
    }
}

export default authReducer;