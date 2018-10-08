import React from 'react';
import color from '../../style/color';
import ReactEcharts from 'echarts-for-react';

const YearForWeekTrendChartForLine = (props) => {
    return (
        <ReactEcharts
            option={getOption({ ...props })}
            style={{ height: '100%', width: '100%' }}
            className='react_for_echarts'
        />
    )
}
const getOption = ({ type, data }) => {
    return {
        color: color,
        backgroundColor: "transparent",
        title: {
            text: '最近一年',
            textStyle: {
                fontSize: '16px',
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: type,
            textStyle: {
                color: '#ffffff',
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
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
            splitLine: {
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
        series: data,
    }
}
export default YearForWeekTrendChartForLine;