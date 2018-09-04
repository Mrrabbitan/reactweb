import React,{Component} from 'react';
import "./index.css"
import $ from 'jquery';
import BerthNum from '../../../../Components/Content/MenuRight/RightTop/BerthNum';
import {connect} from 'react-redux';
import * as Action from '../../../../Actions/TopDataAnalysis';

class TopDataAnalysis extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        let self = this;
        //监听类型切换  //选择效果
        $(".tda_num_title").on("click",function(){
            $(".tda_num_title").removeClass("active");
            $(this).addClass("active");
            let type = $(this).attr("data-type");
            self.props.dispatch(Action.dataType(type))
        })
    }
    componentDidUpdate(){
        console.log(this.props.dataType)
    }
    render(){
        return(
        <div className="tda_box">
            <div className="tda_title">
                全球航运总览
            </div>
            <div className="tda_con">
                <div className="tda_num_box">
                    <div className="tda_num_title" data-type="4">
                        <span className="tda_num_title_text">国家地区</span><span className="tda_num_title_icon">图</span>
                    </div>
                    <BerthNum number="233" digit="3" units="个" type="1"/>
                </div>
                <div className="tda_num_box">
                    <div className="tda_num_title active" data-type="1">
                        <span className="tda_num_title_text">港口</span><span className="tda_num_title_icon">图</span>
                    </div>
                    <BerthNum number="6409" digit="4" units="个" type="1"/>
                </div>
                <div className="tda_num_box">
                    <div className="tda_num_title" data-type="8">
                        <span className="tda_num_title_text">港区</span><span className="tda_num_title_icon">图</span>
                    </div>
                    <BerthNum number="4500" digit="4" units="个" type="1"/>
                </div>
                <div className="tda_num_box">
                    <div className="tda_num_title" data-type="2">
                        <span className="tda_num_title_text">泊位</span><span className="tda_num_title_icon">图</span>
                    </div>
                    <BerthNum number="18800" digit="5" units="个" type="1"/>
                </div>
                <div className="tda_num_box">
                    <div className="tda_num_title" data-type="3">
                        <span className="tda_num_title_text">海峡</span><span className="tda_num_title_icon">图</span>
                    </div>
                    <BerthNum number="25" digit="2" units="个" type="1"/>
                </div>

                <div className="tda_num_box">
                    <div className="tda_num_title" data-type="5">
                        <span className="tda_num_title_text">公司</span><span className="tda_num_title_icon">图</span>
                    </div>
                    <BerthNum number="8580" digit="4" units="个" type="1"/>
                </div>
                <div className="tda_num_box">
                    <div className="tda_num_title" data-type="6">
                        <span className="tda_num_title_text">船舶</span><span className="tda_num_title_icon">图</span>
                    </div>
                    <BerthNum number="4500" digit="4" units="个" type="1"/>
                </div>
                <div className="tda_num_box">
                    <div className="tda_num_title" data-type="7">
                        <span className="tda_num_title_text">货物</span><span className="tda_num_title_icon">图</span>
                    </div>
                    <BerthNum number1="4" number2="1" number3="0" float="9" digit="4" units1="类" units="亿吨" type="2"/>
                </div>
                <div className="tda_num_box">
                    <div className="tda_num_title" data-type="9">
                        <span className="tda_num_title_text">航线</span><span className="tda_num_title_icon">图</span>
                    </div>
                    <BerthNum number="500" digit="4" units="艘" type="1"/>
                </div>
            </div>
        </div>
)
    }
}

export default connect(
    (state)=>{
        return {
            dataType:state.html.topDataAnalysis.dataType
        }

    }
)(TopDataAnalysis);