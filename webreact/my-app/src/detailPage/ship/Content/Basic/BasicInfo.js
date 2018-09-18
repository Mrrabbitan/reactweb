import React from 'react';
import { connect } from 'react-redux';
import './BasicInfo.css';

const BasicInfo = (props) => { 
    const data = getShipDetailData(props.shipInfo);
    if (!data) {
        return null;
     }
    const { mmsi, shipname, callsign, imo, flagcountry, grosstonnage, deadweight, lengthAndWidth, type, eatWater } = data;
    return (
        <ul className="basicInfo_box">
            <li><span>MMSI</span>：<span>{mmsi}</span></li>
            <li><span>船国旗</span>：<span>{flagcountry}</span></li>
            <li><span>船名</span>：<span>{shipname}</span></li>
            <li><span>毛重</span>：<span>{grosstonnage}</span></li>
            <li><span>呼号</span>：<span>{callsign}</span></li>
            <li><span>载重吨</span>：<span>{deadweight}</span></li>
            <li><span>IMO</span>：<span>{imo}</span></li>
            <li><span>吃水</span>：<span>{eatWater}</span></li>
            <li><span>类型</span>：<span>{type}</span></li>
            <li><span>长×宽</span>：<span>{lengthAndWidth}</span></li>
        </ul>
    )
}
//船舶详情数据处理
const getShipDetailData = (dataAll) => {
    if (!dataAll) {
        return false;
    }
    let LSDetail = dataAll.LSDetail;
    let eatWater = LSDetail.F + '米';
    let data = dataAll.detail ? dataAll.detail : {};
    let mmsi = data.mmsi ? data.mmsi : '';//mmsi
    let shipname = data.shipname ? data.shipname : '';//船名
    let callsign = data.callsign ? data.callsign : '';//呼号
    let imo = data.imo ? data.imo : ''; //imo
    let flagcountry = data.flagcountry ? data.flagcountry : '';//国旗图标
    let grosstonnage = (data.grosstonnage ? data.grosstonnage : '') + "t";//毛吨/总吨
    let deadweight = (data.deadweight ? data.deadweight : '') + "t";//载重吨
    let lengthAndWidth = (data.lengthloa ? data.lengthloa : '') + "米 x " + (data.mouldwidth ? data.mouldwidth : '') + "米";//长
    let type = data.shiptypecode ? data.shiptypecode : '';//类型
    return {
        mmsi, shipname, callsign, imo, flagcountry, grosstonnage, deadweight, lengthAndWidth, type, eatWater
    }
    
}

export default connect(
    (state) => { 
        return {
            shipInfo: state.shipInfo
        }
    }
)(BasicInfo);