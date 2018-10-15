import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import StatusComponent from '../PublicComponent/StatusComponent';
import server from "../../../../../axios/berthDetail"
import "./index.css"



class BasicInfo extends Component{

    constructor(){
        super();
        this.state= {
            data1: null
        }

    }
    componentDidMount(){
        let self = this;
        server.selectBasicInfo({berthId:'89198'},(data)=>{
            if(data){
                self.setState({data1:data.data})
            }
        })
    }

    render(){
        let detailinfo=this.state.data1?this.state.data1:[];
        return (
            <div id="bi_box">
                <div className="bi_basicInfo">
                    <ModuleTitle title="基本信息" type="1"/>
                    <div className="bi_basicInfo_box">
                        <ul>
                            <li><span className="bi_basicInfo_box_item_k">所属港口：</span><span>{detailinfo.portname}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">泊位类型：</span><span>{detailinfo.berthType}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">国家：</span><span>{detailinfo.country}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">年通过能力：</span><span>{detailinfo.gasCapacityMax}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">长：</span><span>{detailinfo.shiploamax}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">装卸能力：</span><span>{detailinfo.loadNozzles}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">宽：</span><span>{detailinfo.rampWidth}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">装卸时长：</span><span>{detailinfo.offshore}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">吃水：</span><span>{detailinfo.depthAlongsidelw}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">停靠类型：</span><span>{detailinfo.facilityType}</span></li>
                        </ul>
                        
                    </div>
                </div>
                <div className="bi_port_status">
                    <ModuleTitle title="港口运行情况" type="1"/>
                    <div className="bi_port_status_box">
                        <StatusComponent name={detailinfo.berthStatus} color="#41f598"/>
                        {/* <StatusComponent name="未使用" color="#acd6e5"/> */}
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