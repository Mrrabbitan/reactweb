import React, { Component } from 'react';
// import BtnTitle from '../PublicComponent/BtnTitle';
import DeviceImgInfo from './DeviceImgInfo'
import './index.css';

const DeviceDisplay = (props) => {

    const data = props.data;
    return (
        <div className="device_box">
            {/* <BtnTitle className="device_btn">设备</BtnTitle> */}
            {
                data ? <div className="device_img_list_box">
                    <DeviceImgInfo deviceImgName={data.bunkers > 0 ? 'ck' : 'kk'} deviceName={"仓库"} count={data.bunkers + "个"} />
                    <DeviceImgInfo deviceImgName={data.cold_ironing > 0 ? 'ad' : 'kk'} deviceName={"岸电"} count={data.cold_ironing + "个"} />
                    <DeviceImgInfo deviceImgName={data.cow > 0 ? 'xcsb' : 'kk'} deviceName={"洗舱设备"} count={data.cow + "个"} />
                    <DeviceImgInfo deviceImgName={data.cranes > 0 ? 'qzj' : 'kk'} deviceName={"起重机"} count={data.cranes + "台"} />
                    <DeviceImgInfo deviceImgName={data.grabs > 0 ? 'zj' : 'kk'} deviceName={"爪机"} count={data.grabs + "台"} />
                    <DeviceImgInfo deviceImgName={data.load_nozzles > 0 ? 'zhgz' : 'kk'} deviceName={"装货管嘴"} count={data.load_nozzles + "个"} />
                    <DeviceImgInfo deviceImgName={data.vacuator > 0 ? 'zkcxj' : 'kk'} deviceName={"真空抽吸机"} count={data.vacuator + "台"} />
                </div> : <div className="device_img_list_box"></div>
            }

        </div>
    )

}

export default DeviceDisplay;