import React from 'react';
import ReactEcharts from 'echarts-for-react';
import server from '../../../../../../axios/CompanyServer'
class relationbottomchart extends React.Component{
    state={
        data:{},
    }
    componentDidMount(){
        this.loadAllrelationlinkserver();
    }
    loadAllrelationlinkserver(){
        server.loadAllrelationlink({},(data)=>{
            this.setState({data});
            console.log(data);
        })
    }

    getoption(){
        return{
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            
            series:[
                {
                    type: 'tree',
                    layout:'orthogonal',
                    textStyle:{
                        color:'#fff'
                    },
                    itemStyle:{
                        borderWidth:2,
                        borderColor:'#00a6ff',
                        color: '#00a6ff',
                    },
                    lineStyle:{
                        color:'#029def',
                        width:1,
                        curveness:0.5,
                    },
                    data:[this.state.data],
                    top: '1%',
                    left: '1%',
                    bottom: '1%',
                    right: '1%',
                    symbolSize: 17,
                    orient: 'LR',
                    label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                    },
                    leaves: {
                        label: {
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right'
                        }
                    },
    
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        
        }
        
    }
    render(){
        return(
            <div id="relationechart_diff">
                <ReactEcharts
                    option={this.getoption()}
                    style={{height:'100%',width:'100%'}}
                    className="react_echarts"
                />

            </div>
        )
    }
}

export default relationbottomchart;