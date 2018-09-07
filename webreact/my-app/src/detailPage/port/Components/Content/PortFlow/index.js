import React,{Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle'
import TableBox from '../PublicComponent/TableBox'
import TabComponent from '../PublicComponent/TabComponent'
import PageEasy from '../PublicComponent/PageEasy';
import PortFlowEchart from '../Echarts/PortFlowEchart';
import server from '../../../../../axios/portAndBerthServer';
import '../../../style/page.css';
import './index.css';

class PortFlow extends Component{
    constructor(){
        super();
        this.tabFunForPortFlow = this.tabFunForPortFlow.bind(this);
        this.handlePageChanged3 = this.handlePageChanged3.bind(this);
        this.state = {
            tabPortFlow:1,
            //港口流量数据
            selectShipStatusData:null,
            selectShipStatusCount:0,
            //每页显示多少条
            pageNumber:4
        }
    }
    componentWillMount(){
        //港口流量服务请求
        this.selectShipStatusServer(1,1)
    }
    //港口流量服务请求处理
    selectShipStatusServer(currentPage,flag){
        let self = this;
        //港口流量
        server.selectShipStatus({id:this.props.portId,currentPage,flag,number:this.state.pageNumber},(data)=>{
            if(data){
                self.setState({selectShipStatusData:data.data,selectShipStatusCount:data.count})
            }
        })
    }
    //港口流量切换
    tabFunForPortFlow(data){
        let self = this;
        //清空上一条数据
        this.setState({selectShipStatusData:null,selectShipStatusCount:0},()=> {
            self.selectShipStatusServer(1, data);
            self.setState({tabPortFlow: Number(data)});
        })
    }
    //港口流量分页
    handlePageChanged3(page){
        console.log(this.state);
        this.selectShipStatusServer(page,this.state.tabPortFlow);
    }
    render(){
        /**
         *总数不存在时初始化0
         * */
        let totalPageForPortZG = this.state.selectShipStatusData?Math.ceil(this.state.selectShipStatusCount/this.state.pageNumber):0;
        /**
         * 港口流量切换
         * 切换渲染的表格、分页、echarts等再此修改
         * */
        let tabContentPortFlow;
        //根据切换来选择渲染某一部分
        if (this.state.tabPortFlow==1){//在港船货
            tabContentPortFlow=(<div>
                {
                    this.state.selectShipStatusData?
                        <TableBox
                            list={this.state.pageNumber}
                            active={2}
                            thead={["MMSI","船名","呼号","国家","船舶类型","所装货物类型","货量","吃水","目的港口","更新时间"]}
                            fileName={["mmsi","shipname","callsign","flagcountry","shiptypecode","name6","name7","draught","name9","dataupdatetime"]}
                            data={this.state.selectShipStatusData}
                        />:''
                }
                {
                    this.state.selectShipStatusCount?
                        <PageEasy
                            total={totalPageForPortZG}
                            current={1}
                            position={'center'}
                            onPageChanged={this.handlePageChanged3}
                        />:''
                }
                <div className="port_flow_echart">
                    <PortFlowEchart type={"zg"}/>
                </div>
            </div>)
        }else if(this.state.tabPortFlow==2){//离港船货
            tabContentPortFlow=(<div>
                {
                    this.state.selectShipStatusData?
                        <TableBox
                            list={this.state.pageNumber}
                            active={2}
                            thead={["MMSI","船名","呼号","国家","船舶类型","所装货物类型","货量","吃水","目的港口","更新时间"]}
                            fileName={["mmsi","shipname","callsign","flagcountry","shiptypecode","name6","name7","draught","name9","dataupdatetime"]}
                            data={this.state.selectShipStatusData}
                        />:''
                }
                {
                    this.state.selectShipStatusCount?
                        <PageEasy
                            total={totalPageForPortZG}
                            current={1}
                            position={'center'}
                            onPageChanged={this.handlePageChanged3}
                        />:''
                }
                <div className="port_flow_echart">
                    <PortFlowEchart type={"lg"}/>
                </div>
            </div>)
        }else if(this.state.tabPortFlow==3){//进港船货
            tabContentPortFlow=(<div>
                {
                    this.state.selectShipStatusData?
                        <TableBox
                            list={this.state.pageNumber}
                            active={2}
                            thead={["MMSI","船名","呼号","国家","船舶类型","所装货物类型","货量","吃水","目的港口","更新时间"]}
                            fileName={["mmsi","shipname","callsign","flagcountry","shiptypecode","name6","name7","draught","name9","dataupdatetime"]}
                            data={this.state.selectShipStatusData}
                        />:''
                }
                {
                    this.state.selectShipStatusCount?
                        <PageEasy
                            total={totalPageForPortZG}
                            current={1}
                            position={'center'}
                            onPageChanged={this.handlePageChanged3}
                        />:''
                }

                <div className="port_flow_echart">
                    <PortFlowEchart type={"jg"}/>
                </div>
            </div>)
        }else if(this.state.tabPortFlow==4){//预抵船货
            tabContentPortFlow=(<div>
                {
                    this.state.selectShipStatusData?
                        <TableBox
                            list={this.state.pageNumber}
                            active={2}
                            thead={["MMSI","船名","呼号","国家","船舶类型","所装货物类型","货量","吃水","目的港口","更新时间"]}
                            fileName={["mmsi","shipname","callsign","flagcountry","shiptypecode","name6","name7","draught","name9","dataupdatetime"]}
                            data={this.state.selectShipStatusData}
                        />:''
                }
                {
                    this.state.selectShipStatusCount?
                        <PageEasy
                            total={totalPageForPortZG}
                            current={1}
                            position={'center'}
                            onPageChanged={this.handlePageChanged3}
                        />:''
                }

                <div className="port_flow_echart">
                    <PortFlowEchart type={"yd"}/>
                </div>
            </div>)
        }

        return (
                <div id="port_flow">
                    <ModuleTitle title="港口流量" type="2"/>
                    <div className="port_flow_box">
                        <TabComponent
                            tabName={["在港船货","离港船货","进港船货","预抵船货"]}
                            thisClick={this.tabFunForPortFlow}
                            active={1}
                            name={"port_flow"}
                        />
                        {/*渲染切换的内容*/}
                        {tabContentPortFlow}
                    </div>
                </div>
        )
    }
}

export default PortFlow;