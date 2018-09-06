import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import ShippingwaitEchart from '../Echarts/ShippingwaitEchart/shippingwaitechart';
import ShippingworkEchart from '../Echarts/ShippingworkEchart/shippingworkEchart';
import "./index.css"


class shippingwait extends Component{
    render(){
        return(
        <div className="port_dis_box">  
            <div id="Shippingwait_mode"> 
            <ModuleTitle title="待泊时长" type="1"/>
                <div className="Shipworkchart1">
                    <ShippingwaitEchart/>
                </div>
            </div>


            <div id="Shippingwork_mode">    
            <ModuleTitle title="作业效率" type="1"/>
                <div className="Shipworkchart2">
                    <ShippingworkEchart/>
                </div>
            </div>
        </div>     
        )

    }

}

export default shippingwait;