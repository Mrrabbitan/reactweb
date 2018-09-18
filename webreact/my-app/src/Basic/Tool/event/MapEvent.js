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

    /**
    * 时间转换为时间戳
    */
    timeTrans(value){
        var f = value.split(' ', 2);
        var d = (f[0] ? f[0] : '').split('/', 3);
        var t = (f[1] ? f[1] : '').split(':', 3);
        return (new Date(
            parseInt(d[0], 10) || null,
            (parseInt(d[1], 10) || 1) - 1,
            parseInt(d[2], 10) || null,
            parseInt(t[0], 10) || null,
            parseInt(t[1], 10) || null,
            parseInt(t[2], 10) || null
            )).getTime() / 1000;
    }  

    /**
    * 时间戳转换为时间
    */
    transTime(value){
        var date = new Date(value * 1000);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D =(date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+m+s;
    }
}
export default new MapEvent();