import React,{Component} from "react";
import MtlTitle from '../../../Components/Content/MenuTwoLevel/MtlTitle/MtlTitle';
import MtlContent from "./MtlContent/MtlContent";
import './MenuTwoLevel.css'

class MenuTwoLevel extends Component{
    render(){
        return (
            <div id="mtl_box" ref="menuTwoLevel">
                <MtlTitle title="数据图层"/>
                <MtlContent/>
            </div>
        )
    }
}
export default MenuTwoLevel;
