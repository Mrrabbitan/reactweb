import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import StatusComponent from '../PublicComponent/StatusComponent';
import server from "../../../../../axios/portAndBerthServer"
import "./index.css"



class BasicInfo extends Component{

    constructor(){
        super();
    }


    render(){
        let newarr = this.props.data?this.props.data:{}
        let straitdetail = newarr.data1?newarr.data1:{};
        let straitstratigy = newarr.data2?newarr.data2:{};

        return (
            <div id="bi_box">
                <div className="bi_basicInfo">
                    <ModuleTitle title="基本信息" type="1"/>
                    <div className="bi_basicInfo_box">
                        <ul>
                            <li><span className="bi_basicInfo_box_item_k">类型：</span><span>海峡</span></li>
                            <li><span className="bi_basicInfo_box_item_k">海域：</span><span>{straitdetail.cent_pos}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">编号：</span><span>{straitdetail.strait_id}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">英文名称：</span><span>{straitdetail.name}</span></li>
                        </ul>
                    </div>
                    <div className="basicinfo_description_indent">
                        <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此海峡是一个大型海峡，
                        该海峡属于<span className="important_words">{straitstratigy.country}</span>，
                        海峡面积约为<span className="important_words">--</span>万平方千米，
                        平均水深<span className="important_words">--</span>米，该海峡允许通过的最大船只的最大长度是<span className="important_words">--</span>米，最大宽度
                            是<span className="important_words">--</span>米，最大吃水深度是<span className="important_words">--</span>米。
                        </span>
                    </div>
                </div>
                <div className="bi_port_status">
                    <ModuleTitle title="战略指数" type="1"/>
                    <div className="bi_port_status_box">
                        <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该海峡主经国家:<span className="important_words">--</span>。
                        每年<span className="important_words">{straitstratigy.sumvoyage}</span>艘船次经过该海峡，占世界贸易的<span className="important_words">--</span>。
                        每年通过大宗商品量<span className="important_words">{straitstratigy.sumbigvoyage}</span>吨，占世界大宗商品贸易的<span className="important_words">--</span>。
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasicInfo