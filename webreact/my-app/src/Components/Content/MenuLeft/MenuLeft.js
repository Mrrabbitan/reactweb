import React,{Component} from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import * as Action from '../../../Actions/MenuLeftAction';
import "./index.css";


class MenuLeft extends Component{
    constructor(){
        super();
        this.listClickFun = this.listClickFun.bind(this);
        this.state={
            listType:''
        }
    }
    listClickFun(e){
        console.log("open-----");

        //获取当前组件类型
        this.getThisListType(e);
        //动画执行
        this.animateFun();

    }
    animateFun(){
        $(this.refs.contentleft).animate({left:"-79px"},300);
        $("#mtl_box").animate({left:"0"},300);
    }
    getThisListType(e){
        var type = $(e.currentTarget).attr("id");
        this.props.dispatch(Action.listType(type));
    }
    componentDidUpdate(){
        console.log(this.props)
    }
    render(){
        return (
            <div id="contentleft" ref="contentleft">
                 <div id="datalayer" onClick={this.listClickFun}>
                    <span className="tucenglayer">数据图层</span>
                 </div>
                 <div className="bottomline"></div>

                 <div id="luxsearch" onClick={this.listClickFun}>
                 <span className="tucenglayer">高级查询</span>
                 </div>
                 <div className="bottomline"></div>

                 <div id="shippinglayer" onClick={this.listClickFun}>
                 <span className="tucenglayer">航运网络</span>
                 </div>
                    <div className="bottomline"></div>
                 
                 <div id="oceanweather" onClick={this.listClickFun}>
                 <span className="tucenglayer">水文气象</span>
                 </div>
                 <div className="bottomline"></div>
                 

                 <div id="boatoverflow" onClick={this.listClickFun}>
                 <span className="tucenglayer">货船分布</span>
                 </div>
                 <div className="bottomline"></div>
                 

                 <div id="tailreview" onClick={this.listClickFun}>
                 <span className="tucenglayer">轨迹回放</span>
                 </div>
                 <div className="bottomline"></div>
                 
                 <div id="predictrecommond" onClick={this.listClickFun}>
                 <span className="tucenglayer">预测推荐</span>
                 </div>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return {
            listType:state.html.menuLeft.listType
        }
    }
)(MenuLeft);