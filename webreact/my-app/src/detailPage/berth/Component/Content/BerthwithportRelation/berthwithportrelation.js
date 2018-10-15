import React,{Component} from 'react'
import ModuleTitle from '../PublicComponent/ModuleTitle';
import './index.css'
import BerthandPortrelationechart from '../Echarts/berthandportEchart/berthandportechart'
import server from '../../../../../axios/berthDetail'


class berthwithportrelation extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            orginal_port_name:[],
            cargo_type:[],
            voyage:[],
        }
    }
    componentDidMount(){
        this.getberthrelationServer();
    }

    getberthrelationServer(){
        server.getberthrelation({berthId:77379},(data)=>{
            if(data){
                this.optimazationrelationdata(data);
            }
        })
    }

    optimazationrelationdata(data){
        let arr=[];
        let arr1=[];
        let arr2=[];
        let datanew=data.data;
        console.log(datanew);
        for(var i in datanew){
            arr.push(datanew[i].orginal_port_name);
            arr1.push(datanew[i].cargo_type);
            arr2.push(datanew[i].voyage);
        }   
        this.setState({
            orginal_port_name:arr,
            cargo_type:arr1,
            voyage:arr2,
        })
     }

    render(){
        return(
            <div id='berthportrelation_box'>
                <ModuleTitle title="关联港口" type='2'/>
                <div className="berthportrela_content">
                    <BerthandPortrelationechart data={this.state}/>
                </div>
            </div>

        )
    }

}

export default berthwithportrelation