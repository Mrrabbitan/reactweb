import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css'

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
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
                        return value;
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
            data: [12,13,22,30,29,22,18,22,26,27,18,30]
        }
    }
}

    render(){
        return(
            <div className="workoneyear_echarts">
                <ReactEcharts
                    option={this.getOption()}
                    style={{height:'100%',width:'103%'}}
                    className={'echarts_for_react'}
                />

            </div>
        )

    }
}

export default workingoneyearechart;