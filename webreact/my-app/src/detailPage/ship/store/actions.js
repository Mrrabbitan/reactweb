import { GET_MMSI, GET_SHIP_ID, SHIP_INFO } from './actionTypes';
import server from '../../../axios/shipServer';
//全局mmsi
export const getMmsi = (mmsi) => { 
    return {
        type: GET_MMSI,
        mmsi
    }
}
//全局shipId
export const getShipId = (shipId) => {
    return {
        type: GET_SHIP_ID,
        shipId
    }
}
//船舶基本信息获取
export const getShipInfo = (mmsi) => {
    return (dispatch) => {
        server.getShipDetail({ mmsi }, (data) => {
            if (data.data) {
                dispatch({
                    type: SHIP_INFO,
                    data:data.data
                });
            } else { 
                dispatch({
                    type: SHIP_INFO,
                    data: null
                })
            }
        })
    }
}