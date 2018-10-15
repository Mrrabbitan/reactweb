import React,{Component} from 'react'
import EchartsReact from 'echarts-for-react';
import './index.css'


class berthandportechart extends Component{
    constructor(){
        super();

    }

    getOption(){
        return{
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series : [
                {
                    type: 'graph',
                    layout: 'force',
                    force: {
                        repulsion: 1900,
                        edgeLength: 15,
                    },
                    symbolSize: 50,
                    roam: true,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    focusNodeAdjacency: true,
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 2],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    data: [{
                        name : "上海港0525号泊位",//data[4].anchname + "号锚地",
                        pname : "0525 berth",//data[4].anchname,
                        draggable: "true",
                        symbolSize : 40,
                        itemStyle : {
                            normal : {
                                color : [ '#546570' ],
                            }
                        },
                    },{
                        name : this.props.data.orginal_port_name[0],//data[4].anchname + "号锚地",
                        pname : "shanghai port",//data[4].anchname,
                        draggable: "true",
                        symbolSize : this.props.data.voyage[0]*2,
                        itemStyle : {
                            normal : {
                                color : [ '#546570' ],
                            }
                        },
                    }, {
                        name : this.props.data.orginal_port_name[1],//data[0].anchname + "号锚地",
                        pname : "changzhou port",//data[0].anchna,
                        draggable: "true",
                        symbolSize : this.props.data.voyage[1]*2,
                        itemStyle : {
                            normal : {
                                color : [ '#6aa7e4' ],
                            }
                        },
                    }, {
                        name : this.props.data.orginal_port_name[2],//data[1].anchname + "号锚地",
                        pname : "konglong port",//data[1].anchname,
                        draggable: "true",
                        symbolSize : this.props.data.voyage[2]*2,
                        itemStyle : {
                            normal : {
                                color : [ '#6e7074' ],
                            }
                        },
                    }, {
                        name : this.props.data.orginal_port_name[3],//data[2].anchname + "号锚地",
                        pname : "tianjin port",//data[2].anchname,
                        draggable: "true",
                        symbolSize : this.props.data.voyage[3]*2,
                        itemStyle : {
                            normal : {
                                color : [ '#bda29a' ],
                            }
                        },
                    }, {
                        name : this.props.data.orginal_port_name[4],//data[3].anchname + "号锚地",
                        pname : 'Tokyo port',//data[3].anchname,
                        draggable: "true",
                        symbolSize : this.props.data.voyage[4]*2,
                        itemStyle : {
                            normal : {
                                color : [ '#6aa7e4' ],
                            }
                        },
                    }],
                    // links: [],
                    links: [ {
                        source : '上海港0525号泊位',
                        target : this.props.data.orginal_port_name[0]
                    }, {
                        source : '上海港0525号泊位',
                        target : this.props.data.orginal_port_name[1]
                    }, {
                        source : '上海港0525号泊位',
                        target : this.props.data.orginal_port_name[2]
                    }, {
                        source : '上海港0525号泊位',
                        target : this.props.data.orginal_port_name[3]
                    }, {
                        source : '上海港0525号泊位',
                        target : this.props.data.orginal_port_name[4]
                    } ],
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 1,
                            curveness: 0.5,
                            color:'#546570',
                        }
                    }
                }
            ]
        	};
        

        }
    

    render(){
        console.log(this.props.data.voyage[1]);
        return(
            <div className="Echart_total_bprelation">
                <EchartsReact
                    option={this.getOption()}
                    style={{height:'100%',width:'100%'}}
                    className={'echart_for_react'}
                />
            </div>
        )

    }
}
export default berthandportechart;