import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import server from '../../../../../../axios/portAndBerthServer';
import color from '../color';
import './index.css'
/*柱状图*/
class HistroyServiceStaEchart_bar extends Component{
    constructor(){
        super();
        this.state = {
            data : [],
            type : [],
        }
    }
    componentDidMount(){
        //港口服务时长请求
        this.getPortServiceTimeOfYearServer(this.props.year);
    }
    //港口服务时长请求
    getPortServiceTimeOfYearServer(year){
        let self = this;
        console.log(this.props)
        server.getPortServiceTimeOfYear({id:this.props.portId,year},(data)=>{
            console.log(data)
            self.getPortServiceTimeOfYearData(data)
        })
    }
    getPortServiceTimeOfYearData(dataArr){
        let data = [];
        let type = [];
        for (let i=0;i<dataArr.length;i++){
            data.push(dataArr[i].count);
            type.push(Number(dataArr[i].mouth)+'月')
        }
        this.setState({data,type})
    }
    componentWillReceiveProps(nextProps){

        this.getPortServiceTimeOfYearServer(nextProps.year);
    }
    getOption(){
        return {
            color: ['#3398DB'],
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
                    name:'港口服务时长',
                    type:'bar',
                    barWidth: '60%',
                    data:this.state.data
                }
            ]
        };
    }
    render(){
        return (
            <div id="histroyServiceStaEchart_bar_box">
                    <div className="hsdeb_echart_box_tk">
                        <ReactEcharts
                            option={this.getOption()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts'
                        />
                </div>

            </div>
        )
    }
}
export default HistroyServiceStaEchart_bar;