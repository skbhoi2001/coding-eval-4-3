import { combineReducers, createStore } from "redux";
import authReducer from "./login/authReducer"

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = createStore(rootReducer)