import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import ShippingwaitEchart from '../Echarts/ShippingwaitEchart/shippingwaitechart';
import ShippingworkEchart from '../Echarts/ShippingworkEchart/shippingworkEchart';
import "./index.css"
import server from '../../../../../axios/berthDetail'

class shippingwait extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            cargo_type:[],
            load_efficiency:[],
            name:[],
            value:[],
        }
    }

    componentDidMount(){
        this.getallkindsofworkingeffecticeSever();//作业效率
        this.getshipwaittingtimeServer();
    }

    getallkindsofworkingeffecticeSever(){//作业效率
        server.getallkindsofworkingeffectice({berthId:'34643'},(data)=>{
            if(data){
                this.getshiptype(data);
            }
           
        })
    }

    getshipwaittingtimeServer(){//待舶时长内容
        server.shippingwaittingtime({berthId:'67182'},(data)=>{
            if(data){
                this.getshipwaitting(data);
            }
        })
    }

    getshipwaitting(data){//待舶时长数据处理
        let newdata=data.data;
        let arr=[];
        let arr1=[];
        for(var i in newdata){
            arr.push(newdata[i].name);
            arr1.push(newdata[i].value);
        }
        this.setState({
            name:arr,
            value:arr1,
        })
    }

    getshiptype(data){
        let arr=[];
        let arr1=[];
        var datanew=data.data
        for(var i in datanew){
            if(datanew[i].cargo_type==='1'){
                arr.push('大豆')
            }else if(datanew[i].cargo_type==='2'){
                arr.push('铁矿石')
            }else{
                arr.push('石油')
            }
            arr1.push(Math.abs(datanew[i].load_efficiency)/10)
        }
        this.setState({
            cargo_type:arr,
            load_efficiency:arr1,
        })
    }

    render(){
        return(
        <div className="port_dis_box">  
            <div id="Shippingwait_mode"> 
            <ModuleTitle title="待泊时长" type="1"/>
                <div className="Shipworkchart1">
                    <ShippingwaitEchart data={this.state}/>
                </div>
            </div>


            <div id="Shippingwork_mode">    
            <ModuleTitle title="作业效率" type="1"/>
                <div className="Shipworkchart2">
                    <ShippingworkEchart data={this.state}/>
                </div>
            </div>
        </div>     
        )

    }

}

export default shippingwait;