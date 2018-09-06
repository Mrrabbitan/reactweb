import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css'

class shippingworkEchart extends Component{
    constructor(){
        super();
        this.state={


        }

    }

    getOption(){
        return{
            legend: {
                top: 20,
                textStyle: {
                    color: '#fff',
                },
                data: ['100-200', '200-400', '400-600']
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
                    if (params.seriesIndex == "3" || params.seriesIndex == "4" || params.seriesIndex == "5") {
                        return params.name + '<br>' + params.seriesName + ' ： 第 ' + params.value + ' 名';
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
                    axisTick: {
                        show: false
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
                        // formatter:function(val){
                        //     return val.split("").join("\n")
                        // },
                    },
                    data: ['散货船', '集装箱', '油气船']
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
                    data: ['散货船', '集装箱', '油气船']
                },
        
            ],
            series: [{
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
                    data: [600, 600, 600]
                }, {
                    type: 'bar',
                    xAxisIndex: 1,
                    barGap: '100%',
                    data: [600, 600, 600],
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
                    data: [600, 600, 600],
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
                    name: '100-200',
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
                    data: [80, 150, 100]
                }, {
                    name: '200-400',
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
                    data: [80, 170, 260]
                }, {
                    name: '400-600',
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
                    data: [80, 170, 260]
                }
        
            ]
        }
    }

    render(){
        return(
            <div id="shippingworkEchart_box">
                <div className="hsdep_echart_box_tk">
                    <ReactEcharts 
                        option={this.getOption()}
                        style={{height:'100%',width:'100%'}}
                        className='react_for_echart'
                    />
                </div>
            </div>
        )

    }

}

export default shippingworkEchart;