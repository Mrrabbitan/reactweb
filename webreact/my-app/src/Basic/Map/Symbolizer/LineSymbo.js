import ol from 'openlayers';

/***
 * 定义所有线的样式
 * @type {{}}
 */
var lineSymbo = {

    'portggline': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#FF3300',
            width: 2
        }),
        zIndex: 10
    }),
    'portline': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#4793e4',
            width: 1
        }),
        zIndex: 10
    }),
    'straitline': new ol.style.Style({
        stroke: new ol.style.Stroke({
            width: 1.5,
            color: '#3362ce',
            lineDash: [1, 2, 3, 4, 5, 6],
            lineDashOffset: 10,
        }),
        zIndex: 10
    }),
    'porthdline': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#FF3300',
            width: 2
        }),
        zIndex: 10
    }),
    'portjsline': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#00FF00',
            width: 2
        }),
        zIndex: 10
    }),
    /**
     * 排放区样式
     */
    'lineChoose': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#65ad9a',
            width: 4
        }),
        zIndex: 50
    }),
    /**
     * 中国排放区样式
     */
    'dischargeLine': new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#65ad9a',
            width: 4
        }),
        zIndex: 50
    })

}

export default lineSymbo;
