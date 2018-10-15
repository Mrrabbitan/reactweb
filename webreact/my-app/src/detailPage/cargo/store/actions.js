import { GET_TYPE , GET_YEAR } from './actionTypes';
//货物类型
export const getType = (cargoType) => { 
    return {
        type: GET_TYPE,
        cargoType
    }
}
//货物类型
export const getYear = (year) => {
    return {
        type: GET_YEAR,
        year
    }
}
