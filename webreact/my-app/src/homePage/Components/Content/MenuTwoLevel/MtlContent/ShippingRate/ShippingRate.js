import React,{Component} from 'react';

import './index.css';
import $ from 'jquery';
import simpleLayer from '../../../../../../Basic/Map/Layer/SimpleLayer';
import {connect} from 'react-redux';

class ShippingRate extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        //数据图层显隐操作
        $(".toshowrelayer").on("click","",this.showrelationLayer.bind(this));
        
    }
    showrelationLayer(e){
        let $this = $(e.currentTarget);
        if($this.hasClass("active")){
            $this.removeClass("active");
            this.props.mapListener.hideAllLayer();
        } else {
            $this.addClass("active");
            this.props.portmaplistener.showAllLayer();
        }
    }
    
    

    render(){
        return (
            <div className="sr_box">
                {/* <p>全球港口关系网</p>
                <p>全球货物关系网</p>
                <p>全球海峡关系网</p> */}
                <div id="portrelation">
                    <span className="toshowrelayer">全球关系网络图</span>
                 </div>
                 <div id="goodsrelation">
                    <span className="toshowrelayer">全球货物关系网</span>
                 </div>
                 <div id="straitrelation">
                    <span className="toshowrelayer">全球海峡关系网</span>
                 </div>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return {
            mapListener:state.html.map.mapListener,
            portmaplistener:state.html.map.portmaplistener,
        }
    }
)(ShippingRate);