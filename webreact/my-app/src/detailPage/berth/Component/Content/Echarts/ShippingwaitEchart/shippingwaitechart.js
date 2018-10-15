import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css'

class shippingwaitEchart extends Component{
    constructor(){
        super();
        
    }
    getOption(){
        return{
            legend: {
                top: 20,
                textStyle: {
                    color: '#fff',
                },
                data: ['小型', '中型', '大型']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
        
            tooltip: {
                show: "true",
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0.7)', // 背景
                padding: [8, 10], //内边距
                extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
                formatter: function(params) {
                    if (params.seriesIndex === "3" || params.seriesIndex === "4" || params.seriesIndex === "5") {
                        return params.name + '<br>' + params.seriesName + ' ： 待舶时长 ' + params.value + ' 时间';
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83 ',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                },
            },
            xAxis: [{
                    type: 'category',
                    name: 'mmsi',
                    axisTick: {
                        show: true
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#363e83',
                        }
                    },
                    axisLabel: {
                        inside: false,
                        textStyle: {
                            color: '#fff',
                            fontWeight: 'normal',
                            fontSize: '12',
                        },
                    },
                    data: this.props.data.name
                }, {
                    type: 'category',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    data:this.props.data.name
                },
        
            ],
            series: [
               {
                    type: 'bar',
                    xAxisIndex: 1,
                    zlevel: 1,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 0,
                            shadowBlur: {
                                shadowColor: 'transparent',
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowOffsetY: 2,
                            },
                        }
                    },
                    barWidth: '10%',
                    data: [1600, 1600, 1600]
                }, {
                    type: 'bar',
                    xAxisIndex: 1,
                    barGap: '100%',
                    data: [1600, 1600, 1600],
                    zlevel: 1,
                    barWidth: '10%',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 0,
                            shadowBlur: {
                                shadowColor: 'transparent',
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowOffsetY: 2,
                            },
                        }
                    },
                }, {
                    type: 'bar',
                    xAxisIndex: 1,
                    barGap: '100%',
                    data: [1600, 1600, 1600],
                    zlevel: 1,
                    barWidth: '10%',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 0,
                            shadowBlur: {
                                shadowColor: 'transparent',
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowOffsetY: 2,
                            },
                        }
                    },
                }, {
                    name: '小型',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            show: true,
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
                            },
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    zlevel: 2,
                    barWidth: '10%',
                    data:this.props.data.value,
                }, {
                    name: '中型',
                    type: 'bar',
                    barWidth: '10%',
                    itemStyle: {
                        normal: {
                            show: true,
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
                            },
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    zlevel: 2,
                    barGap: '100%',
                    data: this.props.data.value,
                }, {
                    name: '大型',
                    type: 'bar',
                    barWidth: '10%',
                    itemStyle: {
                        normal: {
                            show: true,
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
                            },
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    zlevel: 2,
                    barGap: '100%',
                    data: this.props.data.value,
                }, {
                    name: '平均时长',
                    type: 'line',
                    data: this.props.data.value,
                    itemStyle: {
                      normal: {
                        show: true,
                        color: '#53d0ff'
                      }
                    },
                    smooth: true
                  },
        
            ]
        }
    }
    render(){
        return(
            <div id="shippingwairechart_box">
                <div className="hsdep_echart_box_tk">
                    <ReactEcharts
                        option={this.getOption()}
                        style={{height:'100%',width:'100%'}}
                        className='echart_for_react'                    
                    />
                </div>
            </div>
        )

    }
}

export default shippingwaitEchart;