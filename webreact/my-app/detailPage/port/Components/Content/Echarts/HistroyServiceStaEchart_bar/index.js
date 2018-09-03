import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import './index.css'
/*柱状图*/
class HistroyServiceStaEchart_bar extends Component{
    constructor(){
        super();
    }
    getOption(){
        return {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                }
            ],
            yAxis : [
                {
                    type : 'value',
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
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
    }
    render(){
        return (
            <div id="histroyServiceStaEchart_bar_box">
                    <div className="hsdeb_echart_box_tk">
                        <ReactEcharts
                            option={this.getOption()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts'
                        />
                </div>

            </div>
        )
    }
}
export default HistroyServiceStaEchart_bar;