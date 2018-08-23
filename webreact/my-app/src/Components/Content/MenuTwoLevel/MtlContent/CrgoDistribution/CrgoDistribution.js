import React,{Component} from 'react';
import './index.css'

class CrgoDistribution extends Component{
    render(){
        return (
            <div className="cd_box">
                {/*船*/}
                <div className="cd_ship">
                    <p className="title_lv1">船</p>
                    <div className="cd_choice_ship">
                        <div className="choice_title">
                            <span>分类</span>
                            <div className="showAllAndClear">
                                <span id="showAllAndClear_all">全选</span>
                                <span id="showAllAndClear_clear">清空</span>
                            </div>
                        </div>
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
                        <div className="choice_title">
                            <span>状态</span>
                        </div>
                        <div className="cd_choice_btn_box">
                            <span className="choice_btn choice_btn_active">航行</span>
                            <span className="choice_btn choice_btn_active">在港</span>
                            <span className="choice_btn choice_btn_active">停港</span>
                        </div>
                        <div className="choice_title">
                            <span>分布</span>
                        </div>
                        <div className="cd_choice_btn_box">
                            <span className="choice_btn choice_btn_active">亚洲</span>
                        </div>
                    </div>
                </div>
                {/*分割线*/}
                <div className="lv2_line"></div>
                {/*货*/}
                <div className="cd_ship">
                    <p className="title_lv1">货</p>
                    <div className="cd_choice_ship">
                        <div className="choice_title">
                            <span>分类</span>
                            <div className="showAllAndClear">
                                <span id="showAllAndClear_all">全选</span>
                                <span id="showAllAndClear_clear">清空</span>
                            </div>
                        </div>
                        <div className="cd_choice_btn_box">
                            <span className="choice_btn choice_btn_active">大豆</span>
                            <span className="choice_btn choice_btn_active">铁矿石</span>
                            <span className="choice_btn choice_btn_active">煤炭</span>
                            <span className="choice_btn choice_btn_active">石油</span>
                            <span className="choice_btn choice_btn_active">天然气</span>
                            <span className="choice_btn choice_btn_active">化学品</span>
                            <span className="choice_btn">其他</span>
                        </div>
                        <div className="choice_title">
                            <span>状态</span>
                        </div>
                        <div className="cd_choice_btn_box">
                            <span className="choice_btn choice_btn_active">航行</span>
                            <span className="choice_btn choice_btn_active">在港</span>
                            <span className="choice_btn choice_btn_active">停港</span>
                        </div>
                        <div className="choice_title">
                            <span>分布</span>
                        </div>
                        <div className="cd_choice_btn_box">
                            <span className="choice_btn choice_btn_active">亚洲</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CrgoDistribution;