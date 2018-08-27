import React,{Component} from 'react'
import BottomEle from "./bottom-element/bottom-picexp"
import './index.css';


class MenuBottom extends Component{
    render(){
        return (
            <div id="contentbottom">
                <BottomEle/>
            </div>
        )
    }
}
export default MenuBottom;