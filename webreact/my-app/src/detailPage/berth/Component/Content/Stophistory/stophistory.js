import "./index.css";
import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle'
import StophistoryEchart from '../Echarts/stophistoryEchart/StopHistoryEchart'

class stophistory extends Component{
    render(){
        return(
            <div id="portdetail_mode">
                <ModuleTitle title="历史停靠" type="2"/>{/*区别： 如果type为1则背景会被拉长，因为长度未变 */}
                <div>
                    <StophistoryEchart  />
                </div>
            </div>
        )
    }
}
export default stophistory
