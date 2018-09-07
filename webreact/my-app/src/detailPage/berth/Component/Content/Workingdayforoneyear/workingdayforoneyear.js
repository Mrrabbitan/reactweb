import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import WorkingoneyearEchart from '../Echarts/WorkingoneyearEchart/workingoneyearecart';
import './index.css'



class workingdayforoneyear extends Component{
    render(){
        return(
            <div id="workingdayforoneyear_box" className="port_dis_box">
                <ModuleTitle title="近一年工作天数" type="2"/>
                <div className="workingoneyear_echarts">
                    <WorkingoneyearEchart/>
                </div>
            </div>
        )
    }
}
export default workingdayforoneyear
