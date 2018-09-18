import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css'
import BtnTitle from '../../../../../port/Components/Content/PublicComponent/BtnTitle';
class historygoodsthroughputechart extends React.Component{
    constructor(){
        super();
        
    }

    getOption1(){
        var scaleData = [{
            'name': '大豆',
            'value': 10
        },
        {
            'name': '铁矿石',
            'value': 10
        },
        {
            'name': '原油',
            'value': 10
        },
        {
            'name': '天然气',
            'value': 10
        },
        {
            'name': '散货',
            'value': 10
        },
        {
            'name': '甘蔗',
            'value': 10
        },
      
    ];
    var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
        }
    };
    var data = [];
    var color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
    for (var i = 0; i < scaleData.length; i++) {
         data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 50,
                shadowBlur: 100,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 50,
        name: '',
        itemStyle: placeHolderStyle
    });
}
        return{
            tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            toolbox: {
                show: false
            },
            series: [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: [50, 100],
                center:['50%', '42%'],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'outside',
                            color: '#ddd',
                            formatter: function(params) {
                                var percent = 0;
                                var total = 0;
                                for (var i = 0; i < scaleData.length; i++) {
                                    total += scaleData[i].value;
                                }
                                percent = ((params.value / total) * 100).toFixed(0);
                                if(params.name !== '') {
                                    return params.name + '\n{white|' + '占比' + percent + '%}';
                                }else {
                                    return '';
                                }
                            },
                            rich: {
                                white: {
                                    color: '#ddd',
                                    align: 'center',
                                    padding: [3, 0]
                                }
                            }
                        },
                        labelLine: {
                            length:15,
                            length2:30,
                            show: true,
                            color:'#00ffff'
                        }
                    }
                },
                data: data
            }],
        }
    }
    getOption2(){
        var data = {
            id: 'echartPie',
            value: [12, 32, 54, 12],
            legend: ['人质', '要不要投降', '过期', '追梦的蚂蚁'],
            color: ['#3FA7DC', '#7091C4', '#5170A2', '#E1CA74'],
            // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
            // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
            title: '饼图',
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
                color:'white',
                //   formatter: "{b}: {c} ({d}%)"
                itemStyle:{
                    normal:{
                        color:'white',
                    }
                }
            },
            legend: {
                orient: 'horizontal',
                top: 5,
                textStyle:{
                    color:'#fff',
                 },
                icon: 'circle',
                selectedMode: false,
                itemWidth: 6,
                itemHeight: 6,
                itemGap: 6,
                borderRadius: 6,
                data: data.legend,
                
            },
            series: [{
                type: 'pie',
                // clickable:false,
                // selectedMode: 'single',//单点击设置
                hoverAnimation: data.hoverAnimation === false ? false : true,
                radius: ['40%', '67%'],
                color: data.color,
                center:['50%', '42%'],
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

    getOption3(){
        var data = {
            id: 'echartPie',
            value: [12, 32, 54, 12],
            legend: ['中国', '美国', '日本', '英国'],
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
                top: 5,
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
                center:['50%', '42%'],
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

            <div className="history_goods_box">
                <div className="history_goods_content1">
                    <BtnTitle className="Goodstype">货物类型</BtnTitle>
                    <ReactEcharts
                        option={this.getOption1()}
                        style={{height:'100%',width:'100%'}}
                        className="react_for_Echart"
                    />
                </div>
                <div className="history_goods_content2">
                <BtnTitle className="startCountry">起运国家</BtnTitle>
                    <ReactEcharts
                        option={this.getOption2()}
                        style={{height:'100%',width:'100%'}}
                        className="react_for_Echart"
                    />
                </div>
                <div className="history_goods_content3">
                <BtnTitle className="aimCountry">目的国家</BtnTitle>
                    <ReactEcharts
                        option={this.getOption3()}
                        style={{height:'100%',width:'100%'}}
                        className="react_for_Echart"
                    />
                </div>
            </div>
        )

    }
}

export default historygoodsthroughputechart;