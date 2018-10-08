import React, { Fragment, Component } from 'react';
import ModuleTitleBox from '../../Components/ModuleTitleBox';
import CurrentWeekInfo from './CurrentWeekInfo';
import YearForWeekTrendChartForLine from './YearForWeekTrendChartForLine';
import './index.css'

class CargoArriveMonitor extends Component {
    render() {
        return (
            <Fragment>
                <ModuleTitleBox type="2" title="到港监测（周报）">
                    <div className="cam_box">
                        {/* 当前周情况 */}
                        <CurrentWeekInfo/>
                        {/* 全年周走势图 */}
                        <YearForWeekTrendChartForLine/>
                    </div>
                </ModuleTitleBox>
            </Fragment>
        )
    }
}

export default CargoArriveMonitor;