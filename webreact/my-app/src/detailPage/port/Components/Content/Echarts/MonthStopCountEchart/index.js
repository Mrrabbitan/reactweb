import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import server from '../../../../../../axios/portAndBerthServer';
import color from '../color';
import './index.css'

class MonthStopCountEchart extends Component{
    constructor(){
        super();
        this.state = {
            series:[],
            type:[]
        }
    }
    componentDidMount(){
        this.getShipStopByPortIdServer();
    }
    getShipStopByPortIdServer(){
        server.getShipStopByPortId({id:this.props.portId},(data)=>{
            if(data){
                this.getShipStopByPortIdDataFun(data);
                console.log(data)
            }

        })
    }
    getShipStopByPortIdDataFun(data) {
        let series = [];
        let type = [];
        console.log(data);
        for(let i=0;i<data.length;i++){
            let arr = new Array(12).fill(0);
            for(let j=0;j<data[i].data.length;j++){
                arr[data[i].data[j].month-1] = data[i].data[j].count;
            }
            series.push({
                name:data[i].type,
                type:'line',
                data:arr
            })
            type.push(data[i].type);
        }
        this.setState({series,type})
    }
    componentDidUpdate(){
        this.getShipStopByPortIdServer();
    }

    getOption(){
        return {
            color:color,
            backgroundColor:"transparent",
            title: {
                text: '每月船舶停靠次数',
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:this.state.type,
                textStyle:{
                    color:'#ffffff',
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
                }
            },
            yAxis: {
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
            },
            series:this.state.series,
        }
    }
    render(){
        return (
            <div id="monthStopCountEchart_box">
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '100%', width: '100%'}}
                    className='react_for_echarts'
                />
            </div>
        )
    }
}
export default MonthStopCountEchart;