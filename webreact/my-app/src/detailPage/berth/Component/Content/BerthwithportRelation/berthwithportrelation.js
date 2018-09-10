import React,{Component} from 'react'
import ModuleTitle from '../PublicComponent/ModuleTitle';
import './index.css'
import BerthandPortrelationechart from '../Echarts/berthandportEchart/berthandportechart'

class berthwithportrelation extends Component{
    render(){
        return(
            <div id='berthportrelation_box'>
                <ModuleTitle title="关联港口" type='2'/>
                <div className="berthportrela_content">
                    <BerthandPortrelationechart/>
                </div>
            </div>

        )
    }

}

export default berthwithportrelation