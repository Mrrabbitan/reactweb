import React from 'react';
import color from '../../../style/color';
import ReactEcharts from 'echarts-for-react';

const LivePortChartForBar = (props) => {
    return (
        <ReactEcharts
            option={getOption({ ...props })}
            style={{ height: '100%', width: '100%' }}
            className='react_for_echarts'
        />
    )
}
const getOption = ({ type, data1, data2 }) => {
    return {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: [
                { x: '10%', y: '12%', width: '78%', height: '38%' },
                { x: '10%', y2: '7%', width: '78%', height: '38%' },
            ],
            xAxis: [
                {
                    gridIndex: 0,
                    data: type,
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
                    data: type,
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
                    gridIndex: 0,
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
                {gridIndex: 1, inverse: true,axisLabel: {
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
                    name: '航次',
                    type: 'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    data: data1,
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
                    name: '货量',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: data2,
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
export default LivePortChartForBar;