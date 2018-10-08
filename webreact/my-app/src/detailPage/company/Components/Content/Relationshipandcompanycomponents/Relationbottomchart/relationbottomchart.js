import React from 'react';
import ReactEcharts from 'echarts-for-react';
import server from '../../../../../../axios/CompanyServer'
import globaldefine from '../../../../../../Config/globaldefine';
class relationbottomchart extends React.Component{
    state={
        data:{},
        code:globaldefine.getUrlParmsCode()
    }
    componentDidMount(){
        this.loadAllrelationlinkserver();
    }
    loadAllrelationlinkserver(){
        server.relationshipandcomp({code:this.state.code},(data)=>{
            // this.setState({data});
            this.loadAllrelationlinkData(data.data);
        })
    }
    //数据处理
    loadAllrelationlinkData(data){
        // 按照所需要的数据格式进行数据处理
        let dataAll = {
            name:this.state.code,
            children:[]
        }
        
        for(let i=0;i<10;i++){//防止数据过多引起数据爆炸，可以限制i的最大值
            dataAll.children.push({
                name:data[i].shipname,
                children:[]
            })
            for(var key in data[i]){
                if(key.endsWith('company')){//.indexof('')>0表示存在某些字符内容显示，endswith表示以...结尾的函数
                    dataAll.children[i].children.push({
                        name:data[i][key]
                    })
                }
            }
        }
        console.log(dataAll)
        // 一定要将数据封装一下，使得最外层state中可以获取到state的变化
        this.setState({
            data:dataAll
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
                        curveness:0.7,
                    },
                    data:[this.state.data],
                    top: '10%',
                    left: '1%',
                    bottom: '15%',
                    right: '1%',
                    symbolSize: 17,
                    orient: 'vertical',
                    label: {
                        normal: {
                            position: 'top',
                            rotate: -90,
                            verticalAlign: 'middle',
                            align: 'right',
                            fontSize: 14,
                            color:'white'
                        }
                    },
    
                    leaves: {
                        label: {
                            normal: {
                                position: 'bottom',
                                rotate: -90,
                                verticalAlign: 'middle',
                                align: 'left'
                            }
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