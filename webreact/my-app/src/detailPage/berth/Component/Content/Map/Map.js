import React,{Component} from 'react';
import initState from '../../../../../Config/mapConfig';
import globaldefine from '../../../../../Config/globaldefine';
import simpleLayer from '../../../../../Basic/Map/Layer/SimpleLayer';
import olMap from '../../../../../Basic/Map/Map';

import './index.css'


class Map extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        let url =globaldefine.mosaicAddress; 
        let basicLayerParam = {
            'FORMAT': initState.basicLayerFORMAT,
            'VERSION': initState.basicLayerVERSION,
            tiled: true,
            STYLES: '',
            LAYERS: initState.baiscLayer
        }
          //创建图层
        let layer_custom_dayan = simpleLayer.basicLayer(url, basicLayerParam, true);
        //创建中心点坐标
        let Centercoord = initState.centerCoord;
        //添加地图容器
        var map = olMap.baiscMap([layer_custom_dayan], "map", Centercoord, 3, 15, 4);
    }

    render(){
        return(
            <div id="map">

            </div>

        )
    }
}
export default Map;