import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import './index.css'
/*柱状图*/
class HistroyServiceStaEchart_line extends Component{
    constructor(){
        super();
    }
    getOption(){
        return {
            color:color,
            xAxis: {
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
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value',
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
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
    }
    render(){
        return (
            <div id="histroyServiceStaEchart_line_box">
                <div className="hsdel_echart_box_tk">
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
export default HistroyServiceStaEchart_line;