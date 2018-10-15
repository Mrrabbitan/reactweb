import React from 'react';
import color from '../../../../style/color';
import ReactEcharts from 'echarts-for-react';

const ImportChartForLine = (props) => {
    
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
            data: type
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
            data,
            type: 'line'
        }]
    };
}
export default ImportChartForLine;