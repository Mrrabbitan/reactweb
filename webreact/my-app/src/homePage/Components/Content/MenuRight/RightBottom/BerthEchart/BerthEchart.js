import React,{Component} from 'react';
import EchartTopTitle from '../../../../../Components/Content/MenuRight/EchartTopTitle/EchartTopTitle';
import "./index.css";
import portAndBerthService from '../../../../../../axios/portAndBerthServer';
import ReactEcharts from 'echarts-for-react';
import color from '../color';


class BerthEchart extends Component{
    constructor(){
        super();
        this.state = {
            dataEchart1_allData:[],
            dataEchart1_useData:[],
            dataEchart1_name:["石油","lng","lpg","化学品","干散货","集装箱","其他"],
            country:[],
            dataArr:[]
        }
    }
    componentWillMount(){
        let self = this;
        portAndBerthService.getWholeWorldBerth({},(data)=>{
            console.log(data)
            let dataArr1 = data.berthCount;//泊位概况
            let dataArr2 = data.berthDistribution;//泊位分布
            if(dataArr1){
                self.doDataBerthCount(dataArr1);
            }
            if(dataArr2){
                self.doDataBerthDistribution(dataArr2);
            }
        })
    }
    //泊位概况数据处理
    doDataBerthCount(data){
        console.log(data);
        let typeArr = ["石油","lng","lpg","化学品","干散货","集装箱","其他"];
        let dataEchart1_allData = new Array(7).fill(0);
        let dataEchart1_useData = new Array(7).fill(0);
        data.map((item,index)=>{
            let n = typeArr.indexOf(item.name);
            dataEchart1_allData[n] = item.count-item.useCount;
            dataEchart1_useData[n] = item.useCount;
        })
        this.setState({dataEchart1_allData,dataEchart1_useData})
    }
    //泊位分布数据处理
    doDataBerthDistribution(data) {
        let dataArr = [];
        let country = [];
        let typeArr = ["石油","lng","lpg","化学品","干散货","集装箱","其他"];
        data.map((item,index)=>{
            country.push(item[0].country);
            let arr = new Array(7).fill(0);
            for(var i=1;i<item.length;i++){
                let n = typeArr.indexOf(item[i].name);
                arr[n] = item[i].count;
            }
            dataArr.push({
                series: [
                    {
                        barWidth:"30%",
                        data: arr,
                        itemStyle:{
                            normal:{
                                color:function (params){
                                    var colorList = color;
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    },
                    {
                        data: arr,
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
            })
        })
        this.setState({country,dataArr})

    }
    getOption1 = ()=> {
        return {
            color,
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            }
            ,
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            }
            ,
            xAxis : [
                {
                    type : 'category',
                    data : this.state.dataEchart1_name,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize:'12'
                        }
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
                    name:'数量（个）',
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
                    }
                }
            ],
            series : [
                {
                    name:'总数量',
                    type:'bar',
                    barWidth:'30%',
                    stack: '泊位',
                    data:this.state.dataEchart1_allData
                },
                {
                    name:'占用数量',
                    barWidth:'30%',
                    type:'bar',
                    stack: '泊位',
                    data:this.state.dataEchart1_useData
                }
            ]
        }
    };
    getOption2 () {
        return {
            baseOption: {
                timeline: {
                    // y: 0,
                    axisType: 'category',
                    // realtime: false,
                    // loop: false,
                    autoPlay: true,
                    // currentIndex: 2,
                    playInterval: 1000,
                    // controlStyle: {
                    //     position: 'left'
                    // },
                    controlStyle:{
                        show:false,
                    },
                    label:{
                        color:"#fff",
                    },
                    lineStyle:{
                        color:"#0973b2"
                    },
                    bottom:"130",
                    symbolSize:10,
                    data: this.state.country,
                },
                tooltip: {
                },
                legend: {
                    bottom: '5',
                    data: ["石油","lng","lpg","化学品","干散货","集装箱","其他"]
                },
                calculable : true,
                grid: {
                    top: 50,
                    bottom: 200,
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
                        type:'category',
                        data:["石油","lng","lpg","化学品","干散货","集装箱","其他"],
                        splitLine: {show: false},
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize:'12'
                            }
                        },
                        axisLine:{
                            show:true,
                            lineStyle:{
                                color:"#0b6ead",
                            }
                        }
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
                        }
                    }
                ],
                series: [
                    {name: 'berth', type: 'bar'},
                    {
                        name: 'BERTH',
                        type: 'pie',
                        center: ['50%', '80%'],
                        radius: '28%',
                        z: 100
                    }
                ]
            },
            options:this.state.dataArr

        };
    };
    render(){
        return(
            <div id="bee_box">
                <div className="bee_echart_1 echart_border">
                    <EchartTopTitle title="全球泊位概况"/>
                    <div className="bee_echart_1_box">
                        <ReactEcharts
                            option={this.getOption1()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts1'
                        />
                    </div>
                </div>
                <div className="bee_echart_2 echart_border">
                    <EchartTopTitle title="全球泊位概况"/>
                    <div className="bee_echart_2_box">
                        <ReactEcharts
                            option={this.getOption2()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts2'
                        />
                    </div>
                </div>
            </div>
        )

    }
}

export default BerthEchart;