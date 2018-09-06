import React,{Component} from 'react';
import ReactEchart from 'echarts-for-react';
import color from '../color';
import './index.css'


class shiphistoryEchart extends Component{
    constructor(){
        super();
        this.state={
            dataan:[],
        }
        
    }

getOption1(){
    return {
        color:color,
        title : {
            text: '港口停靠船舶',
            subtext:'过去一年',
            x:'left',
            textStyle:{
                color:'#53d0ff',
                fontSize:'18',
                fontWeight:'normal',
            },
            subtextStyle:{
                color:'#53d0ff',
                fontSize:'12',
                fontWeight:'normal',
                align:'top',
            },
            rich:{
                subtextStyle:{
                backgroundColor:'#004ba7',
                }
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            type:'scroll',
            orient: 'horizontal',
            left: '50%',
            bottom:'10',
            textStyle:{
                color:'#ffffff',
            },
            data: ['unknow1','unknow2','unknow3','unknow4','unknow5']
        },
        series : [
            {
                name: '港口停靠数量',
                type: 'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[{value:33,name:'unknow1'},
                {value:43,name:'unknow2'},
                {value:53,name:'unknow3'},
                {value:63,name:'unknow4'},
                {value:73,name:'unknow5'},
            ],
                itemStyle:{
                    normal:{
                        color:function (params){
                            var colorList = color;
                            return colorList[params.dataIndex];
                        }
                    }
                }
            }
        ]
    };

}
getOption2(){
    return {
        title : {
            text: '港口停靠船舶',
            subtext:'过去一年',
            x:'left',
            textStyle:{
                color:'#53d0ff',
                fontSize:'18',
                fontWeight:'normal',
            },
            subtextStyle:{
                color:'#53d0ff',
                fontSize:'12',
                fontWeight:'normal',
                align:'top',
            },
            rich:{
                subtextStyle:{
                backgroundColor:'#004ba7',
                }
            }
        },
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
            name: '移动',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbol: 'circle',
            symbolSize: 5,
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
                            offset: 0, color: '#41f598' // 0% 处的颜色
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
                            offset: 0, color: '#53d0ff' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'transparent' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 12
    
                }
            },
            data: [220, 182, 191, 134, 250, 120, 110, 125, 145, 122, 165, 122]
        }, ]

    }

}

    render(){
        return(
            <div id="shiphistoryEchart_total">
                <div className="hsdep_echart_box_tk">
                    <ReactEchart 
                        option={this.getOption1()}
                        style={{height:'100%', width:'100%'}}
                        className='react_for_echarts'
                    />
                </div>
                <div className="hsdep_echart_box_tk">
                    <ReactEchart
                        option={this.getOption2()}
                        style={{height:'134%', width:'100%'}}
                        className='react_for_echarts'                    
                    />
                </div>
            </div>
        )
    }
}

export default shiphistoryEchart