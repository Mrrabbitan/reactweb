import React,{Component} from 'react';
import Map from '../../Components/Map/Map';
import './index.css';
import MenuLeft from "../../Components/Content/MenuLeft/MenuLeft"
import MenuRight from "./MenuRight/MenuRight"
import MenuBottom from "../../Components/Content/MenuBottom/MenuBottom"
import MenuTwoLevel from "./MenuTwoLevel/MenuTwoLevel";
import {connect} from "react-redux";



class Content extends Component{
    constructor(){
        super();

    }
    render(){
        return (
            <div className="content_box">
                <Map/>
                <MenuLeft/>
                <MenuTwoLevel/>
                <MenuRight/>           
                <MenuBottom/>
            </div>
        )
    }
}
export default connect(/* 连接react组件与redux store */
    (state) => {
        return {
            state: state /* 输出的全部对象，整个content内部的对象包含http与html */
        }
    }
)(Content)
