import React from 'react';
import CargoDis from './CargoDis';
import BasicInfo from './BasicInfo';
import RelateVoyage from './RelateVoyage';
import CargoArriveMonitor from './CargoArriveMonitor';
import './index.css'

const Content = () => {
    return (
        <div id="content">
            <div className="wrap">  
                {/* 基本信息 */}
                <BasicInfo />
                {/*货物全球分布*/}
                <CargoDis />
                {/* 货物到港监测 */}
                <CargoArriveMonitor/>
                {/* 关联航次 */}
                <RelateVoyage />
            </div>
        </div>
    )
}
export default Content;