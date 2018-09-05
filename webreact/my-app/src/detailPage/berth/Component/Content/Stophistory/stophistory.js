import "./index.css";
import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle'


class stophistory extends Component{
    render(){
        return(
            <div id="portdetail_mode">
                <ModuleTitle title='历史停靠' type="1"/>
            </div>
        )
    }
}
export default stophistory
