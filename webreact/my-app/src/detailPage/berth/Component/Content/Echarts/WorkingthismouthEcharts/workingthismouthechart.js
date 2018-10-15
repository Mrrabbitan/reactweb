import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import {connect} from 'react-redux';
import './index.css'


class workingthismouth extends Component{
    constructor(){
        super();

    }
    getOption(){
        return{
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '30%',
                top: '20%',
                containLabel: true
            },
            xAxis: [
                {
                type: 'category',
                name:'日期',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#53d0ff'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color: '#53d0ff'
                    }
                },
                axisTick: {
                    show: false
                },
                data: this.props.dataAndValue?this.props.dataAndValue.day:[],
            }, {
                axisPointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#53d0ff'
                    }
                },
                axisTick: {
                    show: false
                },
                position: 'bottom',
                offset: 20
            }],
            yAxis: [{
                type: 'value',
                name: '小时',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#53d0ff'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color: '#53d0ff'
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            }],
            series: [{
                left:'20',
                top:'50',
                name: '工作时长',
                type: 'line',
                smooth: true,
                stack: '总量',
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: true,
                animationDelay: 2000,
                animationDuration: 1000,
                markPoint: {
                    // symbol: 'image://url',
                    data: [
                        {type: 'max', name: '最大值'}
                    ],
                    animationDelay: 3000,
                    animationDuration: 1000
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#41f598' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#57617B' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        opacity: 0.9
                    }
                },
                areaStyle:{
                    normal:{
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#53d0ff' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'transparent' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(137,189,27)',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
        
                    }
                },
                data:this.props.dataAndValue?this.props.dataAndValue.value:[],
            }, ]
    
        }
    }

    render(){
        console.log(this.props);
        return(
            <div className="workingthismouth_echarts">
                <ReactEcharts
                    option={this.getOption()}
                    style={{height:'120%',width:'100%'}}
                    className={'echart_for_react'}
                />
            </div>
        )
    }
}

export default connect(//数据接收
    (state)=>{
        return {
            dataAndValue:state.data
        }
    }
)(workingthismouth);