import React,{Component} from 'react';
import $ from 'jquery';
import './berthBasic.css';
import globaldefine from '../../Config/globaldefine';
import simpleLayer from '../../Basic/Map/Layer/SimpleLayer';
import toolMap from '../../Basic/Map/Other/ToolMap';
import olMap from '../../Basic/Map/Map';
import BerthBasicTable from './BerthBasicTable';
import berthDetail from '../../axios/berthDetail';
import BerthUsingInfo from './BerthUsingTable';

class OdHistory extends Component{
    constructor(){
        super();
        this.state={
            data:null,
            berthUsingData:null
        }
    }
    //页面元素加载前
    componentWillMount(){
        let obj=this;
        var berthId=globaldefine.getUrlParms('berthId');
        berthDetail.getBerthByBerthId({berthId},function(data){
            obj.setState({data})
        })
        berthDetail.getBerthUsingInfoByBerthId({berthId},function(berthUsingData){
            obj.setState({berthUsingData})
        })


    }
    //页面元素加载完成之后
    componentDidMount(){
        let url = globaldefine.mosaicAddress;
        let basicLayerParam = {
            'FORMAT': "image/png",
            'VERSION': "1.1.1",
            tiled: false,
            STYLES: '',
            LAYERS: "ws_Mosaic:Groups002"
        }
        //创建图层
        let layer_custom_dayan = simpleLayer.basicLayer(url, basicLayerParam, true);
        //海图中心点位置
        let Centercoord = toolMap.transform(109.98304302, 24.53952336);
        //创建地图
        let map = olMap.baiscMap([layer_custom_dayan], "seaMap", Centercoord, 3, 15, 4);
       
    }
    render(){
       
        return (
            <div id='firstContainer'>
                <div id="seaMap"></div>
                <div id="berthBasicData">  
                    <div>基本情况</div>  
                    <BerthBasicTable data={this.state.data}/>                  
                    <div>使用情况</div> 
                    <BerthUsingInfo data={this.state.berthUsingData}/>
                </div> 
            </div>
        )
    }
}
export default OdHistory;