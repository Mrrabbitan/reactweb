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
        $("#contentleft").animate({left:"0"},300)
    }
    render(){
        return (
            <div className="mtl_title">
                {this.props.title}
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