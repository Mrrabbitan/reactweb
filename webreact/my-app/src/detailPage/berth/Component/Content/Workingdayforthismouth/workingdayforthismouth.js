import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import './index.css'
import WorkingthismouthEcharts from '../Echarts/WorkingthismouthEcharts/workingthismouthechart'

class workingforthismouth extends Component{
    render(){
        return(

            <div id="workingforthismouth_box">
                <ModuleTitle title='当月工作时长' type='2'/>
                <div className='workingforthismouth_box_content'>
                    <WorkingthismouthEcharts/>
                </div>
            </div>
        )
    }

}

export default workingforthismouth;