import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import './index.css'

class BerthClassEchart extends Component{
    constructor(){
        super();
    }
    getOption(){
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
            <div id="berthClassEchart_box">
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '100%', width: '100%'}}
                    className='react_for_echarts'
                />
            </div>
        )
    }
}
export default BerthClassEchart;