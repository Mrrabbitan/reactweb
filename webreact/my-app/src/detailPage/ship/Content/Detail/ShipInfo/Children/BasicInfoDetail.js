import React from 'react';
import './index.css';

const BasicInfoDetail = (props) => {
    if (!props.data) { 
        return (<div className="bid_box"> 正在加载...</div>);
    }
    console.log(props.data);
    let shipinfo = props.data.detail ? props.data.detail : {};
    return (
        <div>
            <div className="bid_box">
                <div><span>IMO</span>：<span>{shipinfo.imo}</span></div>
                <div><span>船舶类型</span>：<span>{shipinfo.shiptypecode}</span></div>
                <div><span>船长</span>：<span>{shipinfo.lengthloa}</span></div>
                <div><span>建造年份</span>：<span>{shipinfo.builddate}</span></div>
                <div><span>船名</span>：<span>{shipinfo.shipname}</span></div>
                <div><span>呼号</span>：<span>{shipinfo.callsign}</span></div>
                <div><span>船宽</span>：<span>{shipinfo.mouldwidth}m</span></div>
                <div><span>最大航速</span>：<span>{shipinfo.speedmax}节</span></div>
                <div><span>MMSI</span>：<span>{shipinfo.mmsi}</span></div>
                <div><span>船舶状态</span>：<span>{shipinfo.shipstatus}</span></div>
                <div><span>总吨</span>：<span>{shipinfo.cgt}t</span></div>
                <div><span>燃油消耗总量</span>：<span>{shipinfo.fuelconsumptiontotal}</span></div>
                <div><span>船旗国</span>：<span></span>{shipinfo.flagcountry}</div>
                <div><span>主机燃油消耗量</span>：<span>{shipinfo.fuelconsumptionmainenginesonly}</span></div>
                <div><span>载重吨</span>：<span>{shipinfo.deadweight}t</span></div>
                <div><span>经济航速</span>：<span>{shipinfo.speedservice}节</span></div>
                <div><span>Office No</span>：<span>{shipinfo.officialnumber}</span></div>
                <div><span>船舶造价</span>：<span>{shipinfo.newbuildprice}</span></div>
            </div>
        </div>
    )
}
export default BasicInfoDetail;