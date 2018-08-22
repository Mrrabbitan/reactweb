import ol from 'openlayers';
import toolMap from "../../Map/Other/ToolMap"
import $ from 'jquery';
/**
 * 地图事件
 */
class MapEvent{

    /***
     * 鼠标移动生成鼠标当前位置坐标的事件
     * @returns {MapEvent.MousePosition|*|MousePosition|any}
     * @constructor
     */
    MousePosition(){
        return  new ol.control.MousePosition({
            undefinedHTML: 'outside',
            projection: 'EPSG:4326',
            coordinateFormat: function (coordinate) {
                return toolMap.indexTipPos(coordinate);
            }
        })
    }

    ChooseAIS(pos) {
        //flyto的方法进行跳转

        var duration = 2500;
        var start = +new Date();


        var pan = ol.animation.pan({
            duration : duration,
            source : /** @type {ol.Coordinate} */ (this.map.getView().getCenter()),
            start : start
        });
        var bounce = ol.animation.bounce({
            duration : duration,
            resolution : 4 * this.map.getView().getResolution(), //???
            start : start,

        });

        this.map.beforeRender(pan, bounce);
        this.map.getView().setCenter(pos);
        this.map.getView().setZoom(9);
    };


    

}
export default new MapEvent();