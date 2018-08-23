import React,{Component} from 'react';
import PortEchart from '../../../../Components/Content/MenuRight/RightBottom/PortEchart/PortEchart';
import BerthEchart from '../../../../Components/Content/MenuRight/RightBottom/BerthEchart/BerthEchart';
import ChannelEchart from '../../../../Components/Content/MenuRight/RightBottom/ChannelEchart/ChannelEchart';
import CountryEchart from '../../../../Components/Content/MenuRight/RightBottom/CountryEchart/CountryEchart';
import CompanyEchart from '../../../../Components/Content/MenuRight/RightBottom/CompanyEchart/CompanyEchart';
import ShipEchart from '../../../../Components/Content/MenuRight/RightBottom/ShipEchart/ShipEchart';
import CargoEchart from '../../../../Components/Content/MenuRight/RightBottom/CargoEchart/CargoEchart';
import PortDisEchart from '../../../../Components/Content/MenuRight/RightBottom/PortDisEchart/PortDisEchart';
import LaneEchart from '../../../../Components/Content/MenuRight/RightBottom/LaneEchart/LaneEchart';
import {connect} from 'react-redux';
import "./index.css"


class BottomEchartBox extends Component{

    render(){
        let type = this.props.dataType;
        let component;
        if(type==1){
            {/*港口*/}
            component = <PortEchart/>;
        }else if(type==2){
            {/*泊位*/}
            component = <BerthEchart/>;
        }else if(type==3){
            {/*航线*/}
            component = <ChannelEchart/>;
        }else if(type==4){
            {/*国家*/}
            component = <CountryEchart/>;
        }else if(type==5){
            {/*公司*/}
            component = <CompanyEchart/>;
        }else if(type==6){
            {/*船舶*/}
            component = <ShipEchart/>;
        }else if(type==7){
            {/*货物*/}
            component = <CargoEchart/>;
        }else if(type==8){
            {/*港区*/}
            component = <PortDisEchart/>;
        }else if(type==9){
            {/*航线*/}
            component = <LaneEchart/>;
        }
        return(
        <div className="beb_box">
            {component}
        </div>
        )

    }
}

export default connect(
    (state)=>{
        return {
            dataType:state.html.topDataAnalysis.dataType
        }
    }
)(BottomEchartBox);