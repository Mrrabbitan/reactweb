/**
 *
 */
import ol from 'openlayers';
class SimpleLayer{

    basicLayer(url,params,visible){
        return new ol.layer.Tile({
            visible,
            source: new ol.source.TileWMS({
                url,
                params
            })
        });
    }
}
let sLayer = new SimpleLayer();
export default sLayer;
