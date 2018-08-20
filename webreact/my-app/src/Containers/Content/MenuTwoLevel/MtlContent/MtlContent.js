import React, {Component} from 'react';
import $ from 'jquery'
import CrgoDistribution from '../../../../Components/Content/MenuTwoLevel/MtlContent/CrgoDistribution/CrgoDistribution';
import DataLayer from '../../../../Components/Content/MenuTwoLevel/MtlContent/DataLayer/DataLayer';
import HydroWeather from '../../../../Components/Content/MenuTwoLevel/MtlContent/HydroWeather/HydroWeather';
import LinePlayBack from '../../../../Components/Content/MenuTwoLevel/MtlContent/LinePlayBack/LinePlayBack';
import PowerSearch from '../../../../Components/Content/MenuTwoLevel/MtlContent/PowerSearch/PowerSearch';
import PredictionModel from '../../../../Components/Content/MenuTwoLevel/MtlContent/PredictionModel/PredictionModel';
import ShippingRate from '../../../../Components/Content/MenuTwoLevel/MtlContent/ShippingRate/ShippingRate';
import './index.css';
import '../../../../Assets/style/publicMenuItem.css';
import {connect} from 'react-redux';




class MtlContent extends Component {
    constructor(){
        super();
        this.state = {
            listType:''
        }
    }
    componentWillMount(){
        console.log(this.props.listType)
        if(!this.state.listType) {
            $(".mtlc_box>div").hide();
        }
    }
    render() {
        var dom = '';
        switch(this.props.listType){
            case "datalayer":
                /*数据图层--*/
                dom = (<DataLayer isShow={this.props.listType}/>);
                break;
            case "luxsearch":
                /*高级查询*/
                dom=(<PowerSearch isShow={this.props.listType}/>);
                break;
            case "shippinglayer":
                /*航运网络--*/
                dom = (<ShippingRate isShow={this.props.listType}/>);
                break;
            case "oceanweather":
                /*水文气象--*/
                dom = (<HydroWeather isShow={this.props.listType}/>);
                break;
            case "boatoverflow":
                /*船货分布--*/
                dom = (<CrgoDistribution isShow={this.props.listType}/>);
                break;
            case "tailreview":
                /*轨迹回放*/
                dom = (<LinePlayBack isShow={this.props.listType}/>);
                break;
            case "predictrecommond":
                /*预测推荐*/
                dom = (<PredictionModel isShow={this.props.listType}/>)
                break;
            default:
                break;
        }
        return (
            <div className="mtlc_box">
                {dom}
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return {
            listType:state.html.menuLeft.listType
        }
    }
)(MtlContent);
