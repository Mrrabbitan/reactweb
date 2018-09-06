import React,{Component} from 'react';
import './index.css';
import TypeBtn from './TypeBtn';
import BtnTitle from '../PublicComponent/BtnTitle';

class StopType extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    componentDidMount(){
    }
    render(){
        return (
            <div className="stopType_box">
                <BtnTitle className="stopType_btn">停靠类型</BtnTitle>
                <div className="stopType_btn_box">
                    <TypeBtn active={true}>液化气</TypeBtn>
                    <TypeBtn active={true}>散货</TypeBtn>
                    <TypeBtn active={true}>化学品</TypeBtn>
                    <TypeBtn active={true}>游轮</TypeBtn>
                    <TypeBtn active={true}>集装箱</TypeBtn>
                    <TypeBtn active={true}>普通货</TypeBtn>
                    <TypeBtn active={false}>冷藏</TypeBtn>
                    <TypeBtn active={false}>滚装货</TypeBtn>
                    <TypeBtn active={true}>其他</TypeBtn>
                </div>
            </div>
        )
    }
}

export default StopType;