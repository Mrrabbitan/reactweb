import React,{Component} from "react";
import MtlTitle from '../../../Components/Content/MenuTwoLevel/MtlTitle/MtlTitle';
import MtlContent from "./MtlContent/MtlContent";
import {connect} from 'react-redux';
import './MenuTwoLevel.css'

class MenuTwoLevel extends Component{
    render(){
        return (
            <div id="mtl_box" ref="menuTwoLevel">
                <MtlTitle/>
                <MtlContent/>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return {
            listType:state.html.menuLeft.listType
        }
    })(MenuTwoLevel);
