import React,{Component} from 'react';
import './index.css';
import ck from '../../../../../Assets/image/devices/ck.png';
import ad from '../../../../../Assets/image/devices/ad.png';
import xcsb from '../../../../../Assets/image/devices/xcsb.png';
import qzj from '../../../../../Assets/image/devices/qzj.png';
import zj from '../../../../../Assets/image/devices/zj.png';
import zhgz from '../../../../../Assets/image/devices/zhgz.png';
import zkcxj from '../../../../../Assets/image/devices/zkcxj.png';
import kk from '../../../../../Assets/image/devices/kk.png';


const DeviceImgInfo = ({deviceImgName,deviceName,count}) =>{
    let src;
    switch(deviceImgName){
        case 'ck':
            src = ck;
            break;
        case 'ad':
            src = ad;
            break;
        case 'xcsb':
            src = xcsb;
            break;
        case 'qzj':
            src = qzj;
            break;
        case 'zj':
            src = zj;
            break;
        case 'zhgz':
            src = zhgz;
            break;
        case 'zkcxj':
            src = zkcxj;
            break;
        case 'kk':
            src = kk;
            break;
    }
    return (
    <div className="dii_box">
        <div className="dii_img" data-src={deviceImgName}>
            <img src={src} alt="暂无图片"/>
        </div>
        <div className="dii_name">{deviceName}</div>
        <div className="dii_count">{count}</div>
    </div>
)}

export default DeviceImgInfo;