import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle/index';
import './index.css'
import DeviceDisplay from './Equipment/DeviceDisplay';
import StopType from './Stoptype/StopType';
import Nightworking from './NightService/nightwork';



class berthserve extends Component{
    render(){
        return(
            <div id="berthserve_box" className="port_dis_box_berth_bufen">
                <ModuleTitle title="服务水平" type='2'/>
                <div className="berthserve_content">
                    {/* 拥有设备类别 */}
                    <DeviceDisplay/>
                    <div className="berthserve_box_between_line"></div>
                    {/* 夜间作业 */}
                    <Nightworking/>
                    <div className="berthserve_box_between_line"></div>
                     {/*停靠类型*/}
                     <StopType/>
                </div>

            </div>
        )
    }
}
export default berthserve;

