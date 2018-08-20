import ol from 'openlayers';

class SimpleFeature{


    basicPointFeature(type,disInfo,coord){
        return new ol.Feature({
            type,
            disInfo,
            geometry : new ol.geom.Point(coord)
        })
    }

    createAndAddPointFeature(vectorLayer,type,disiInfo,coord){
        let point = this.basicPointFeature(type,disiInfo,coord);
        vectorLayer.addFeature(point);
        return point;
    }


    


}

export  default  new SimpleFeature();