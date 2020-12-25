import {combineReducers} from "redux";
import currentUser from "./currentUser";
import errors from "./errors.js";
import messages from "./messages.js";

const rootReducer= combineReducers({
    currentUser,
    errors,
    messages
});

export default rootReducer;