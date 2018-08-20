/**
 * 创建地图
 */
import ol from 'openlayers';
class Map{

    /**
     *  创建基本地图
     * @param layers      图层（数组）
     * @param renderId   渲染Id
     * @param center     中心点（数组）
     * @param minZoom    最小级别
     * @param maxZoom    最大级别
     * @param zoom       当前级别
     * @returns {google.maps.Map | Map | *}
     */
    baiscMap(layers,renderId,center,minZoom,maxZoom,zoom){
       return  new ol.Map({
            layers,
            target: document.getElementById(renderId),
            view: new ol.View({
                projection: 'EPSG:3857',
                /* center:[0,0],
                zoom:3, */
                center,
                minZoom,
                maxZoom,
                zoom
            }),
        });
    }
}
let map = new Map();
export default map;