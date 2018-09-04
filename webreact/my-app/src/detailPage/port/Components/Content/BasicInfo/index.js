import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle'
import StatusComponent from '../PublicComponent/StatusComponent'
import server from '../../../../../axios/portAndBerthServer';
import './index.css'

class BasicInfo extends Component{
    constructor(){
        super();
        this.state= {
            data: null
        }

    }
    componentWillMount(){
        let self = this;
        server.selectBasicInfo({id:'27999'},(data)=>{
            if(data){
                self.setState({data})
            }
        })
    }
    render(){
        return (
            <div id="bi_box">
                <div className="bi_basicInfo">
                    <ModuleTitle title="基本信息" type="1"/>
                    <div className="bi_basicInfo_box">
                        <ul>
                            <li><span className="bi_basicInfo_box_item_k">类型：</span><span>港口</span></li>
                            <li><span className="bi_basicInfo_box_item_k">国家：</span><span>{this.state.data?this.state.data.country_cn_name:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">经度：</span><span>{this.state.data?this.state.data.longitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">纬度：</span><span>{this.state.data?this.state.data.latitude:''}</span></li>
                        </ul>
                        <div className="bi_basicInfo_desc">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此港是一个小型港口，该港属于{this.state.data?this.state.data.country_cn_name:''}，该港最多可容纳13条船，包含货船、邮轮、渔船，允许停泊船只的最大长度129米，最大宽度是20米，最大吃水深度是6米。
                        </div>
                    </div>
                </div>
                <div className="bi_port_status">
                    <ModuleTitle title="港口运行情况" type="1"/>
                    <div className="bi_port_status_box">
                        <StatusComponent name="不压港" color="#41f598"/>
                        <div className="bi_port_status_text">中等繁忙</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BasicInfo;