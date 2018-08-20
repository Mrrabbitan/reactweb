import  portAndBerthServer from '../axios/portAndBerthServer';
import Straitserver from '../axios/straitserver';



export const initMap = (map) => {return {type : "INITMAP",map}};

export const loadAllPort = () => (dispatch) => {
    portAndBerthServer.loadAllPort({},function(data){
        return dispatch({type : "LOADALLPORT",data});
    });
};

export const loadAllStrait = () => (dispatch) => {//调用server文件夹下的数据接口
    Straitserver.loadallstrait({},function(data){
        return dispatch({type : "LOADALLSTRAIT  ",data});
    });
};
