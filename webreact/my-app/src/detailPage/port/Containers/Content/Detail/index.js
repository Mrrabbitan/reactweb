import React,{Component} from 'react';
import PortDis from '../../../Components/Content/PortDis';
import BerthClass from '../../../Components/Content/BerthClass';
import PortFlow from '../../../Components/Content/PortFlow';
import ServiceSta from '../../../Components/Content/ServiceSta';
import {connect} from 'react-redux';
import '../../../style/page.css';
import './index.css';

class Detail extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div id="detail_box">
                {/*港区信息*/}
                <PortDis portId={this.props.portId}/>
                {/*泊位分类*/}
                <BerthClass portId={this.props.portId}/>
                {/*港口流量*/}
                <PortFlow portId={this.props.portId}/>
                {/*服务水平*/}
                <ServiceSta portId={this.props.portId}/>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return {
            portId: state.globalParams.id
        }
    }
)(Detail);