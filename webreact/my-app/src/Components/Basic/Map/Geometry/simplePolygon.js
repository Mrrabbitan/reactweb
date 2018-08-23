
import ol from 'openlayers'

class StraitFeatures {

    /* 
    param level:层级
    param arr:数据结构为点与点之间连线连成一片区域
    */
	basicstraitFeature(level, arr, type) {
        return new ol.Feature({
			type ,
			level ,
			geometry : new ol.geom.Polygon([ arr ])
        })
    }

    /* 
    param level:层级
    param arr:数据结构为点与点之间连线连成一片区域
    addFeature:需要将新的source插入到地图中
    */
	createAndAddMap(source, level, arr, type) {
		var Polygon = this.basicstraitFeature(level, arr, type);
        source.addFeature(Polygon);
    }

     /* 
    param level:层级
    param arr:数据结构为点与点之间连线连成一片区域
    */
   basicseaareaFeature(level,arr,type,disinfo){
    return new ol.Feature({
        type,
        level,
        geometry : new ol.geom.Polygon([arr]),
        disinfo
    })
}
	
	berthPolygonFeature(level, arr, type, disInfo) {
		return new ol.Feature({
			type ,
			level ,
			disInfo ,
			geometry : new ol.geom.Polygon([ arr ])
    })
}

/* 
param level:层级
param arr:数据结构为点与点之间连线连成一片区域
addFeature:需要将新的source插入到地图中
*/
createAndAddMap1(source,level,arr,type,disinfo){
    var Polygon1 = this.basicseaareaFeature(level,arr,type,disinfo);
    source.addFeature(Polygon1);
}
	/* 
	param level:层级
	param arr:数据结构为点与点之间连线连成一片区域
	addFeature:需要将新的source插入到地图中
	*/
	
    /*
    param level:层级
    param arr:数据结构为点与点之间连线连成一片区域
    param disInfo:点击标牌信息
    param type:暂无意义，传null
	addFeature:需要将新的source插入到地图中
    */

	createBerthPolygonAndAddMap(source, level, arr, type, disInfo) {
		var Polygon2 = this.berthPolygonFeature(level, arr, type, disInfo);
		source.addFeature(Polygon2);
	}
   /*  createAndAddPointFeature(vectorLayer,type,disiInfo,coord){
        let point = this.basicPointFeature(type,disiInfo,coord);
        vectorLayer.addFeature(point);
        return point;
    } */
}

export default new StraitFeatures();
