import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import WorkingoneyearEchart from '../Echarts/WorkingoneyearEchart/workingoneyearecart';
import './index.css'
import server from '../../../../../axios/berthDetail'


class workingdayforoneyear extends Component{
    constructor(){
        super();
        this.state={
            data1:[],
        }
    }

    componentDidMount(){
        this.getoneyearworkingdayServer();
    }

    getoneyearworkingdayServer(){
        server.getoneyearworkingday({berthId:'67182'},(data)=>{
            if(data){
                this.getallmouthsworkday(data);
            }
        })
    }

    getallmouthsworkday(data){
        let arr=[];
        let dataarr=data.data;
        for(var i in dataarr){
            arr.push(dataarr[i]);
        }
        this.setState({
            data1:arr
        })
    }


    render(){
        return(
            <div id="workingdayforoneyear_box" className="port_dis_box">
                <ModuleTitle title="近一年工作天数" type="2"/>
                <div className="workingoneyear_echarts">
                    <WorkingoneyearEchart data={this.state}/>
                </div>
            </div>
        )
    }
}
export default workingdayforoneyear
