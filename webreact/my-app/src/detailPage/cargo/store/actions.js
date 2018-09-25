import { GET_TYPE } from './actionTypes';
//货物类型
export const getType = (cargoType) => { 
    return {
        type: GET_TYPE,
        cargoType
    }
}
