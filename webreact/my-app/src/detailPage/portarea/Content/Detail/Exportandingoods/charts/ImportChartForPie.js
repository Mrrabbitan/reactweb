import React from 'react';
import color from '../../../../style/color';
import ReactEcharts from 'echarts-for-react';

const ImportChartForPie = (props) => {

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
        title: {
            text: '近一年进口',
            x: 'left',
            textStyle: {
                color: '#56daff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            y: 'bottom',
            textStyle: {
                color: '#ffffff',
            },
            data: type
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
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
                data
            }
        ]
    }
}
export default ImportChartForPie;