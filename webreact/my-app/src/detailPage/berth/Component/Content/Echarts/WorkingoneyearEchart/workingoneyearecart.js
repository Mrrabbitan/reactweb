import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css'
import server from '../../../../../../axios/berthDetail'
import * as actions from '../../../../store/actions'//要把这个模块中的所有内容引入
import {connect} from 'react-redux'

class workingoneyearechart extends Component{
    constructor(){
        super();
       

    }

getOption(){
    return{
        xAxis: {
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            },
            data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
            axisLabel: {
                formatter: function(value) {
                    var ret = ""; //拼接加\n返回的类目项
                    var maxLength = 3; //每项显示文字个数
                    var valLength = value.length; //X轴类目项的文字个数
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1) //如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = ""; //每次截取的字符串
                            var start = i * maxLength; //开始截取的位置
                            var end = start + maxLength; //结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    } else {
                        return value+'月';
                    }
                },
                interval: 0,
                fontSize: 14,
                fontWeight: 100,
                textStyle: {
                    color: '#53d0ff',
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#53d0ff'
                }
            }
        },
        yAxis: {
            name:'天数',
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            },
            
            axisLabel: {
                textStyle: {
                    color: '#53d0ff',
                    fontSize: 14,
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#53d0ff'
                }
            }
        },
        
        series: {
            type:"bar",
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#00d386' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0076fc' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    barBorderRadius: 4,
                    
                }
            },
            barWidth: 27,
            data: this.props.data.data1
        }
    }
}

Clicktoshow = (e) =>{//绑定的事件全都要使用箭头函数，目的是将全局的this可以绑定到当前的内容下
    server.getcurrentmouthworkingday({berthId:'67182',month:e.name},(data)=>{
        if(data){
            this.changedatasuitable(data);
        }
    })
}
changedatasuitable(data){
    let arr=[];
    let arr1=[];
    let datanew=data.data
    for(var i in datanew){
        let obj = {};//针对对象进行拆分，类似于数组的内容
        obj['name'] = i;
        obj['value'] = datanew[i];
        arr.push(i);
        arr1.push(datanew[i]);
    }
    this.props.dispatch(actions.getEveryday({//dispatch封装action的必须途径
        day:arr,
        value:arr1
         }))
       }
    render(){
        let onEvents = {
            click:this.Clicktoshow,
        }
        return(
            <div className="workoneyear_echarts">
                <ReactEcharts
                    option={this.getOption()}
                    style={{height:'100%',width:'103%'}}
                    className={'echarts_for_react'}
                    onEvents={onEvents}//增加事件点击方法等！
                />
            </div>
        )
    }
}

export default connect(//数据传出
    (state)=>{
        return {
            dataAndValues:state.data
        }
    }
)(workingoneyearechart);