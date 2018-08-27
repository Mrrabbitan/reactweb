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
            dataEchart1_allData:[],
            dataEchart1_useData:[],
            dataEchart1_name:[]
        }
    }
    componentWillMount(){
        let self = this;
        portAndBerthService.getWholeWorldBerth({},(data)=>{
            console.log(data)
            let dataArr1 = data.berthCount;//泊位概况
            let dataArr2 = data.berthDistribution;//泊位分布
            if(dataArr1){
                self.doDataBerthCount(dataArr1);
            }
            if(dataArr2){
                self.doDataBerthDistribution(dataArr2);
            }
        })
    }
    //泊位概况数据处理
    doDataBerthCount(data){
        let dataEchart1_allData = [];
        let dataEchart1_useData = [];
        let dataEchart1_name = [];
        data.map((item,index)=>{
            dataEchart1_allData.push(item.allCount);
            dataEchart1_useData.push(item.useConut);
            dataEchart1_name.push(item.name);
        })
        this.setState({dataEchart1_allData,dataEchart1_useData,dataEchart1_name})
    }
    //泊位分布数据处理
    doDataBerthDistribution(data){

    }
    render(){
        return(
            <div id="bee_box">
                <div className="bee_echart_1 echart_border">
                    <EchartTopTitle title="全球泊位概况"/>
                    <div className="bee_echart_1_box">
                        <ReactEcharts
                            option={getOption1(this.state.dataEchart1_allData, this.state.dataEchart1_useData,this.state.dataEchart1_name)}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts1'
                        />
                    </div>
                </div>
                <div className="bee_echart_2 echart_border">
                    <EchartTopTitle title="全球泊位概况"/>
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