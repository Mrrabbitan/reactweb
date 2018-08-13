import React, {Component} from 'react';
import server from '../../../servers/globaldefine';
import simpleLayer from '../../../Components/Basic/Map/Layer/SimpleLayer';
import toolMap from '../../../Components/Basic/Map/Map';
import './index.css';
import ol from 'openlayers';
import axios from 'axios';
import '../../../Assets/style/ol.css'
import PortController from './port.js'
import httpServer from '../../../servers/index';
import {layer} from 'react-openlayers';
import $ from 'jquery';
import PopupLayer from '../../../Components/Content/GlobalPortInfo/popuplayer';
import PopupLayer1 from '../../../Components/Content/GlobalPortInfo/popuplayer_portsearch';


export default class Map extends Component {
    constructor(){
        super();
        this.url = server.mosaicAddress;
        this.basicLayerParam = {
            'FORMAT': "image/png",
            'VERSION': '1.1.1',
            tiled: true,
            STYLES: '',
            LAYERS: 'ws_Mosaic:Groups002'
        }
    }

    //地图初始化
    componentDidMount() {
        //创建图层
        let layer_custom_dayan = simpleLayer.basicLayer(this.url, this.basicLayerParam, true);
        //海图中心点位置
        let Centercoord = ol.proj.transform([parseFloat(109.98304302), parseFloat(24.53952336)], 'EPSG:4326', 'EPSG:3857');
        //创建地图
        let map = toolMap.baiscMap([layer_custom_dayan], "map", Centercoord, 3, 15, 4);
        //添加点击事件
        map.on('click', clickSouth);


        window.seamap = map;

        function formatDegree(value) {//添加np识别经纬度的位置函数
            var valueabs = Math.abs(value);
            var v1 = Math.floor(valueabs);
            var v2 = Math.floor((valueabs - v1) * 60);
            var v3 = Math.floor((valueabs - v1) * 3600 % 60);
            var s = '';
            if (value < 0) {
                s = '-';
            }
            return s + v1 + '°' + v2 + '\'' + v3 + '"';
        }

        map.addControl(new ol.control.MousePosition({//添加鼠标放在海图显示当前坐标的事件
                undefinedHTML: 'outside',
                projection: 'EPSG:4326',
                coordinateFormat: function (coordinate) {

                    //return "经度:"+parseInt(coordinate[0]*1000000)+" 纬度:"+parseInt(coordinate[1]*1000000);
                    if (coordinate[0] > 180) {
                        coordinate[0] = coordinate[0] % 360;
                        if (coordinate[0] > 180) {
                            coordinate[0] = coordinate[0] - 360;
                        }
                    } else if (coordinate[0] < -180) {
                        coordinate[0] = coordinate[0] % 360;
                        if (coordinate[0] < -180) {
                            coordinate[0] = coordinate[0] + 360;
                        }
                    }
                    return "经度:" + formatDegree(coordinate[0]) + " 纬度:" + formatDegree(coordinate[1]);

                }
            })
        )
        PortController.initPortLayerAn(map);
        /* 初始化港口图层 */
        PortController.getport();
        /* 调用港口的数据加入海图 */
        /*  PortController.portClick(); */
        /* you must add () to interject this function */
        var popupElement = document.getElementById('popup1');
        var popupLayer = new ol.Overlay({
            element: popupElement,
            positioning: 'bottom-center'
        }); //需要将港口信息加入弹框中
        map.addOverlay(popupLayer);

        function clickSouth(evt) {
            var pixel = map.getEventPixel(evt.originalEvent);
            /* after click get the mouse's position */
            

            var feature = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
                if (layer === PortController.portLayer) {
                    //点击首页的港口图层
                    PortController.portClick(feature, layer, popupLayer.getElement(), popupLayer);
                    return feature;
                }
        })
        if (feature == null) {
			$(".popover").css('display', 'none'); //点击其他地方标牌消失
		}
        console.log(feature);
    }


        


    }

    /* componentDidmount结束 */


    render() {
        return (
            <div id="map">
                {/* <Port/> */}
                <PopupLayer/>
                <PopupLayer1/>
            </div>
        )
    }
}
