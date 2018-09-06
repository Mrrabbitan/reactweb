import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import server from '../../../../../../axios/portAndBerthServer';
import './index.css';

class StopTimeEchart extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    componentDidMount(){
    }
    getOption(){
        return {
            color:color,
            title : {
                text: '待泊时长',
                x:'left',
                textStyle:{
                    color:'#56daff'
                }
            },
            legend: {
                textStyle:{
                    color:'#ffffff',
                },
                data:['100～200','200～400','400～600','平均时长']
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: '12'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#0b6ead",
                        }
                    },
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min: 0,
                    max: 4500,
                    name: '检查批次数',
                    nameTextStyle:{
                        color:'#ffeb00'
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#44a1c2',
                            fontSize: '12'
                        },
                        formatter: '{value}'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#0b6ead",
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name:'100～200',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: color[0]
                        }
                    },
                    data:[2990, 2900, 3133, 3433, 3233, 3333, 3133, 2933, 3033, 2630, 2730,2913],
                },
                {
                    name:'200～400',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: color[1]
                        }
                    },
                    data:[800, 833, 933, 1003, 933, 1083, 1150, 1329, 1473, 1003, 743,763],
                },
                {
                    name:'400～600',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: color[2]
                        }
                    },
                    data:[800, 833, 933, 1003, 933, 1083, 1150, 1329, 1473, 1003, 743,763],
                },
                {
                    name:'平均时长',
                    type:'line',
                    itemStyle: {
                        normal: {
                            color: color[3]
                        }
                    },
                    data:[268, 287, 298, 292, 289, 325, 368, 453, 486, 381, 272, 262],
                }
            ]
        };
    }
    render(){
        return (
            <div className="ste_box">
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '100%', width: '100%'}}
                    className='react_for_echarts'
                />
            </div>
        )
    }
}

export default StopTimeEchart;