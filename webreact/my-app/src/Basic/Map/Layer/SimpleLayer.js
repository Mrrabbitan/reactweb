/**
 *  创建地图图层
 */
import ol from 'openlayers';
import pointSymbo from  '../Symbolizer/PointSymbo';
import lineSymbo from  '../Symbolizer/LineSymbo';
import polygonSymbo from '../Symbolizer/polygonsymbo';


class SimpleLayer{

    /**
     * 创建基本的图层
     * @param url  图层地址
     * @param params  参数
     * @param visible  可见性
     * @returns
     */
    basicLayer(url,params,visible){
        return new ol.layer.Tile({
            visible,
            source: new ol.source.TileWMS({
                url,
                params
            })
        });
    }
    sourceLayer(map,visible){
        let source = new ol.source.Vector();
        let vectorLayer = new ol.layer.Vector({
            visible,
            source,
            style : function(feature) {
               
               if(feature.getGeometry().getType() == "Point"){
                    //坐标点样式
                   return pointSymbo[feature.get('type')];
               }else if(feature.getGeometry().getType() == "LineString"){
                   //线的样式
                   return lineSymbo[feature.get('type')];
               }else if(feature.getGeometry().getType() == "Polygon"){
                   //面的样式
                   return polygonSymbo[feature.get('type')](feature);
                    /* 面的样式结束 */
               }
            }
        });
        map.addLayer(vectorLayer);
        return [source,vectorLayer];
    }
}
let sLayer = new SimpleLayer();
export default sLayer;
