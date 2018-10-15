import React from 'react';
const BasicInfo = (props) => {
    const { latitude, longitude, totalberth, country, facility_type, terminal_operator} = props.data;
    return (
        <div className="basic_info_box">
            <div><span>类型：</span><span>{facility_type}</span></div>
            <div><span>国家：</span><span>{country}</span></div>
            <div><span>经度：</span><span>{longitude}</span></div>
            <div><span>纬度：</span><span>{latitude}</span></div>
            <div><span>泊位：</span><span>{totalberth}个</span></div>
            <div><span>经营公司：</span><span>{terminal_operator}</span></div>
            <div><span>设备及数量：</span></div>
        </div>
    )
}
export default BasicInfo;