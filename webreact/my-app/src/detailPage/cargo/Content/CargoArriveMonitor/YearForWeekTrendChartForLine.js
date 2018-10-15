import React from 'react';
import color from '../../style/color';
import ReactEcharts from 'echarts-for-react';
import './index.css';

const YearForWeekTrendChartForLine = (props) => {
    return (
        <div className="yfwtcl_box">
            <ReactEcharts
                option={getOption({ ...props })}
                style={{ height: '100%', width: '100%' }}
                className='react_for_echarts'
            />
        </div>
        
    )
}
const getOption = ({ type, data }) => {
    return {
        color: color,
        backgroundColor: "transparent",
        title: {
            text: '全年周走势图',
            textStyle: {
                fontSize: '18px',
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['进口','出口'],
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
            data: type,
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