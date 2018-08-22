import React, {Component} from 'react';
import {layer} from 'react-openlayers';
import {connect} from "react-redux";
import simpleLayer from '../../Components/Basic/Map/Layer/SimpleLayer';
import globaldefine from '../../Config/globaldefine';
import * as mapAction from "../../Actions/MapAction";
import "bootstrap";
import "../../Assets/style/bootstrap.min.css";
import PopupLayer from './Popup';
import './index.css'


//添加自定义组件
import mapListener from "./MapListener";
import olMap from '../../Components/Basic/Map/Map';
import popup from '../../Components/Basic/Map/Popup/Popup';
import map from "../Basic/Map/Map"
import addContronl from '../Basic/Tool/event/MapEvent';

class Map extends Component {
    constructor() {
        super();
        this.mapObj = {};
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
        let map = olMap.baiscMap([layer_custom_dayan], "map", Centercoord, 3, 15, 4);
        //创建弹出框的图层
        let [popupElement,popupOverlay] = popup.basicPopup(map,"popup");
        //增加鼠标放入海图获取当前坐标
        map.addControl(addContronl.MousePosition());
        //增加海峡图层
        let [StraitSource, StraitLayer] = simpleLayer.sourceLayer(map, true);
        //创建port图层
        let [portSource, portLayer] = simpleLayer.sourceLayer(map, false);
        //添加Layer，放置关系网路
        let [relationSource, relationLayer] = simpleLayer.sourceLayer(map, true);
        //添加海区图层
        let [seaareaSource, seaareaLayer] = simpleLayer.sourceLayer(map, true);
        //添加排放区图层
        let [dischargeSource, dischargeLayer] = simpleLayer.sourceLayer(map, true);

        this.mapObj = {
            "map": map,
            "basicLayer": layer_custom_dayan,
            "popupOverlay": popupOverlay,
            "popupElement": popupElement,
            "portSource": portSource,
            "portLayer": portLayer,
            "straitlayer":StraitLayer,
            "straitsource":StraitSource,
            relationSource,
            relationLayer,
            seaareaSource,
            seaareaLayer,
            dischargeSource,
            dischargeLayer,
        }
        //添加地图的时间监听
        let mapListenerToStore = new mapListener(this.mapObj);
        //将初始化的地图信息存储到Store中
        this.props.dispatch(mapAction.initMap(mapListenerToStore));
        //加载全球港口数据---DEMO---测试用例先注释看看情况
        /* this.props.dispatch(mapAction.loadAllPort()); */

        //
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