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
    /****
     * 首页港口图标
     * */
    'indexPort6' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 0.6,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/port/importPort.png'
        })
    }),
    'indexPort10' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 1,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/port/importPort.png'
        })
    }),
    /***
     * 船舶图标
     */
    'ship_s_zi' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 1,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/ship/s_zi.png'
        })
    }),
    /*s_zi s_hong   s_huang s_hui  s_ju  s_lan  s_lv s_tianlan s_zifen*/
    'ship_s_zifen' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 1,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/ship/s_zifen.png'
        })
    }),
    'ship_s_tianlan' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 1,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/ship/s_tianlan.png'
        })
    }),
    'ship_s_lv' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 1,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/ship/s_lv.png'
        })
    }),
    'ship_s_lan' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 1,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/ship/s_lan.png'
        })
    }),
    'ship_s_ju' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 1,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/ship/s_ju.png'
        })
    }),
    'ship_s_hui' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 1,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/ship/s_hui.png'
        })
    }),
    'ship_s_huang' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 1,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/ship/s_huang.png'
        })
    }),
    'ship_s_hong' : new ol.style.Style({
        image : new ol.style.Icon({
            scale: 1,
            anchor : [ 0.5, 0.5],
            src : process.env.PUBLIC_URL +'img/ship/s_hong.png'
        })
    }),
}

export  default  pointSymbo;
