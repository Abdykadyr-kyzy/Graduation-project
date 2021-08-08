import { combineReducers } from "redux";
import {authReducer} from "./auth"
import { rootReducer } from "./user";

export default combineReducers({
    auth:authReducer,
    user:rootReducer
})