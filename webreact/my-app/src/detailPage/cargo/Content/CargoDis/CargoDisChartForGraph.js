import React from 'react';
import color from '../../style/color';
import ReactEcharts from 'echarts-for-react';

const CargoDisChartForGraph = (props) => {
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
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: [1,2,3,4]
        }],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: [
                    {
                        id: 1,
                        name: '中国',
                        symbolSize:50,
                        x: '10',
                        y: '20',
                        category: 1,
                    },
                    {
                        id: 2,
                        name: '美国',
                        x: '30',
                        y: '40',
                        category: 2,
                    },
                    {
                        id: 3,
                        name: '日本',
                        x: '100',
                        y: '200',
                        category: 3,
                    },
                    {
                        id: 4,
                        name: '韩国',
                        x: '400',
                        y: '500',
                        category: 4,
                    }
                ],
                links: [
                    {
                        id: '1_1',
                        source: '1',
                        target: '2',
                    },
                    {
                        id: '1_2',
                        source: '1',
                        target: '3',
                    },
                    {
                        id: '1_3',
                        source: '1',
                        target: '4',
                    },
                    {
                        id: '1_4',
                        source: '2',
                        target: '1',
                    }
                ],
                categories: [1,2,3,4],
                roam: true,
                focusNodeAdjacency: true,
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                },
                emphasis: {
                    lineStyle: {
                        width: 10
                    }
                }
            }
        ]
    };
}
export default CargoDisChartForGraph;