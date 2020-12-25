// axios library for ajax request
import axios from "axios";

export function setTokenHeader(token){
    if(token){
        axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
    } else{
        delete axios.defaults.headers.common["Authorization"];
    }
}
export function apiCall(method,path,data){
    console.log(method,path);
    return new Promise((resolve,reject)=>{
        return axios[method.toLowerCase()](path,data)
                .then(res => {
                    console.log(res.data);
                    return resolve(res.data);
                })
                .catch(err=>{
                    return (reject(err.response.data.error));
                });

    });
}