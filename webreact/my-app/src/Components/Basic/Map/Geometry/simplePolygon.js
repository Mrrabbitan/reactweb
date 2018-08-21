
import ol from 'openlayers'

class StraitFeatures{

    /* 
    param level:层级
    param arr:数据结构为点与点之间连线连成一片区域
    */
    basicstraitFeature(level,arr,type){
        return new ol.Feature({
            type,
            level,
            geometry : new ol.geom.Polygon([arr])
        })
    }

    /* 
    param level:层级
    param arr:数据结构为点与点之间连线连成一片区域
    addFeature:需要将新的source插入到地图中
    */
    createAndAddMap(source,level,arr,type){
        var Polygon = this.basicstraitFeature(level,arr,type);
        source.addFeature(Polygon);
    }

     /* 
    param level:层级
    param arr:数据结构为点与点之间连线连成一片区域
    */
   basicseaareaFeature(level,arr,type){
    return new ol.Feature({
        type,
        level,
        geometry : new ol.geom.Polygon([arr])
    })
}

/* 
param level:层级
param arr:数据结构为点与点之间连线连成一片区域
addFeature:需要将新的source插入到地图中
*/
createAndAddMap1(source,level,arr,type){
    var Polygon1 = this.basicseaareaFeature(level,arr,type);
    source.addFeature(Polygon1);
}
   /*  createAndAddPointFeature(vectorLayer,type,disiInfo,coord){
        let point = this.basicPointFeature(type,disiInfo,coord);
        vectorLayer.addFeature(point);
        return point;
    } */
}

export default new StraitFeatures();
