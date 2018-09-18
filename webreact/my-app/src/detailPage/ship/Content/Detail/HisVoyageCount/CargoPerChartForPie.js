import React from 'react';
import color from '../../../style/color';
import ReactEcharts from 'echarts-for-react';

const CargoPerChartForPie = (props) => {
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
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        grid: [
            { x: '7%', y: '7%', width: '78%', height: '78%', top: '25%'}
        ],
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
                name: '货物比例',
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
export default CargoPerChartForPie;