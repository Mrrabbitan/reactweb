import React from 'react';
import ModuleTitle from '../../PublicComponent/ModuleTitle/index'
import '../index.css'
import RunningvoyageEchart from '../../Runningvoyagecomponents/Runningvoyage_table/runningvoyageecahrt';
import Runningvoyagetable from '../../Runningvoyagecomponents/Runningvoyage_echart/runningvoyagetable';
class runvoyage extends React.Component{
render(){
    return(
        <div id="runvoyage_box">
            <ModuleTitle title="经营航线" type="2"/>
            <div className="runningvoyage_content">
            {/* 经营航线上方表格 */}
                <Runningvoyagetable/>
            {/* 经营航线下方数据表 */}
                <RunningvoyageEchart/>
            </div>
        </div>

    )

}

}
export default runvoyage;