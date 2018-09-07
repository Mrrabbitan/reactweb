import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import server from '../../../../../../axios/portAndBerthServer';
import color from '../color';
import './index.css'
/*柱状图*/
class HistroyServiceStaEchart_bar extends Component{
    constructor(props){
        super(props);
        this.state = {
            year: props.year,
            data: [],
            type: [],
            option: {
                color,
                tooltip: {
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
                xAxis: [
                    {
                        type: 'category',
                        data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: '12'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#0b6ead",
                            }
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#44a1c2',
                                fontSize: '12'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#0b6ead",
                            }
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: 'gangko ',
                        type: 'bar',
                        barWidth: '60%',
                        data: []
                    }
                ]
            }
        }
        this.onClickFun = this.onClickFun.bind(this);
    }
    componentDidMount(){
        //港口服务时长请求
        this.getPortServiceTimeOfYearServer(this.state.year);
    }
    //港口服务时长请求
    getPortServiceTimeOfYearServer(year){
        let self = this;
        server.getPortServiceTimeOfYear({id:this.props.portId,year},(data)=>{
            if(data){
                self.getPortServiceTimeOfYearData(data)
            }
        })
    }
    getPortServiceTimeOfYearData(dataArr){
        let data = new Array(12).fill(0);
        for (let i=0;i<dataArr.length;i++){
            data[Number(dataArr[i].mouth-1)] = dataArr[i].count;
        }
        this.propsChange = true;
        this.setState({option:{
            ...this.state.option,
            xAxis:[{
                ...this.state.option.xAxis[0],
            }],
            series:
                [{
                    ...this.state.option.series[0],
                    data,
                }]
        }})
    }
    componentDidUpdate(){
        this.getPortServiceTimeOfYearServer(this.props.year)
    }
    /*shouldComponentUpdate(nextProps){
        if(this.props.year==nextProps.year){
            return false;
        }
        return true;
    }*/
    onClickFun(e){
        this.props.clickBar(parseInt(e.name));
    }
   /* getOption(){
        return {
            color,
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    data : this.state.type,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: '12'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#0b6ead",
                        }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#44a1c2',
                            fontSize: '12'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#0b6ead",
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series : [
                {
                    name:'gangko ',
                    type:'bar',
                    barWidth: '60%',
                    data:this.state.data
                }
            ]
        };
    }*/
    render(){
        return (
            <div id="histroyServiceStaEchart_bar_box">
                    <div className="hsdeb_echart_box_tk">
                        <ReactEcharts
                            option={this.state.option}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts'
                            onEvents={{"click":this.onClickFun}}
                        />
                </div>

            </div>
        )
    }
}
export default HistroyServiceStaEchart_bar;