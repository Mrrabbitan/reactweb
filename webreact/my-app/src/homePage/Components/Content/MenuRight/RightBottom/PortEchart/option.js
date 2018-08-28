import color from '../color';
const getOption1 = (dataName,dataValue)=> {
    return {
        color:color[0],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        }
        ,
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        }
        ,
        xAxis: [
            {
                type: 'category',
                data: dataName,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize:'12'
                    }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:"#0b6ead",
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '数量（个）',
                nameTextStyle:{
                    color:"#ffeb00"
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#44a1c2',
                        fontSize:'12'
                    }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:"#0b6ead",
                    }
                },
                splitLine:{
                    show:false
                }
            }
        ],
        series: [
            {
                name: '港口',
                type: 'bar',
                barWidth: '30%',
                data: dataValue
            }
        ]
    }
}
const getOption2 = (dataName,dataValue)=> {
    return {
        color:color[1],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        }
        ,
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        }
        ,
        xAxis: [
            {
                type: 'category',
                data: dataName,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize:'12'
                    }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:"#0b6ead",
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name:'数量（个）',
                nameTextStyle:{
                    color:"#ffeb00"
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#44a1c2',
                        fontSize:'12'
                    }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:"#0b6ead",
                    }
                },
                splitLine:{
                    show:false
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: dataValue
            }
        ]
    }
}
export {getOption1,getOption2}