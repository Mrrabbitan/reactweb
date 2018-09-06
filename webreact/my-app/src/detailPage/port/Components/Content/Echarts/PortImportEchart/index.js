import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import server from '../../../../../../axios/portAndBerthServer';
import './index.css';

class PortImportEchart extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    componentDidMount(){
    }
    getOption1(){
        return {
            color:color,
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                y: 'bottom',
                textStyle:{
                    color:'#ffffff',
                },
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        }
    }
    getOption2(){
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
            <div className="pee_box">
                <div>
                    <ReactEcharts
                        option={this.getOption1()}
                        style={{height: '100%', width: '100%'}}
                        className='react_for_echarts'
                    />
                </div>
                <div>
                    <ReactEcharts
                        option={this.getOption2()}
                        style={{height: '100%', width: '100%'}}
                        className='react_for_echarts'
                    />
                </div>
            </div>
        )
    }
}

export default PortImportEchart;