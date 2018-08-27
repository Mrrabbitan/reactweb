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
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
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
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
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