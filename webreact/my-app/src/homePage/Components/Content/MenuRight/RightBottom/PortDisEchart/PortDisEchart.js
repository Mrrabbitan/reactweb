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
            country:[],
            dataItem:[]
        }
    }
    componentWillMount(){
        let self = this;
        portAndBerthService.getPortDistribution({},(data)=>{
            console.log("data",data);
            self.doDataPortDistribution(data);
        })
    }
    // 港区分布数据处理
    doDataPortDistribution(data){
        let country = [];
        let dataItem = [];
        ////['散货', '油气', '集装箱']
        data.map((item,index)=>{
            country.push(item[0].country);
            let arr = [];
            for(var i=0;i<3;i++){
                arr.push(item[i+1].count);
            }
            dataItem.push({
                series: [
                    {
                        data: arr,
                        barWidth:'30%',
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
                        barWidth:'30%',
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
        this.setState({dataItem,country})
    }
    getOption (){

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
                    bottom:"130",
                    symbolSize:10,
                    data: this.state.country,
                    controlStyle:{
                        show:false,
                    },
                    label:{
                        color:"#fff",
                    },
                    lineStyle:{
                        color:"#0973b2"
                    }
                },
                tooltip: {
                },
                legend: {
                    bottom: '5',
                    data: ['散货', '油气', '集装箱']
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
                        'type':'category',
                        'data':['散货', '油气', '集装箱'],
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
                        },
                        splitLine: {show: false}
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '数量（艘）',
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
            options: this.state.dataItem
        };
    };

    render(){
        console.log("render")
        console.log(this.getOption());
        return(
            <div id="pde_box">
                <div className="pde_echart_1 echart_border">
                    <EchartTopTitle title="港区分布及类型"/>
                    <div className="bee_echart_2_box">
                        <ReactEcharts
                            option={this.getOption()}
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

export default BerthEchart;