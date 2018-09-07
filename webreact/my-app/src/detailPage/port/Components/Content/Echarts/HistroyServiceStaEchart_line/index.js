import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import server from '../../../../../../axios/portAndBerthServer';
import color from '../color';
import './index.css'
/*柱状图*/
class HistroyServiceStaEchart_line extends Component{
    constructor(props){
        super(props);
        this.state = {
            year:props.year,
            month:props.month,
            data:[],
            type:[]
        }
        this.propsChange = true;
    }
    componentDidMount() {
        this.getPortServiceTimeOfDayServer(this.state.month,this.state.year)
    }
    getPortServiceTimeOfDayServer(month,year){
        server.getPortServiceTimeOfDay({id: this.props.portId, mouth:month-1,year},(data)=>{
            if(data){
                this.getPortServiceTimeOfDayData(data)
            }

        })
    }
    componentWillReceiveProps(nextProps){
        this.propsChange = false;
        this.getPortServiceTimeOfDayServer(nextProps.month,nextProps.year);
    }
    getPortServiceTimeOfDayData(dataArr){
        let data = [];
        let type = [];
        for(let i = 0;i<dataArr.length;i++){
            data.push(dataArr[i].count);
            type.push(dataArr[i].day);
        }
        this.setState({data,type,year:this.props.year,month:this.props.month});
    }

    getOption(){
        return {
            color:color,
            title:{
                text:this.props.month+'月每天时长统计',
                textStyle:{
                    color:'#fff'
                }
            },
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
                data: this.state.type
            },
            yAxis: {
                type: 'value',
                max:31,
                min:10,
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
                data: this.state.data,
                type: 'line'
            }]
        };
    }
    render(){
        return (
            <div id="histroyServiceStaEchart_line_box">
                <div className="hsdel_echart_box_tk">
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
export default HistroyServiceStaEchart_line;