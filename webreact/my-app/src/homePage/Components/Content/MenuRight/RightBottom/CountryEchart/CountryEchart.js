import React,{Component} from 'react';
import EchartTopTitle from '../../EchartTopTitle/EchartTopTitle';
import "./index.css"
import ReactEcharts from 'echarts-for-react';

import color from '../color';


class CountryEchart extends Component{
    getOption(){
        return{
            legend:{
                data:['国家','地区'],
                textStyle:{
                    color:'white',
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
        
            tooltip:{
                show:true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83 ',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                },
            },
            xAxis: [{
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#363e83',
                        }
                    },
                    axisLabel: {
                        inside: false,
                        textStyle: {
                            color: '#fff',
                            fontWeight: 'normal',
                            fontSize: '12',
                        },
                    },
                    nameGape:-25,
                    data: ['亚洲', '北美洲', '南美洲','欧洲','大洋洲','非洲']
                }
        
            ],
            series: [
                
                {
                name:'国家',
                type: 'bar',
                barWidth: '30%',
              
                markPoint: {
                    // symbol: 'image://url',
                    data: [
                        {type: 'max', name: '最大值'}
                    ],
                    animationDelay: 3000,
                    animationDuration: 1000
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#56f893' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'transparent' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                data: [48,23,12,44,16,54]
            },{
                name:'地区',
                type: 'bar',
                barWidth: '30%',
                markPoint: {
                    data: [
                        {type: 'min', name: '最小值'}
                    ],
                    animationDelay: 3000,
                    animationDuration: 1000
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#fff49a' // 0% 处的颜色
                            }, 
                            {
                                offset: 1, color: 'transparent' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                data: [0,13,1,1,13,7]
            }
               
        
            ]
        }

    }
    getOption1(){
        return{
            tooltip: {
                trigger: 'item',
            },
            legend: {
                type:'scroll',
                orient: 'vertical',
                x: 'left',
                textStyle:{
                    color:'white',
                },
                data:['亚洲','北美洲','南美洲','欧洲','大洋洲','非洲']
            },
            series: [
                {
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    itemStyle:{
                        normal: {
                            show: true,
                            color:function (params){
                                var colorList = color;
                                return colorList[params.dataIndex];
                            },//非对象，非数组。
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:0, name:'亚洲'},
                        {value:13, name:'北美洲'},
                        {value:1, name:'南美洲'},
                        {value:1, name:'欧洲'},
                        {value:13, name:'大洋洲'},
                        {value:7, name:'非洲'},
                    ]
                },
                {
                    type:'pie',
                    radius: ['40%', '55%'],
                    //48,23,12,44,16,54
                    itemStyle:{
                        normal: {
                            show: true,
                            color:function (params){
                                var colorList = color;
                                return colorList[params.dataIndex];
                            },//非对象，非数组。
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    },
                    data:[
                        {value:48, name:'亚洲'},
                        {value:23, name:'北美洲'},
                        {value:12, name:'南美洲'},
                        {value:44, name:'欧洲'},
                        {value:16, name:'大洋洲'},
                        {value:54, name:'非洲'},
                    ]
                }
            ]

        }
    }
    render(){
        return(
            <div id="coe_box">
                <div id="countryandarea_top">
                    <EchartTopTitle title="全球国家与地区"/>
                    <div className="countryandarea_echart">
                        <ReactEcharts
                            option={this.getOption()}
                            style={{height:'90%',width:'100%'}}
                            className={'reacts_echarts'}
                        />
                    </div>
                </div>
                <div id="countryandarea_bottom">
                    <EchartTopTitle title="全球国家与地区"/>
                    <div className="countryandarea_echart">
                        <ReactEcharts
                            option={this.getOption1()}
                            style={{height:'100%',width:'100%'}}
                            className={'reacts_echarts'}
                        />
                    </div>
                </div>
            </div>
        )

    }
}

export default CountryEchart;