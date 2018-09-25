import React,{Component} from 'react';
import EchartTopTitle from '../../../../../Components/Content/MenuRight/EchartTopTitle/EchartTopTitle';
import ReactEcharts from 'echarts-for-react';
import {getOption1} from '../../../../../Components/Content/MenuRight/RightBottom/ShipEchart/option';
import "./index.css"


class ShipEchart extends Component{
    constructor(){
        super();
        this.state = {
            dataEchart_useData1:[7,3,4,5,6,1,1,2,7,2],//其他船
            dataEchart_useData2:[3,5,1,2,7,4,5,9,3,6],//靠港船
            dataEchart_useData3:[2,4,5,5,6,4,3,2,1,1],//活跃船
            dataEchart_useData4:[3,5,1,2,7,4,5,9,3,6],//已占用运力
            dataEchart_useData5:[7,3,4,5,6,1,1,2,7,2],//富余运力
            dataEchart_useData6:[31,52,14,20,76,42,53,98,33],//前九国家靠港船
            dataEchart_useData7:[74,32,43,57,69,15,18,29,72],//前九国家富余运力
            dataEchart1_name:['液化气','散货','化学品','游轮','集装箱','普通货','冷藏','滚装货','其他'],
            dataCountry_name:['巴西','德国','印度','日本','意大利','中国','法国','加拿大','美国'],
        }
    }
    getOption1(){
        return {
            getOption1,
            legend: {
                //borderColor: 'rgba(178,34,34)',
                type:'scroll',
                x:'220',
                y:'30',
                data: [{name: '活跃船',icon: 'circle',textStyle: {font: '10', color: '#fff'}},
                    {name: '靠港船',icon: 'circle',textStyle: {font: '10', color: '#fff'}},
                    {name: '其他',icon: 'circle',textStyle: {font: '10', color: '#fff'}}],
                
            },
            tooltip:{ 
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.state.dataEchart1_name,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize:'10',
                        },
                        interval:0,
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:"#0b6ead",
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'      数量（千艘）',
                    nameTextStyle:{
                        color:"#ffeb00"
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#44a1c2',
                            fontSize:'12'
                        }
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:"#0b6ead",
                        }
                    },
                    splitLine:{
                        show:false
                    },
                    splitNumber:5
                }
            ],
            series : [
                {
                    name:'其他',
                    barWidth:'30%',
                    type:'bar',
                    stack: '总数',
                    color:'#ffcc99',
                    data:this.state.dataEchart_useData1
                },
                {
                    name:'靠港船',
                    barWidth:'30%',
                    type:'bar',
                    stack: '总数',
                    color:'#ff9900',
                    data:this.state.dataEchart_useData2
                },
                {
                    name:'活跃船',
                    type:'bar',
                    barWidth:'30%',
                    stack: '总数',
                    color:'#33ff66',
                    data:this.state.dataEchart_useData3
                }                
            ]
        }
    }
    getOption2(){
        return {
            getOption1,
            tooltip:{ 
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                //borderColor: 'rgba(178,34,34)',
                x:'200',
                y:'120',
                data: [{name: '富余运力',icon: 'circle',textStyle: {font: '10', color: '#fff'}},
                {name: '已占用运力',icon: 'circle',textStyle: {font: '10', color: '#fff'}}],
                
            },
            grid: {
                left: '3%',
                right: '4%',
                y:4,
                containLabel: true,
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.state.dataEchart1_name,
                    position: 'top',
                    axisLabel: {
                        show: false,
                        interval:0,
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:"#0b6ead",
                        },
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    inverse : true, 
                    name:'      运力（千吨）',
                    nameTextStyle:{
                        color:"#ffeb00"
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#44a1c2',
                            fontSize:'12'
                        }
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:"#0b6ead",
                        }
                    },
                    splitLine:{
                        show:false
                    },
                    splitNumber:5
                }
            ],
            series : [
                {
                    name:'已占用运力',
                    barWidth:'30%',
                    type:'bar',
                    stack: '总数',
                    color:'#ffcc99',
                    data:this.state.dataEchart_useData4
                },
                {
                    name:'富余运力',
                    barWidth:'30%',
                    type:'bar',
                    stack: '总数',
                    color:'#00ccff',
                    data:this.state.dataEchart_useData5
                }
            ]
        }
    }

    getOption3(){
        return {
            getOption1,
            tooltip:{ 
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.state.dataCountry_name,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize:'10',
                        },
                        interval:0,
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:"#0b6ead",
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'   数量/运力',
                    nameTextStyle:{
                        color:"#ffeb00"
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#44a1c2',
                            fontSize:'12'
                        }
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            color:"#0b6ead",
                        }
                    },
                    splitLine:{
                        show:false
                    },
                    splitNumber:5
                }
            ],
            series : [
                {
                    name:'靠港船',
                    barWidth:'20%',
                    type:'bar',
                    color:'#ff9900',
                    data:this.state.dataEchart_useData6
                },
                {
                    name:'富余运力',
                    barWidth:'20%',
                    type:'bar',
                    color:'#00ccff',
                    data:this.state.dataEchart_useData7
                }
            ]
        }
    }
    render(){
        return(
            <div id="se_box">
                <div className="se_echart_1  echart_border">
                    <EchartTopTitle title="全球船舶概况"/>
                    <div className="se_echart_1_box">
                        <ReactEcharts
                            option={this.getOption1()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts1'
                        />
                        <ReactEcharts
                            option={this.getOption2()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts2'
                        />
                    </div>
                </div>
                <div className="se_echart_2 echart_border">
                    <EchartTopTitle title="全球实时船舶"/>
                    <div className="se_echart_2_box">
                        <ReactEcharts
                            option={this.getOption3()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts2'
                        />
                    </div>
                </div>
            </div>
        )

    }
}
export default ShipEchart;