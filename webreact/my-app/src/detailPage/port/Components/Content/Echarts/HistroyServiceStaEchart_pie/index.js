import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import './index.css'
/*柱状图*/
class HistroyServiceStaEchart_pie extends Component{
    constructor(){
        super();
    }
    getOption1(){
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