import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import color from '../color';
import server from '../../../../../../axios/portAndBerthServer';
import './index.css'

class BerthClassEchart extends Component{
    constructor(){
        super();
        this.state = {
            dataArr:[],
            typeArr:[]
        }
        this.onClickFun = this.onClickFun.bind(this);
    }
    componentWillMount(){
        let self = this;
        server.selectBerthStatistics({id:this.props.id},function(data){
            let dataArr = [];
            let typeArr = [];
            for(let i=0;i<data.length;i++){
                typeArr.push(data[i].final_type);
                dataArr.push({
                    name:data[i].final_type,
                    value:data[i].count
                });
            }
            self.setState({dataArr,typeArr})
        })
    }
    onClickFun(e){
        this.props.berthClick(e.data.name);
    }
    getOption(){
        return {
            color:color,
            title : {
                text: '泊位类型占比',
                x:'left',
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type:'scroll',
                orient: 'horizontal',
                left: '50%',
                bottom:'10',
                textStyle:{
                    color:'#ffffff',
                },
                data: this.state.typeArr
            },
            series : [
                {
                    name: '泊位类型占比',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:this.state.dataArr,
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
        };
    }
    render(){
        return (
            <div id="berthClassEchart_box">
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
export default BerthClassEchart;