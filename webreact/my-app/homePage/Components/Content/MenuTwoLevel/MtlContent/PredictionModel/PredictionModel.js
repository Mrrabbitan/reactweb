import React,{Component} from 'react';
import "./index.css"
import  Select  from '../../../../PublicComponent/Select/Select';
import InputSearch from '../../../../PublicComponent/InputSearch/InputSearch';
import DateTime from 'react-datetime';


class PredictionModel extends Component{
    render(){
        return (
            <div id="pm_box">
                <div className="pm_ship">
                    <p className="title_lv1">预抵船货</p>
                    <p className="title_small">船</p>
                    <InputSearch placeHolder="MMSI/呼号/IMO" getInputValue={this.getInputValue} name="input_ship"/>
                    <p className="title_small">选择时段</p>
                    <div className="pm_time_box">
                        <p className="title_small">开始时间</p>
                        <DateTime defaultValue={new Date()} locale="zh-cn" onChange={this.change}/>
                        <p className="title_small">结束时间</p>
                        <DateTime defaultValue={new Date()} locale="zh-cn" onChange={this.change}/>
                    </div>
                    <p className="title_small">船舶类型</p>
                    <div className="pm_ship_type_box">
                        <span className="choice_btn choice_btn_active" data-type="0101">液化气</span>
                        <span className="choice_btn" data-type="02">散货</span>
                        <span className="choice_btn" data-type="0102">化学品</span>
                        <span className="choice_btn" data-type="0103">油轮</span>
                        <span className="choice_btn" data-type="0303">集装箱</span>
                        <span className="choice_btn" data-type="0301">普通货</span>
                        <span className="choice_btn" data-type="0304">冷藏</span>
                        <span className="choice_btn" data-type="0305">滚装货</span>
                        <span className="choice_btn" data-type="0308">其他</span>
                    </div>
                    <InputSearch placeHolder="目的港口" getInputValue={this.getInputValue} name="input_port_md"/>
                    <div className="common_btn">确定</div>
                </div>
                <div className="pm_cargo">
                    <p className="title_small">货</p>
                    <InputSearch placeHolder="货物名称" getInputValue={this.getInputValue} name="input_cargo"/>
                    <p className="title_small">选择时段</p>
                    <div className="pm_time_box">
                        <p className="title_small">开始时间</p>
                        <DateTime defaultValue={new Date()} locale="zh-cn" onChange={this.change}/>
                        <p className="title_small">结束时间</p>
                        <DateTime defaultValue={new Date()} locale="zh-cn" onChange={this.change}/>
                    </div>
                    <p className="title_small">船舶类型</p>
                    <div className="pm_ship_type_box">
                        <span className="choice_btn choice_btn_active" data-type="0101">液化气</span>
                        <span className="choice_btn" data-type="02">散货</span>
                        <span className="choice_btn" data-type="0102">化学品</span>
                        <span className="choice_btn" data-type="0103">油轮</span>
                        <span className="choice_btn" data-type="0303">集装箱</span>
                        <span className="choice_btn" data-type="0301">普通货</span>
                        <span className="choice_btn" data-type="0304">冷藏</span>
                        <span className="choice_btn" data-type="0305">滚装货</span>
                        <span className="choice_btn" data-type="0308">其他</span>
                    </div>
                    <InputSearch placeHolder="目的港口" getInputValue={this.getInputValue} name="input_port_md"/>
                    <div className="common_btn">确定</div>
                </div>
                <div className="lv2_line"></div>
                <div className="pm_port_pre">
                    <p className="title_lv1">港况预测</p>
                    <InputSearch placeHolder="港口" getInputValue={this.getInputValue} name="input_pm_port_pre"/>
                    <div className="common_btn">确定</div>
                </div>
            </div>
        )
    }
}
export default PredictionModel;