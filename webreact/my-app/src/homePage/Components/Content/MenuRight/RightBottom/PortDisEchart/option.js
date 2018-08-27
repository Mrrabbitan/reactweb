import color from '../color';
const getOption1 = (dataName,dataValue)=> {
    return {
        color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {        // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'bar',
                stack: '广告',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'视频广告',
                type:'bar',
                stack: '广告',
                data:[150, 232, 201, 154, 190, 330, 410]
            }
        ]
    }
};

const getOption2 = (dataName,dataValue)=> {
    return {
        baseOption: {
            timeline: {
                // y: 0,
                axisType: 'category',
                // realtime: false,
                // loop: false,
                autoPlay: true,
                // currentIndex: 2,
                playInterval: 1000,
                // controlStyle: {
                //     position: 'left'
                // },
                bottom:"130",
                symbolSize:10,
                data: ['巴西','中国','美国'],
            },
            tooltip: {
            },
            legend: {
                bottom: '5',
                data: ['大豆', '铁矿石', '煤炭']
            },
            calculable : true,
            grid: {
                top: 50,
                bottom: 200,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true,
                            formatter: function (params) {
                                return params.value.replace('\n', '');
                            }
                        }
                    }
                }
            },
            xAxis: [
                {
                    'type':'category',
                    'axisLabel':{'interval':0},
                    'data':[
                        '大豆','铁矿石','煤炭'
                    ],
                    splitLine: {show: false}
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '数量（个）'
                }
            ],
            series: [
                {name: 'berth', type: 'bar'},
                {
                    name: 'BERTH',
                    type: 'pie',
                    center: ['50%', '80%'],
                    radius: '28%',
                    z: 100
                }
            ]
        },
        options: [
            {
                series: [
                    {
                        data: [100,200,130],
                        itemStyle:{
                            normal:{
                                color:function (params){
                                    var colorList = color;
                                    return colorList[params.dataIndex];
                                }
                            }
                    }
                    },
                    {
                        data: [100,200,130],
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
            },
            {

                series: [
                    {
                        data: [180,220,230],
                        itemStyle:{
                            normal:{
                                color:function (params){
                                    var colorList = color;
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    },
                    {
                        data: [180,220,230],
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
            },
            {

                series: [
                    {
                        data: [200,120,90],
                        itemStyle:{
                            normal:{
                                color:function (params){
                                    var colorList = color;
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    },
                    {
                        data: [200,120,90],
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
            }
        ]
    };
};
export {getOption1,getOption2}