import React,{Component} from 'react';
import EchartTopTitle from '../../../../../Components/Content/MenuRight/EchartTopTitle/EchartTopTitle';
import "./index.css";
import portAndBerthService from '../../../../../../axios/portAndBerthServer';
import ReactEcharts from 'echarts-for-react';
import {getOption1, getOption2} from './option';


class BerthEchart extends Component{
    constructor(){
        super();
        this.state = {
            country:[],
            type:[],
        }
    }
    componentWillMount(){
        let self = this;
        portAndBerthService.getPortDistribution({},(data)=>{
            self.doDataPortDistribution(data);
        })
    }
    // 港区分布数据处理
    doDataPortDistribution(){

    }
    render(){
        return(
            <div id="pde_box">
                <div className="pde_echart_1 echart_border">
                    <EchartTopTitle title="港区分布及类型"/>
                    <div className="bee_echart_2_box">
                        <ReactEcharts
                            option={getOption2(this.state, this.state)}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts2'
                        />
                    </div>
                </div>
            </div>
        )

    }
}

export default BerthEchart;