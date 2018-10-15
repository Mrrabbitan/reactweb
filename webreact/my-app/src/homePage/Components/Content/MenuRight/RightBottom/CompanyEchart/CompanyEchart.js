import React,{Component} from 'react';
import EchartTopTitle from '../../../../../Components/Content/MenuRight/EchartTopTitle/EchartTopTitle';
import ReactEcharts from 'echarts-for-react';
import {getOption1,getOption2} from '../../../../../Components/Content/MenuRight/RightBottom/ShipEchart/option';
import portAndBerthService from '../../../../../../axios/portAndBerthServer';
import color from '../color';
import "./index.css"



class LaneEchart extends Component{
    constructor(){
        super();
        this.state = {
            dataEchart_useData1:[70,30,40,50],
            dataEchart_useData2:[30,50,10,90],
            dataCompany_name:['丹麦马士基航运','瑞士地中海航运','法国达飞航运','台湾长荣航运'],           
            dataItem:[]
        }
    }
    getOption1(){
        return {
            getOption1,
            legend: {
                //borderColor: 'rgba(178,34,34)',
                x:'250',
                y:'20',
                data: [{name: '2017',icon: 'circle',textStyle: {font: '10', color: '#00E5EE'}},
                    {name: '2018',icon: 'circle',textStyle: {font: '10', color: '#FFFF00'}}],
                
            },
            tooltip:{ 
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '2%',
                right: '2%',    
                top: 50,
                bottom: 20,
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.state.dataCompany_name,
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
                    name:'      利润(亿)',
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
                    splitNumber:4
                }
            ],
            series : [
                {
                    name:'2017',
                    barWidth:'20%',
                    type:'bar',
                    barGap: 0,
                    color:'#00E5EE',
                    data:this.state.dataEchart_useData1
                },
                {
                    name:'2018',
                    barWidth:'20%',
                    type:'bar',
                    color:'#FFFF00',
                    data:this.state.dataEchart_useData2
                },          
            ]
        }
    }
    getOption2(){
        return {
            tooltip : {
                trigger: 'item',
            },
            legend: {
                type:'scroll',
                bottom: 10,
                left: 'center',
                textStyle:{
                    color:'white',
                },
                data: ['巴西','德国','印度','日本','意大利']
            },
            
            series : [
                {
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '45%'],
                    label: {
                        normal: {
                            formatter: '{b|{b}：}{c}  {per|{d}%}',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                b: {
                                    fontSize: 8,
                                    lineHeight: 20
                                },
                                per: {
                                    color: '#eee',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:10, name:'巴西'},
                        {value:24, name:'德国'},
                        {value:27, name:'印度'},
                        {value:76, name:'日本'},                        
                        {value:14, name:'意大利'},
                    ],
                    itemStyle:{
                        normal: {
                            show: true,
                            color:function (params){
                                var colorList = color;
                                return colorList[params.dataIndex];
                            },
                        }
                    }
                }    
            ]
        }     
    };
    
    render(){
        return(
            <div id="le_box">
                <div className="le_echart_1  echart_border">
                    <EchartTopTitle title="航运公司利润情况"/>
                    <div className="le_echart_1_box">
                        <ReactEcharts
                            option={this.getOption1()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts1'
                        />
                    </div>
                </div>
                <div className="le_echart_2  echart_border">
                    <EchartTopTitle title="航运公司分布"/>
                    <div className="le_echart_2_box">
                        <ReactEcharts
                            option={this.getOption2()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts1'
                        />
                    </div>
                </div>
            </div>
        )

    }
}
export default LaneEchart;