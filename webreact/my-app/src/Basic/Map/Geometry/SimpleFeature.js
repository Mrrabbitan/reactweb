import ol from 'openlayers';
import pointSymbo from "../Symbolizer/PointSymbo";

class SimpleFeature{


    basicPointFeature(type,disInfo,coord){
        return new ol.Feature({
            type,
            disInfo,
            geometry : new ol.geom.Point(coord)
        })
    }

    portPointFeature(type,disInfo,coord,portId){
        return new ol.Feature({
            type,
            disInfo,
            portId,
            geometry : new ol.geom.Point(coord)
        })
    }
    portStraitFeature(type,disInfo,coord,name){
        return new ol.Feature({
            type,
            disInfo,
            name,
            geometry : new ol.geom.Point(coord)
        })
    }

    /**
     * 传递参数，并设置图片角度
     * @param type
     * @param disInfo
     * @param coord
     * @param param  参数
     * @param rotation 角度
     * @returns {Feature|google.maps.Data.Feature}
     */
    paramFeature(type,disInfo,coord,param,rotation){
        return new ol.Feature({
            type,
            disInfo,
            rotation,
            param,
            geometry : new ol.geom.Point(coord),


        })
    }

    createAndAddPointFeature(vectorLayer,type,disiInfo,coord){
        let point = this.basicPointFeature(type,disiInfo,coord);
        vectorLayer.addFeature(point);
        return point;
    }

    /**
     * 传递参数，并设置图片角度
     * @param type
     * @param disInfo
     * @param coord
     * @param param  参数
     * @param rotation 角度
     * @returns {Feature|google.maps.Data.Feature}
     */
    createAndAddParamPointFeature(vectorLayer,type,disiInfo,coord,param,rotation){
        let point = this.paramFeature(type,disiInfo,coord,param,rotation);
        vectorLayer.addFeature(point);
        return point;
    }

    createAndAddPortPointFeature(vectorLayer,type,disiInfo,coord,portId){
        let point = this.portPointFeature(type,disiInfo,coord,portId);
        vectorLayer.addFeature(point);
        return point;
    }
    createAndAddStraitPointFeature(vectorLayer,type,disiInfo,coord,name){
        let point = this.portStraitFeature(type,disiInfo,coord,name);
        vectorLayer.addFeature(point);
        return point;
    }

}

export  default  new SimpleFeature();