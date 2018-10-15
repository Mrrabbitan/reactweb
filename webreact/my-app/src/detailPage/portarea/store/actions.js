import { GET_PORT_AREA_ID, GET_YEAR  } from './actionTypes';
// import server from '../../../axios/shipServer';
//全局portAreaId
export const portAreaId = (portAreaId) => {
    return {
        type: GET_PORT_AREA_ID,
        portAreaId
    }
}
//全局年份
export const getYear = (year) => {
    return {
        type: GET_YEAR,
        year
    }
}