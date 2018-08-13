/**
 *
 */
import ol from 'openlayers';
class Map{
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