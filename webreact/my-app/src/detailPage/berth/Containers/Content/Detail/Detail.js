import React,{Component} from 'react';
import Stophistory from '../../../Component/Content/Stophistory/stophistory';
import Shippingwait from '../../../Component/Content/ShippingWait/shippingwait';

import './index.css'
import Berthserve from '../../../Component/Content/BerthServe/berthserve';
import Workingdayforoneyear
    from '../../../Component/Content/Workingdayforoneyear/workingdayforoneyear';



class Detail extends Component{
    render(){
        return(
            <div id="detail_box">
                {/* 停泊历史 */}
                <Stophistory/>
                {/* 泊位服务 */}
                <Berthserve/>
                {/* 待舶时长 */}
                <Shippingwait/>    
                {/* 近一年工作天数 */}
                <Workingdayforoneyear/>  
            </div>

        )

    }
}

export default Detail;