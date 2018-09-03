import React, {Component} from 'react';
import {layer} from 'react-openlayers';
import {connect} from "react-redux";
import simpleLayer from '../../../Basic/Map/Layer/SimpleLayer';
import globaldefine from '../../../Config/globaldefine';
import * as mapAction from "../../Actions/MapAction";
import "bootstrap";
import "../../../Assets/style/bootstrap.min.css";
import PopupLayer from './Popup';
import './index.css'


//添加自定义组件
import mapListener from "./MapListener";
import olMap from '../../../Basic/Map/Map';
import popup from '../../../Basic/Map/Popup/Popup';
import map from "../../../Basic/Map/Map"
import addContronl from '../../../Basic/Tool/event/MapEvent';
import portmaplistener from './portMapListener';

class Map extends Component {
    constructor() {
        super();
        this.mapObj = {};
        //港口关系网络
        this.portMapObj = {};
        //货物关系网络
        this.goodsMapObj = {};
        //海峡关系网络
        this.straitMapObj = {};
    }

    //渲染完成后，创建地图地图初始化
    componentDidMount() {
        var staticMapConfig = this.props.state;
        let url = globaldefine.mosaicAddress;
       
        let basicLayerParam = {
            'FORMAT': staticMapConfig.basicLayerFORMAT,
            'VERSION': staticMapConfig.basicLayerVERSION,
            tiled: true,
            STYLES: '',
            LAYERS: staticMapConfig.baiscLayer
        }
        //创建图层
        let layer_custom_dayan = simpleLayer.basicLayer(url, basicLayerParam, true);
        //海图中心点位置
        let Centercoord = staticMapConfig.centerCoord;
        //创建地图
        var map = olMap.baiscMap([layer_custom_dayan], "map", Centercoord, 3, 15, 4);
        //添加海区图层
        let [seaareaSource, seaareaLayer] = simpleLayer.sourceLayer(map, true);
        //添加全球排放区图层
        let [dischargeSource, dischargeLayer] = simpleLayer.sourceLayer(map, false);
        //添加中国排放区图层
        let [ChinadischargeSource, ChinadischargeLayer] = simpleLayer.sourceLayer(map, false);
        //创建弹出框的图层
        let [popupElement,popupOverlay] = popup.basicPopup(map,"popup");
        //增加鼠标放入海图获取当前坐标
        map.addControl(addContronl.MousePosition());
        //增加海峡图层
        let [StraitSource, StraitLayer] = simpleLayer.sourceLayer(map, true);
        //创建port图层
        let [portSource, portLayer] = simpleLayer.sourceLayer(map, true);
        //创建主要港口图层，默认显示
        let [portInportentSource, portInportentLayer] = simpleLayer.sourceLayer(map, true);
        //添加Layer，放置关系网路
        let [relationSource, relationLayer] = simpleLayer.sourceLayer(map, true);
        //添加泊位图层
        let [berthSource, berthLayer] = simpleLayer.sourceLayer(map, true);
        //添加船舶图层,默认不展示
        let [shipSource, shipLayer] = simpleLayer.sourceLayer(map, false);

        this.mapObj = {
            "map": map,
            layer_custom_dayan,
            "popupOverlay": popupOverlay,
            "popupElement": popupElement,
            "portSource": portSource,
            "portLayer": portLayer,
            portInportentSource,
            portInportentLayer,
            "straitlayer":StraitLayer,
            "straitsource":StraitSource,
            seaareaSource,
            seaareaLayer,
            dischargeSource,
            dischargeLayer,
            shipSource,
            shipLayer,
            ChinadischargeSource,
            ChinadischargeLayer,
            berthSource,
            berthLayer,            //TODO

        }
        //添加地图的时间监听
        let mapListenerToStore = new mapListener(this.mapObj);

        /****************************************全球港口关系网络**************************************************************/
        //传到新的关联网络图层
        let portrelationLayerParam = {
            'FORMAT': staticMapConfig.basicLayerFORMAT,
            'VERSION': staticMapConfig.basicLayerVERSION,
            tiled: true,
            STYLES: '',
            LAYERS: staticMapConfig.portrelationLayer
        }
        //添加港口关系网络图层，默认的参数控制true/false来显示
        let portlayer_show = simpleLayer.basicLayer(url, portrelationLayerParam, false);
        //添加港口网络图层；
        map.addLayer(portlayer_show);
        //将图层传入网络中
        this.portMapObj = {
            portlayer_show,
            mapObj:this.mapObj,
            relationSource,
            relationLayer
        }
        //添加关联关系网络的事件监听
        let portmaplistenerToStore = new portmaplistener(this.portMapObj);

        /****************************************全球货物关系网络**************************************************************/


        /****************************************全球海峡关系网络**************************************************************/



        //将初始化的地图信息存储到Store中
        this.props.dispatch(mapAction.initMap(mapListenerToStore,portmaplistenerToStore));

        //加载全球港口数据---DEMO---测试用例先注释看看情况
        /* this.props.dispatch(mapAction.loadAllPort()); */
    }

    render() {
        return (
            <div id="mapBox">
                <div id="map">
                </div>
                <PopupLayer/>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            state: state.html.map
        };
    }
)(Map);