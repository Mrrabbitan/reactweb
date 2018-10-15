import { GET_HISTORYFLOW, GET_SHIPTYPE } from "./actionTypes";

export const Gethistoryflow =(data)=>{
    return {
        type:GET_HISTORYFLOW,
        data
    }
}

export const Getshiptype =(data)=>{
    return{
        type:GET_SHIPTYPE,
        data
    }
}