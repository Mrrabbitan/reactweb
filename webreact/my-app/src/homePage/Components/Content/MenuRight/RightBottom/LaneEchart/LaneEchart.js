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
            dataEchart_useData1:[70,30,40,50,30,20,10,40,50],//河运
            dataEchart_useData2:[30,50,10,90,10,50,80,60,20],//海运
            dataCountry_name:['巴西','德国','印度','日本','意大利','中国','法国','加拿大','美国'],           
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
                data: [{name: '河运',icon: 'circle',textStyle: {font: '10', color: '#00E5EE'}},
                    {name: '海运',icon: 'circle',textStyle: {font: '10', color: '#FFFF00'}}],
                
            },
            tooltip:{ 
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '4%',
                right: '4%',    
                top: 50,
                bottom: 20,
                containLabel: true
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
                    name:'      航线(条)',
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
                    name:'河运',
                    barWidth:'40%',
                    type:'bar',
                    stack: '总数',
                    color:'#00E5EE',
                    data:this.state.dataEchart_useData1
                },
                {
                    name:'海运',
                    barWidth:'40%',
                    type:'bar',
                    stack: '总数',
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
                orient: 'vertical',
                left: 'left',
                textStyle:{
                    color:'white',
                },
                data: ['巴西','德国','印度','日本','意大利','中国','法国','加拿大','美国']
            },
            
            series : [
                {
                    type: 'pie',
                    radius: '60%',
                    center: ['60%', '50%'],
                    data:[
                        {value:30, name:'巴西'},
                        {value:40, name:'德国'},
                        {value:50, name:'印度'},
                        {value:11, name:'日本'},                        
                        {value:87, name:'意大利'},
                        {value:65, name:'中国'},
                        {value:77, name:'法国'},
                        {value:34, name:'加拿大'},
                        {value:87, name:'美国'},
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
                    <EchartTopTitle title="航线分布及类型"/>
                    <div className="le_echart_1_box">
                        <ReactEcharts
                            option={this.getOption1()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts1'
                        />
                    </div>
                </div>
                <div className="le_echart_2  echart_border">
                    <EchartTopTitle title="航线分布及类型"/>
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