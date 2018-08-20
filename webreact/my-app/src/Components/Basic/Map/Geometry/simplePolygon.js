
import ol from 'openlayers'

class StraitFeatures{

    /* 
    param level:层级
    param arr:数据结构为点与点之间连线连成一片区域
    */
    basicstraitFeature(level,arr){
        return new ol.Feature({
            level,
            geometry : new ol.geom.Polygon([arr])
        })
    }

    /* 
    param level:层级
    param arr:数据结构为点与点之间连线连成一片区域
    addFeature:需要将新的source插入到地图中
    */
    createAndAddMap(source,level,arr){
        var Polygon = this.basicstraitFeature(level,arr);
        source.addFeature(Polygon);
    }

   /*  createAndAddPointFeature(vectorLayer,type,disiInfo,coord){
        let point = this.basicPointFeature(type,disiInfo,coord);
        vectorLayer.addFeature(point);
        return point;
    } */
}

export default new StraitFeatures();
