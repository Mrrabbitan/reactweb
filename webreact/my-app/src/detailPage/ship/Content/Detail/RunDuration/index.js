import React, { Component } from 'react';
import ModuleTitleBox from '../../../Components/ModuleTitleBox';
import RunDurationChartForYear from './RunDurationChartForYear';
import RunDurationChartForMonth from './RunDurationChartForMonth';
import './index.css';


class RunDuration extends Component { 
    handleClickBar = (data) =>{
        console.log(data)
    }
    render() { 
        return (
            <ModuleTitleBox type="2" title="经营时长">
                <div className="runDuration_ofYear_box">
                    {/* 经营时长最近一年 */}
                    <RunDurationChartForYear
                        handleClickBar={this.handleClickBar}
                    />
                </div>
                <div className="runDuration_ofMonth_box">
                    {/* 经营时长按月份 */}
                    <RunDurationChartForMonth
                        
                    />
                </div>
            </ModuleTitleBox>
        )
    }
}
export default RunDuration;