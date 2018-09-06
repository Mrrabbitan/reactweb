import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import server from '../../../../../../axios/portAndBerthServer';
import color from '../color';
import './index.css'
/*柱状图*/
class HistroyServiceStaEchart_pie extends Component{
    constructor(){
        super();
        this.state = {
            data1:[],
            type1:[],
        }
    }
    componentDidMount(){
        //港口停靠船舶
        this.getPortHistoryShipServer(this.props.year);
    }
    //港口停靠船舶数据请求
    getPortHistoryShipServer(year){
        let self = this;
        server.getPortHistoryShip({id:this.props.portId,year},(data)=>{
            if(data){
                self.getPortHistoryShipDataFun(data)
            }
        })
    }
    //港口停靠船舶数据处理
    getPortHistoryShipDataFun(data){
        let data1 = [];
        let type1 = [];
        for(let i = 0;i < data.length;i++){
            type1.push(data[i].type?data[i].type:'未知');
            data1.push({name:data[i].type?data[i].type:'未知',value:data[i].total});
        }
        this.setState({data1,type1});
    }
    componentWillReceiveProps(nextProps){
        this.getPortHistoryShipServer(nextProps.year);
    }
    getOption1(){
        return {
            color:color,
            title : {
                text: '港口停靠船舶',
                x:'left',
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type:'scroll',
                orient: 'horizontal',
                left: '50%',
                bottom:'10',
                textStyle:{
                    color:'#ffffff',
                },
                data: this.state.type1
            },
            series : [
                {
                    name: '港口停靠数量',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:this.state.data1,
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
        };
    }
    getOption2(){
        return {
            color:color,
            title : {
                text: '泊位类型占比',
                x:'left',
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type:'scroll',
                orient: 'horizontal',
                left: '50%',
                bottom:'10',
                textStyle:{
                    color:'#ffffff',
                },
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
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
        };
    }
    render(){
        return (
            <div id="histroyServiceStaEchart_pie_box">
                    <div className="hsdep_echart_box_tk">
                        <ReactEcharts
                            option={this.getOption1()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts'
                        />
                    </div>
                    <div className="hsdep_echart_box_tk">
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
export default HistroyServiceStaEchart_pie;