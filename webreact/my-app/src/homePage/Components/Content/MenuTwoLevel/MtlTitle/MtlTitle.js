import React,{Component} from 'react';
import $ from 'jquery';
import './index.css';
import * as Action from '../../../../Actions/MenuLeftAction';
import {connect} from 'react-redux';

class MtlTitle extends Component{
    constructor(){
        super();
        this.closeMenuTwoLv = this.closeMenuTwoLv.bind(this);
    }
    closeMenuTwoLv(e){
        console.log("close-----");
        //执行动画
        this.animateFun();
        //状态清除
        this.props.dispatch(Action.listType(''));
    }
    animateFun(){
        $("#mtl_box").animate({left:"-145px"},300);
        $("#contentleft").animate({left:"0"},300);
        let w = $("body").width();
        $("#contentbottom").animate({width:w-79+"px"},300);
        $("#mtl_box").css("height","auto");
        $("#mtl_box").removeClass("ps_style");
    }
    render(){
        let title = '';
        switch(this.props.listType){
            case "datalayer":
                /*数据图层--*/
                title = "数据图层";
                break;
            case "luxsearch":
                /*高级查询*/
                title = "高级查询";
                break;
            case "shippinglayer":
                /*航运网络--*/
                title = "航运网络";
                break;
            case "oceanweather":
                /*水文气象--*/
                title = "水文气象";
                break;
            case "boatoverflow":
                /*船货分布--*/
                title = "船货分布";
                break;
            case "tailreview":
                /*轨迹回放*/
                title = "轨迹回放";
                break;
            case "predictrecommond":
                /*预测推荐*/
                title = "预测推荐";
                break;
            default:
                break;
        }
        return (
            <div className="mtl_title">
                {title}
                <span className="mtl_close" ref="mtl_close" onClick={this.closeMenuTwoLv}>×</span>
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
)(MtlTitle);