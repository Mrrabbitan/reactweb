import ol from 'openlayers';

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

    createAndAddPointFeature(vectorLayer,type,disiInfo,coord){
        let point = this.basicPointFeature(type,disiInfo,coord);
        vectorLayer.addFeature(point);
        return point;
    }

    createAndAddPortPointFeature(vectorLayer,type,disiInfo,coord,portId){
        let point = this.portPointFeature(type,disiInfo,coord,portId);
        vectorLayer.addFeature(point);
        return point;
    }

}

export  default  new SimpleFeature();