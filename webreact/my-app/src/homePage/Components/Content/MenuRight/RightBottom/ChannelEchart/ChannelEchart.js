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
            dataEchart_useData1:[70,30,40,50,30,20,10],
            dataContinent_name:['亚洲','欧洲','北美洲','南美洲','大洋洲','非洲','南极洲'],           
            dataItem:[]
        }
    }
    getOption1(){
        return {
            getOption1,
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
                    data : this.state.dataContinent_name,
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
                    name:'      海峡(个)',
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
                    name:'海峡',
                    barWidth:'30%',
                    type:'bar',
                    color:'#7CFC00',
                    data:this.state.dataEchart_useData1
                },        
            ]
        }
    }
    getOption2(){
        return {
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)",
            },
            legend: {
                type:'scroll',
                orient: 'vertical',
                left: 'left',
                textStyle:{
                    color:'white',
                },
                data: ['亚洲','欧洲','北美洲','南美洲','大洋洲','非洲','南极洲']
            },
            
            series : [
                {
                    type: 'pie',
                    radius: '60%',
                    center: ['60%', '50%'],
                    data:[
                        {value:30, name:'亚洲'},
                        {value:40, name:'欧洲'},
                        {value:50, name:'北美洲'},
                        {value:11, name:'南美洲'},                        
                        {value:87, name:'大洋洲'},
                        {value:65, name:'非洲'},
                        {value:77, name:'南极洲'},
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
                    <EchartTopTitle title="海峡分布"/>
                    <div className="le_echart_1_box">
                        <ReactEcharts
                            option={this.getOption1()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts1'
                        />
                    </div>
                </div>
                <div className="le_echart_2  echart_border">
                    <EchartTopTitle title="海峡分布"/>
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