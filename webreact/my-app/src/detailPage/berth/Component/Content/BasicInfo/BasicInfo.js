import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import StatusComponent from '../PublicComponent/StatusComponent';
import server from "../../../../../axios/portAndBerthServer"
import "./index.css"



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
                            <li><span className="bi_basicInfo_box_item_k">所属港口：</span><span>上海港</span></li>
                            <li><span className="bi_basicInfo_box_item_k">靠泊能力：</span><span>{this.state.data?this.state.data.country_cn_name:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">国家：</span><span>{this.state.data?this.state.data.longitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">年通过能力：</span><span>{this.state.data?this.state.data.latitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">长：</span><span>{this.state.data?this.state.data.latitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">装卸能力：</span><span>{this.state.data?this.state.data.latitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">宽：</span><span>{this.state.data?this.state.data.latitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">装卸时长：</span><span>{this.state.data?this.state.data.latitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">吃水：</span><span>{this.state.data?this.state.data.latitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">停靠类型：</span><span>{this.state.data?this.state.data.latitude:''}</span></li>
                        </ul>
                        
                    </div>
                </div>
                <div className="bi_port_status">
                    <ModuleTitle title="港口运行情况" type="1"/>
                    <div className="bi_port_status_box">
                        <StatusComponent name="在用" color="#41f598"/>
                        <StatusComponent name="未使用" color="#acd6e5"/>
                        <div className="stop_time">
                            <span className="stop_time_top">已用时长</span>
                            <span className="stop_time_bottom">5小时24分</span>
                        </div>
                        <div className="between_line"></div>
                        <div className="stop_time">
                            <span className="stop_time_top">停泊船舶</span>
                            <span className="stop_time_bottom1">电科一号(5752133)</span>
                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }
}

export default BasicInfo