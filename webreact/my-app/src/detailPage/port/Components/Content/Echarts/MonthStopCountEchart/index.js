import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import './index.css'

class MonthStopCountEchart extends Component{
    constructor(){
        super();
    }
    getOption(){
        return {
            color:color,
            backgroundColor:"transparent",
            title: {
                text: '每月船舶停靠次数',
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['同比','环比'],
                textStyle:{
                    color:'#ffffff',
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
                }
            },
            yAxis: {
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#44a1c2',
                        fontSize: '12'
                    }
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
            },
            series: [
                {
                    name:'同比',
                    type:'line',

                    stack: '总量',
                    data:[4.6, 3.7, 2.4, 4.4, 1.2, 3.2, 6, 3.2, 0.1, 2.4, 0.3, 2.1]

                },
                {
                    name:'环比',
                    type:'line',
                    stack: '总量',
                    data:[6, 20, 8, 4,9.5,26,10.3,9.6,5.8,6.2,16.6,16]
                }
            ]
        }
    }
    render(){
        return (
            <div id="monthStopCountEchart_box">
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '100%', width: '100%'}}
                    className='react_for_echarts'
                />
            </div>
        )
    }
}
export default MonthStopCountEchart;