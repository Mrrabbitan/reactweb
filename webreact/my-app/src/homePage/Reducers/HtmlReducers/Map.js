import toolMap from '../../../Basic/Map/Other/ToolMap';

/* 添加对象内容 */

const initState = {
    "centerCoord": toolMap.transform(109.98304302, 24.53952336),
    "baiscLayer":"ws_Mosaic:Groups002",
    "basicLayerFORMAT":"image/png",
    "basicLayerVERSION":"1.1.1",
    "mapZoom":4,
    "mapMaxZoom":15,
    "maxMinZoom":3,
    "mapListener":"",
};


export default (state = initState,action={}) => {
    switch(action.type){
        case "INITMAP":
            return {
                ...state,
                mapListener: action.mapListener,
            }
            break;
    }
    return state;
}