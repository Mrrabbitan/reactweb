import React from 'react';
import color from '../../../style/color';
import ReactEcharts from 'echarts-for-react';

const ImportCountryTenChartForPie = (props) => {
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
            text: '最近一年',
            x: 'left',
            textStyle: {
                fontSize: '16px',
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            type: 'scroll',
            orient: 'horizontal',
            left: '50%',
            bottom: '10',
            textStyle: {
                color: '#ffffff',
            },
            data: type
        },
        series: [
            {
                name: '港口停靠数量',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = color;
                            return colorList[params.dataIndex];
                        }
                    }
                }
            }
        ]
    };
}
export default ImportCountryTenChartForPie;