import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css'
class relationport extends React.Component{
    constructor(){
        super();
    }
    
    getoption(){
       let newportarr=this.props.data?this.props.data:{};
        var data = {
            id: 'echartPie',
            value: newportarr.portvoyage,
            legend: newportarr.portcountry,
            color: ['#3FA7DC', '#7091C4', '#5170A2', '#E1CA74'],
            // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
            // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
            
        }
        
        ////////////////////////////////////////
        
        /**
         * 数据处理
         */
        var seriesData = []
        data.value.forEach(function(item, index) {
            seriesData.push({
                value: item,
                name: data.legend[index]
            })
        })
        return{
            tooltip: {
                trigger: 'item',
                show: data.tooltipShow === false ? false : true,
                color:'#fff',
                //   formatter: "{b}: {c} ({d}%)"
                
            },
            legend: {
                orient: 'horizontal',
                top: 14,
                icon: 'circle',
                selectedMode: false,
                itemWidth: 6,
                itemHeight: 6,
                itemGap: 6,
                textStyle:{
                        color:'#fff',
                },
                borderRadius: 6,
                data: data.legend,
                
            },
            series: [{
                type: 'pie',
                // clickable:false,
                // selectedMode: 'single',//单点击设置
                hoverAnimation: data.hoverAnimation === false ? false : true,
                radius: ['40%', '67%'],
                center:['50%', '50%'],
                color: data.color,
                label: {
                    normal: {
                        position: 'inner',
                        // formatter: '{d}%',
                        formatter: function(param) {
                            if (!param.percent) return ''
                            var f = Math.round(param.percent * 10) / 10;
                            var s = f.toString();
                            var rs = s.indexOf('.');
                            if (rs < 0) {
                                rs = s.length;
                                s += '.';
                            }
                            while (s.length <= rs + 1) {
                                s += '0';
                            }
                            return s + '%';
                        },
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: seriesData
            }]
        }
    }
    render(){
        return(
            <div id="port_Echart_relation">
                <ReactEcharts
                    option={this.getoption()}
                    style={{height:'100%',width:'100%'}}
                    className="reacts_Echart"
                />
            </div>
        )

    }
}

export default relationport;