import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import './index.css'

class PortFlowEchart extends Component {
    constructor() {
        super();
    }

    getOption() {
        return {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: [
                {x: '7%', y: '7%', width: '78%', height: '38%'},

                {x: '7%', y2: '12.3%', width: '78%', height: '38%'},

            ],
            xAxis: [
                {
                    gridIndex: 0,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {show: false},
                    nameGap: '50',
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
                {
                    gridIndex: 1,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {show: false},
                    axisLabel: {
                        show: false,
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
            ],
            yAxis: [
                {
                    gridIndex: 0, min: 0, max: 60,
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
                {gridIndex: 1, min: 0, max: 10, inverse: true,axisLabel: {
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
                    }},

            ],
            series: [
                {
                    name: 'bar',
                    type: 'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    data: [30, 14, 28, 49, 60, 9, 44],
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = color;
                                return colorList[params.dataIndex];
                            }
                        }
                    },
                    barWidth: 20,

                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                },
                {
                    name: 'bar2',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: [2, 7, 3, 2, 0, 1, 8],
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = color;
                                return colorList[params.dataIndex];
                            }
                        }
                    },
                    barWidth: 20,
                    label: {
                        normal: {
                            show: true,
                            position: 'bottom'
                        }
                    },
                },
            ]
        };
    }

    render() {
        return (
            <div id="portFlowEchart_box">
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '100%', width: '100%'}}
                    className='react_for_echarts'
                />
            </div>
        )
    }
}
export default PortFlowEchart;