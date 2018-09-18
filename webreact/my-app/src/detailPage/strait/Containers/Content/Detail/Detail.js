import React from 'react'
import './index.css'
import Tempship from '../../../Components/Content/Tempship/tempship';
import Historyshipflow from '../../../Components/Content/Historyship/historyship';
import Relationwithother from '../../../Components/Content/RelationwithOther/relationwithother';


const detail = (props)=>{
    return(
        <div id="detail_box">
        {/* 实时船舶模块 */}
            <Tempship/>
        {/* 历史船舶流量 */}
            <Historyshipflow/>
        {/* 关联关系 */}
            <Relationwithother/>
        </div>
    )
}
export default detail;