import React from 'react';
import globaldefine from '../../../../../Config/globaldefine';
import initState from '../../../../../Config/mapConfig';
import simpleLayer from '../../../../../Basic/Map/Layer/SimpleLayer';
import olMap from '../../../../../Basic/Map/Map';
import './index.css'

class Map extends React.Component{

    componentDidMount(){
        //创建地图
        let url=globaldefine.mosaicAddress;
        let basicLayerParam={
            'FORMAT': initState.basicLayerFORMAT,
            'VERSION': initState.basicLayerVERSION,
            tiled: true,
            STYLES: '',
            LAYERS: initState.baiscLayer
        }
         //创建图层
         let layer_custom_dayan = simpleLayer.basicLayer(url, basicLayerParam, true);
         //海图中心点位置
         let Centercoord = initState.centerCoord;
         //创建地图
         var map = olMap.baiscMap([layer_custom_dayan], "map", Centercoord, 3, 15, 4);

    }
    render(){
        return(
            <div  id='map'>

            </div>
        )
    }
}
export default Map;