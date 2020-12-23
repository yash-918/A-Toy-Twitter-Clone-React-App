import { apiCall} from "../../services/api.js";
import {SET_CURRENT_USER} from "../actionTypes.js";
import {addError,removeError} from "./errors.js";
export function setCurrentUser(user)
{
    return {
        type:SET_CURRENT_USER,
        user
    };
}

export function logout()
{
    return dispatch =>{
        localStorage.clear();
        dispatch(setCurrentUser({}));
    }
}


export function authUser(type,userData)
{
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall("POST",`/api/auth/${type}`,userData)
            .then(({token,...user})=>{
                localStorage.setItem("jwttoken",token);
                dispatch(setCurrentUser(user))
                dispatch(removeError());
                resolve();
            })
            .catch(err=>{
                dispatch(addError(err.message));
                reject();
            })
        });
    };
}