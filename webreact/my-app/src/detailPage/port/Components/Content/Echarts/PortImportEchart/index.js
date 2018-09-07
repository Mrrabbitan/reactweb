import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import server from '../../../../../../axios/portAndBerthServer';
import './index.css';

class PortImportEchart extends Component{
    state = {
        data1:[],
        type1:[],
        data2:[],
        type2:[]
    };
    static defaultProps = {
        portId:'27999'
    };
    componentDidMount(){
        this.getPortImportCountServer();
    }
    getPortImportCountServer(){
        server.getPortImportCount({id:this.props.portId},(data)=>{
            if(data){
                this.getPortImportCountData(data)
            }
        })
    }
    getPortImportCountData(data){
        let data1 = [];
        let type1 = [];
        let data2 = [];
        let type2 = [];
        for(let i=0;i<data.typeCount.length;i++){
            type1.push(data.typeCount[i].type);
            data1.push({
                value:data.typeCount[i].sum,
                name:data.typeCount[i].type
            })
        }
        for(let i=0;i<data.monthCount.length;i++){
            type2.push(data.monthCount[i].month+"月");
            data2.push(data.monthCount[i].volume);
        }
        this.setState({data1,type1,data2,type2});
    }
    getOption1(){
        return {
            color:color,
            title : {
                text: '近一年出口',
                x:'left',
                textStyle:{
                    color:'#56daff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                y: 'bottom',
                textStyle:{
                    color:'#ffffff',
                },
                data:this.state.type1
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:this.state.data1
                }
            ]
        }
    }
    getOption2(){
        return {
            color:color,
            xAxis: {
                type: 'category',
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
                data: this.state.type2
            },
            yAxis: {
                type: 'value',
                name: '体积(m³)',
                nameTextStyle:{
                    color:'#ffeb00'
                },
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
            series: [{
                data: this.state.data2,
                type: 'line'
            }]
        };
    }
    render(){
        return (
            <div className="pee_box">
                <div>
                    <ReactEcharts
                        option={this.getOption1()}
                        style={{height: '100%', width: '100%'}}
                        className='react_for_echarts'
                    />
                </div>
                <div>
                    <ReactEcharts
                        option={this.getOption2()}
                        style={{height: '100%', width: '100%'}}
                        className='react_for_echarts'
                    />
                </div>
            </div>
        )
    }
}

export default PortImportEchart;