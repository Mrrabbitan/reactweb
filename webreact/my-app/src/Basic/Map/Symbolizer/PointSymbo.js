import ol from 'openlayers';
import yzan from '../../../Assets/image/contient/yzan.png';
/**
 *
 */



var pointSymbo = {
    'portwu' : new ol.style.Style({
        image : new ol.style.Icon({
            anchor : [ 0.5, 0.5 ],
            src : yzan
        }),
        zIndex: 30
    }),
    'shipleavingport' : new ol.style.Style({
        image : new ol.style.Icon({
            anchor : [0.5, 0.5 ],
            src : process.env.PUBLIC_URL +'img/port/PortCircle48.png'
        })
    }),
    'shipinport' : new ol.style.Style({
        image : new ol.style.Icon({
            scale:0.5,
            anchor : [ 1, 1 ],
            src : process.env.PUBLIC_URL +'img/plat/DJS.png'
        })
    }),
    'shipinportrel' : new ol.style.Style({
        image : new ol.style.Icon({
            scale:0.5,
            anchor : [ 0.2, 0.2 ],
            src : process.env.PUBLIC_URL +'img/plat/FTS.png'
        })
    }),
    'strait' : new ol.style.Style({
        image : new ol.style.Icon({
            scale:0.5,
            anchor : [ 0.2, 0.2 ],
            src : process.env.PUBLIC_URL +'img/plat/FTS.png'
        })
    }),

}

export  default  pointSymbo;
