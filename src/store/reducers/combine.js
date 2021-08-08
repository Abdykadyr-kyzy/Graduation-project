import { combineReducers } from "redux";
import {authReducer} from "./auth"
import { rootReducer } from "./user";
import { orderReducer } from "./order";

export default combineReducers({
    auth:authReducer,
    order:orderReducer,
    user:rootReducer
})