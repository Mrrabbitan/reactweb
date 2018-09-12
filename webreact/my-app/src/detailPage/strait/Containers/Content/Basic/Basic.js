import React from "react";
import Map from '../../../Components/Content/Map/map';
import BasicInfo from '../../../Components/Content/BasicInfo/basicinfo';
import './index.css'




const basic =(props)=>{
    return(
        <div id="basic">
            {/* 增加海图内容 */}
            <Map/>
            {/* 增加海峡描述信息 */}
            <BasicInfo/>
        </div>
    )
}

export default basic;