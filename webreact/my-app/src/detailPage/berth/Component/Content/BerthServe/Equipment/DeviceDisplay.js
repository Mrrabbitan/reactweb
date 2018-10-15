import React,{Component} from 'react';
import BtnTitle from '../../PublicComponent/BtnTitle/index';
import DeviceImgInfo from './DeviceImgInfo'
import server from '../../../../../../axios/berthDetail';
import '../index.css';

class DeviceDisplay extends Component{
    constructor(){
        super();
        this.state = {
            data:[],
            berth:'34643',
        }
    }
    componentDidMount(){
        server.selectBasicInfo({berthId:this.state.berth},(data)=>{
           if(data){
            this.setState({data:data.data})
           }
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }

    

    render(){
        const data = this.state.data;
        return (
            <div className="device_box">
                <BtnTitle className="device_btn">设备</BtnTitle>
                {
                    data?<div className="device_img_list_box">
                        <DeviceImgInfo deviceImgName={data.bunkers!=='N'?'ck':'kk'} deviceName={"仓库"} count={data.bunkers!=='N'?"1个":"0个"}/>
                        <DeviceImgInfo deviceImgName={data.cold_ironing!=='N'?'ad':'kk'} deviceName={"岸电"} count={data.cold_ironing!=='N'?"1个":"0个"}/>
                        <DeviceImgInfo deviceImgName={data.cow!=='N'?'xcsb':'kk'} deviceName={"洗舱设备"} count={data.cow!=='N'?"1个":"0个"}/>
                        <DeviceImgInfo deviceImgName={data.cranes!=='N'?'qzj':'kk'} deviceName={"起重机"} count={data.cranes!=='N'?"1个":"0个"}/>
                        <DeviceImgInfo deviceImgName={data.grabs!=='N'?'zj':'kk'} deviceName={"爪机"} count={data.grabs!=='N'?"1个":"0个"}/>
                        <DeviceImgInfo deviceImgName={data.load_nozzles!=='N'?'zhgz':'kk'} deviceName={"装货管嘴"} count={data.load_nozzles!=='N'?"1个":"0个"}/>
                        <DeviceImgInfo deviceImgName={data.vacuator!=='N'?'zkcxj':'kk'} deviceName={"真空抽吸机"} count={data.vacuator!=='N'?"1个":"0个"}/>
                    </div>:''
                }

            </div>
        )
    }
}

export default DeviceDisplay;