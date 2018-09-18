import React, { Component } from 'react';
import Map from '../../Components/Basic/Map';
import ModuleTitleBox from "../../Components/ModuleTitleBox";
import JourneyInfo from "../../Components/Basic/JourneyInfo";
import BasicInfo from './BasicInfo';
import { connect } from 'react-redux';
import * as action from '../../store/actions';
import './index.css';


class Basic extends Component {
    componentDidMount() {
        //船舶详情数据请求
        this.getShipDetailServer();
    }
    //船舶详情数据请求
    getShipDetailServer() {
        this.props.dispatch(action.getShipInfo(this.props.mmsi));
    }
    render() {
        return (
            <div id="basic">
                {/* 加载海图 */}
                <Map />
                {/* 右侧信息展示 */}
                <div className="basic_box">
                    {/* 模块容器 */}
                    <ModuleTitleBox type="1" title="船舶信息">
                        {/* 行程信息 */}
                        <JourneyInfo/>
                        {/* 基本信息 */}
                        <BasicInfo/>
                    </ModuleTitleBox>
                </div>
            </div>
        )
    }
}
export default connect(
    (state) => { 
        return {
            mmsi: state.mmsi,
            shipInfo:state.shipInfo
        }
    },
    null
)(Basic);