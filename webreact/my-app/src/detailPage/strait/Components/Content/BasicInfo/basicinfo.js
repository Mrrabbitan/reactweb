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
                            <li><span className="bi_basicInfo_box_item_k">类型：</span><span>海峡</span></li>
                            <li><span className="bi_basicInfo_box_item_k">海域：</span><span>{this.state.data?this.state.data.country_cn_name:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">经度：</span><span>{this.state.data?this.state.data.longitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">纬度：</span><span>{this.state.data?this.state.data.latitude:''}</span></li>
                        </ul>
                    </div>
                    <div className="basicinfo_description_indent">
                        <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此海峡是一个小型海峡，
                        该海峡属于中国，海峡面积约为5000万平方千米，平均水深5米，该海峡允许通过的最大船只的最大长度是481米，最大宽度
                            是124米，最大吃水深度是25米。
                        </span>
                    </div>
                </div>
                <div className="bi_port_status">
                    <ModuleTitle title="战略指数" type="1"/>
                    <div className="bi_port_status_box">
                        <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该海峡主经国家:日本、新加坡、马来西亚、中国、韩国、泰国、越南。
                        每年1804912艘船次经过该海峡，占世界贸易的23.00%。每年通过大宗商品量4932313123吨，占世界大宗商品贸易的27.76%。
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasicInfo