import React,{Component} from 'react';
import EchartTopTitle from '../../../../../Components/Content/MenuRight/EchartTopTitle/EchartTopTitle';
import ReactEcharts from 'echarts-for-react';
import {getOption1,getOption2} from '../../../../../Components/Content/MenuRight/RightBottom/ShipEchart/option';
import portAndBerthService from '../../../../../../axios/portAndBerthServer';
import color from '../color';
import "./index.css"


class CargoEchart extends Component{
    constructor(){
        super();
        this.state = {
            dataEchart_useData1:[70,30,40],//在岗
            dataEchart_useData2:[30,50,10],//在途
            dataEchart_useData3:[20,40,50],//其他
            dataEchart1_name:['大豆','铁矿石','石油'],
            country:[],
            dataItem:[]
        }
    }
    componentWillMount(){
        let self = this;
        let data = [[{country:"巴西"},{count1:"20"},{count1:"30"},{count1:"80"},{count2:"40"},{count2:"70"},{count2:"10"},{count3:"50"},{count3:"70"},{count3:"20"}],
        [{country:"德国"},{count1:"50"},{count1:"10"},{count1:"70"},{count2:"50"},{count2:"90"},{count2:"20"},{count3:"30"},{count3:"50"},{count3:"60"}],
        [{country:"美国"},{count1:"90"},{count1:"60"},{count1:"10"},{count2:"20"},{count2:"30"},{count2:"10"},{count3:"20"},{count3:"40"},{count3:"90"}]];
        self.doDataPortDistribution(data);
    }
    // 货物分布数据处理
    doDataPortDistribution(data){
        let country = [];
        let dataItem = [];
        data.map((item,index)=>{
            country.push(item[0].country);
            let arr = [];
            let arr1 = [];
            let arr2 = [];
            let arr3 = [];
            for(var i=0;i<3;i++){
                let name = "";
                if(i==0){
                    name = "大豆";
                } else if(i==1){
                    name = "铁矿石";
                } else {
                    name = "石油";
                }
                arr.push({name: name,value:parseFloat(item[i+1].count1)+parseFloat(item[i+4].count2)+parseFloat(item[i+7].count3)});
                arr1.push(item[i+1].count1);
                arr2.push(item[i+4].count2);
                arr3.push(item[i+7].count3);
            }
            console.log("arr",arr);
            dataItem.push({
                series: [
                    {
                        name:'其他',
                        barWidth:'20%',
                        type:'bar',
                        stack: '总数',
                        color:'#00E5EE',
                        data:arr1
                    },
                    {
                        name:'在途',
                        barWidth:'20%',
                        type:'bar',
                        stack: '总数',
                        color:'#FFFF00',
                        data:arr2
                    },
                    {
                        name:'在岗',
                        barWidth:'20%',
                        type:'bar',
                        stack: '总数',
                        color:'#D15FEE',
                        data:arr3
                    },
                    {
                        type: 'pie',
                        barWidth:'30%',
                        center: ['50%', '75%'],
                        radius: '28%',
                        z: 100,
                        itemStyle:{
                            normal:{
                                color:function (params){
                                    var colorList = color;
                                    return colorList[params.dataIndex];
                                }
                            }
                        },
                        data:arr
                    }
                ]
            })
        })
        this.setState({dataItem,country})
    }
    getOption1(){
        return {
            getOption1,
            legend: {
                //borderColor: 'rgba(178,34,34)',
                x:'320',
                y:'110',
                data: [{name: '在岗',icon: 'circle',textStyle: {font: '10', color: '#D15FEE'}},
                    {name: '在途',icon: 'circle',textStyle: {font: '10', color: '#FFFF00'}}],
                
            },
            tooltip:{ 
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '10%',
                right: '20%',
                top: 50,
                bottom: 20,
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
                    name:'      数量（亿吨）',
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
                    name:'其他',
                    barWidth:'20%',
                    type:'bar',
                    stack: '总数',
                    color:'#00E5EE',
                    data:this.state.dataEchart_useData1
                },
                {
                    name:'在途',
                    barWidth:'20%',
                    type:'bar',
                    stack: '总数',
                    color:'#FFFF00',
                    data:this.state.dataEchart_useData2
                },
                {
                    name:'在岗',
                    barWidth:'20%',
                    type:'bar',
                    stack: '总数',
                    color:'#D15FEE',
                    data:this.state.dataEchart_useData3
                },                 
            ]
        }
    }
    getOption2(){
        return {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    left:'6%',
                    right:'6%',
                    autoPlay: true,
                    playInterval: 1000,
                    bottom:"167",
                    symbolSize:10,
                    data: this.state.country,
                    controlStyle:{
                        show:false,
                    },
                    label:{
                        color:"#fff",
                        fontSize:'10',
                        interval:0,
                    },
                    lineStyle:{
                        color:"#0973b2"
                    }
                },
                tooltip: {
                },
                calculable : true,
                grid: {
                    left: '18%',
                    right: '20%',
                    top:50,
                    bottom: 250,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
                                show: true,
                                formatter: function (params) {
                                    return params.value.replace('\n', '');
                                }
                            }
                        }
                    }
                },
                xAxis: [
                    {
                        'type':'category',
                        'data':this.state.dataEchart1_name,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize:'12'
                            },
                            interval:0
                        },
                        axisLine:{
                            show:true,
                            lineStyle:{
                                color:"#0b6ead",
                            }
                        },
                        splitLine: {show: false}
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '数量（个）',
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
                    {name: 'Cargo', type: 'bar'},
                    {name: 'CARGO', type: 'pie'}                     
                ]
            },
            options: this.state.dataItem
        }
    }
    render(){
        return(
            <div id="cae_box">
                <div className="cae_echart_1  echart_border">
                    <EchartTopTitle title="全球货物概况"/>
                    <div className="cae_echart_1_box">
                        <ReactEcharts
                            option={this.getOption1()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts1'
                        />
                    </div>
                </div>  
                <div className="cae_echart_2 echart_border">
                    <EchartTopTitle title="各经济体货物"/>
                    <div className="cae_echart_2_box">
                        <ReactEcharts
                            option={this.getOption2()}
                            style={{height: '100%', width: '100%'}}
                            lazyUpdate={true}
                            className='react_for_echarts2'
                        />
                    </div>
                </div>         
            </div>
        )

    }
}

export default CargoEchart;