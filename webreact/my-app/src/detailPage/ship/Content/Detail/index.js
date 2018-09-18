import React, { Component } from 'react';
// import ModuleTitleBox from '../../Components/ModuleTitleBox';
import AnomalyEvent from './AnomalyEvent';
import HisVoyageCount from './HisVoyageCount';
import RunDuration from './RunDuration';
import ShipInfo from './ShipInfo';
import { connect } from 'react-redux';
import './index.css'

const Detail = (props) => {
    return (
        <div>
            {/* 异常事件 */}
            <AnomalyEvent {...props}/>
            {/* 历史航次 */}
            <HisVoyageCount {...props}/>
            {/* 经营时长 */}
            <RunDuration {...props}/>
            {/* 船舶资料 */}
            <ShipInfo {...props}/>
        </div>
    )
}

export default connect(
    (state) => { 
        return {
            mmsi: state.mmsi,
            shipId: state.shipId
        }
    }
)(Detail);