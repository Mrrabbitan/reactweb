import "./index.css";
import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle'
import StophistoryEchart from '../Echarts/stophistoryEchart/StopHistoryEchart'
import StophistoryTable from '../Table/StophistoryTable'
import Server from '../../../../../axios/berthDetail';
import globaldefine from "../../../../../Config/globaldefine";

class stophistory extends Component{
    constructor(){
        super();
        this.state={
            data1:[],
            pageSize:4,
            berthId:globaldefine.getBerthshiphistoryparams(),
            currentPage:1
        }
        // this.selectshiphistoryServer=this.selectshiphistoryServer.bind(this);
    }

    componentDidMount(){
        this.selectshiphistoryServer(1);
    }
    selectshiphistoryServer(pageNumber){
        Server.selectshiphistory({berthId:this.state.berthId,currentPage:pageNumber},(data)=>{
            if(data){
                this.setState({data1:data.data});
            }
        })
    }

    render(){
        return(
            <div id="portdetail_mode">
                <ModuleTitle title="历史停靠" type="2"/>{/*区别： 如果type为1则背景会被拉长，因为长度未变 */}
                <div id="stop_his_echart_pp">
                    <StophistoryEchart  />
                </div>
                <div  id="stop_his_table_pp">
                    <StophistoryTable data={this.state} fun={this.selectshiphistoryServer.bind(this)}/>
                </div>
            </div>
        )
    }
}
export default stophistory
