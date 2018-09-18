import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css'

class historyshipflow extends React.Component{
constructor(){
    super();

}

getOption(){
    return {
       
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '30%',
            top: '20%',
            containLabel: true
        },
        xAxis: [
            {
            type: 'category',
            name:'月份',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#53d0ff'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#53d0ff'
                }
            },
            axisTick: {
                show: false
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }, {
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#53d0ff'
                }
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            offset: 20
        }],
        yAxis: [{
            type: 'value',
            name: '次',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#53d0ff'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#53d0ff'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            left:'20',
            top:'50',
            name: '历史船舶',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbol: 'emptyCircle',
            symbolSize: 12,
            showSymbol: true,
            animationDelay: 2000,
            animationDuration: 1000,
            markPoint: {
                // symbol: 'image://url',
                data: [
                    {type: 'max', name: '最大值'}
                ],
                animationDelay: 3000,
                animationDuration: 1000
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#1697ff' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#57617B' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    opacity: 0.9
                }
            },
            areaStyle:{
                normal:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#0562e2' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#063e90' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#2196f3',
                    borderColor: '#2196f3',
                    borderWidth: 6
    
                }
            },
            data: [220, 182, 191, 134, 250, 120, 110, 125, 145, 122, 165, 122]
        }, ]

    }
}

render(){
    return(
        <div className="history_chart_content">
            <ReactEcharts
                option={this.getOption()}
                style={{height:'130%',width:'100%'}}
                className='react_for_echart'
            />
        </div>
        )
    }
}

export default historyshipflow;