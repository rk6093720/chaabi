import * as types from "./actionTypes";

const hours =(payload)=>{
    return {
        type:types.hour,
        payload,
    }
}
export {
    hours
}