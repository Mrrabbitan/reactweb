import React,{Component} from 'react';
import "./index.css"
import  Select  from '../../../../PublicComponent/Select/Select';
import InputSearch from '../../../../PublicComponent/InputSearch/InputSearch';


class PredictionModel extends Component{
    render(){
        return (
            <div id="predictionmodel">
                <div id="boot_top">
                    <span className="prearrship">预抵货船</span>
                    <span className="second_boat">船</span>
                    <InputSearch placeHolder="输入MMSI" getInputValue={this.getInputValue} name="input1"/>
                    <span className="choosetime">选择时段</span><div id="selectbutton">筛选</div>
                    <div id="datechoose">
                        <span className="start_time">开始时间</span>
                        <div id="start_timetable"></div>{/* 暂未做 */}
                        <span className="end_time">结束时间</span>
                        <div id="end_timetable"></div>{/* 暂未做 */}
                    </div>
                    <span className="shiptype">船舶类型</span>
                    <div className="cd_choice_btn_box">
                            <span className="choice_btn choice_btn_active">液化气</span>
                            <span className="choice_btn choice_btn_active">散货</span>
                            <span className="choice_btn choice_btn_active">化学品</span>
                            <span className="choice_btn choice_btn_active">油轮</span>
                            <span className="choice_btn choice_btn_active">集装箱</span>
                            <span className="choice_btn choice_btn_active">普通货</span>
                            <span className="choice_btn">冷藏</span>
                            <span className="choice_btn choice_btn_active">滚装货</span>
                            <span className="choice_btn">其他</span>
                    </div>
                    <InputSearch placeHolder="输入MMSI" getInputValue={this.getInputValue} name="input1"/>
                    <div className="surebutton">确&nbsp;定</div>


                </div>
                
                {/* 船 货 分离*/}
                <div>
                
                    <span className="second_boat">货</span>
                    <InputSearch placeHolder="输入MMSI" getInputValue={this.getInputValue} name="input1"/>
                    <span className="choosetime">选择时段</span><div id="selectbutton1">筛选</div>
                    <div id="datechoose">
                        <span className="start_time">开始时间</span>
                        <div id="start_timetable"></div>{/* 暂未做 */}
                        <span className="end_time">结束时间</span>
                        <div id="end_timetable"></div>{/* 暂未做 */}
                    </div>
                    <span className="shiptype">船舶类型</span>
                    <div className="cd_choice_btn_box">
                            <span className="choice_btn choice_btn_active">液化气</span>
                            <span className="choice_btn choice_btn_active">散货</span>
                            <span className="choice_btn choice_btn_active">化学品</span>
                            <span className="choice_btn choice_btn_active">油轮</span>
                            <span className="choice_btn choice_btn_active">集装箱</span>
                            <span className="choice_btn choice_btn_active">普通货</span>
                            <span className="choice_btn">冷藏</span>
                            <span className="choice_btn choice_btn_active">滚装货</span>
                            <span className="choice_btn">其他</span>
                    </div>
                    <InputSearch placeHolder="输入MMSI" getInputValue={this.getInputValue} name="input1"/>
                    <div className="surebutton">确&nbsp;定</div>

                </div>

                <div className="betweenline"></div>
                  {/* 天气预测*/}
                <div id="predictweather">
                    <div id="predictwenzi"><span id="situationpredic">港况预测</span><span className="dayslater7">未来七天</span></div>
                    <InputSearch placeHolder="输入MMSI" getInputValue={this.getInputValue} name="input1"/>
                    <div className="surebutton">确&nbsp;定</div>
                </div>



            </div>
        )
    }
}
export default PredictionModel;