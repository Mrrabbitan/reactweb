import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import server from '../../../../../../axios/portAndBerthServer';
import './index.css'

class LaneImportAndExportEchart extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    componentWillMount(){
    }
    getOption(){
        return {
            color,
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                y:'bottom',
                textStyle:{
                    color:'#ffffff',
                },
                data: ['Plant-Complete', 'Plant-Chromosome','Plant-Scaffold','Plant-Contig']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            yAxis:  {
                type: 'value',
                name: '货量(吨)',
                nameTextStyle:{
                    color:'#ffeb00'
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#44a1c2',
                        fontSize: '12'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#0b6ead",
                    }
                },
                splitLine: {
                    show: false
                }
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: '12'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#0b6ead",
                    }
                },
                data: ['2016.01','2016.04','2016.07','2016.10','2017.01','2017.07','Now']
            },
            series: [
                {
                    name: 'Plant-Complete',
                    type: 'bar',
                    stack: 'Plant',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [100, 200, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Plant-Chromosome',
                    type: 'bar',
                    barGap:'5%',
                    stack: 'Plant',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Plant-Scaffold',
                    type: 'bar',
                    stack: 'Plant',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Plant-Contig',
                    type: 'bar',
                    stack: 'Plant',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                },{
                    name: 'Plant-Complete',
                    type: 'bar',
                    stack: 'Animal',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Plant-Chromosome',
                    type: 'bar',
                    stack: 'Animal',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Plant-Scaffold',
                    type: 'bar',
                    stack: 'Animal',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Plant-Contig',
                    type: 'bar',
                    stack: 'Animal',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                }
            ]
        };
    }
    render(){
        return (
            <div id="laneImportAndExportEchart_box">
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '100%', width: '100%'}}
                    className='react_for_echarts'
                    onEvents={{"click":this.onClickFun}}
                />
            </div>
        )
    }
}
export default LaneImportAndExportEchart;