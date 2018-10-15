import React from 'react';
import CargoDis from './CargoDis';
import BasicInfo from './BasicInfo';
import RelateVoyage from './RelateVoyage';
import CargoArriveMonitor from './CargoArriveMonitor';
import { connect } from 'react-redux';
import './index.css'

const Content = (props) => {
    return (
        <div id="content">
            <div className="wrap">  
                {/* 基本信息 */}
                <BasicInfo />
                {/*货物全球分布*/}
                <CargoDis />
                {/* 货物到港监测 */}
                <CargoArriveMonitor {...props}/>
                {/* 关联航次 */}
                <RelateVoyage />
            </div>
        </div>
    )
}
export default connect(
    state => {
        return {
            cargoType: state.cargoType,
            year:state.year
        }
    }
)(Content);