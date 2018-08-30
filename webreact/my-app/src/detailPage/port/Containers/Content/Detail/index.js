import React,{Component} from 'react';
import ModuleTitle from '../../../Components/Content/PublicComponent/ModuleTitle'
import TableBox from '../../../Components/Content/PublicComponent/TableBox'
import TabComponent from '../../../Components/Content/PublicComponent/TabComponent'
import PageEasy from '../../../Components/Content/PublicComponent/PageEasy';
import BerthClassEchart from '../../../Components/Content/Echarts/BerthClassEchart';
import PortFlowEchart from '../../../Components/Content/Echarts/PortFlowEchart';
import HistroyServiceStaEchart_pie from '../../../Components/Content/Echarts/HistroyServiceStaEchart_pie';
import HistroyServiceStaEchart_bar from '../../../Components/Content/Echarts/HistroyServiceStaEchart_bar';
import HistroyServiceStaEchart_line from '../../../Components/Content/Echarts/HistroyServiceStaEchart_line';
import MonthStopCountEchart from '../../../Components/Content/Echarts/MonthStopCountEchart';
import HandingEffEchart from '../../../Components/Content/Echarts/HandingEffEchart';
import '../../../style/page.css';
import './index.css';

class Detail extends Component{
    constructor(){
        super();
        this.tabFunForPortFlow = this.tabFunForPortFlow.bind(this);
        this.tabFunForServiceSta = this.tabFunForServiceSta.bind(this);
        this.handlePageChanged1 = this.handlePageChanged1.bind(this);
        this.handlePageChanged2 = this.handlePageChanged2.bind(this);
        this.state = {
            tabPortFlow:1,
            tabServiceSta:1,
            data:[
                {
                    name1:1,
                    name2:1,
                    name3:1,
                    name4:1,
                    name5:1,
                    name6:1,
                    name7:1,
                    name8:1,
                    name9:1,
                    name10:1,
                },
                {
                    name1:2,
                    name2:2,
                    name3:2,
                    name4:2,
                    name5:2,
                    name6:2,
                    name7:1,
                    name8:1,
                    name9:1,
                    name10:1,
                },
                {
                    name1:3,
                    name2:3,
                    name3:3,
                    name4:3,
                    name5:3,
                    name6:3,
                    name7:1,
                    name8:1,
                    name9:1,
                    name10:1,
                },
                {
                    name1:4,
                    name2:4,
                    name3:4,
                    name4:4,
                    name5:4,
                    name6:4,
                    name7:1,
                    name8:1,
                    name9:1,
                    name10:1,
                }
            ],

            total: 11,
            current: 1,
            visiblePage: 5,
        }
    }
    //港口流量切换
    tabFunForPortFlow(data){
        this.setState({tabPortFlow:Number(data)});
    }
    //服务水平切换
    tabFunForServiceSta(data){
        this.setState({tabServiceSta:Number(data)});
    }
    //页数返回数
    handlePageChanged1(data){
        console.log(data+"a")
    }
    handlePageChanged2(data){
        console.log(data+"b")
    }
    render(){
        /**
         * 港口流量切换
         * 切换渲染的表格、分页、echarts等再此修改
        * */
        let tabContentPortFlow;
        //根据切换来选择渲染某一部分
        if (this.state.tabPortFlow==1){//在港船货
            tabContentPortFlow=(<div>
                <TableBox
                    list={4}
                    active={2}
                    thead={["MMSI","船名","呼号","国家","船舶类型","所装货物类型","货量","吃水","目的港口","更新时间"]}
                    fileName={["name1","name2","name3","name4","name5","name6","name7","name8","name9","name10"]}
                    data={this.state.data}
                />
                <PageEasy
                    total={22}
                    current={1}
                    position={'center'}
                    onPageChanged={this.handlePageChanged2}
                />
                <div className="port_flow_echart">
                    <PortFlowEchart type={"zg"}/>
                </div>
            </div>)
        }else if(this.state.tabPortFlow==2){//离港船货
            tabContentPortFlow=(<div>
                <TableBox
                    list={4}
                    active={2}
                    thead={["MMSI","船名","呼号","国家","船舶类型","所装货物类型","货量","吃水","目的港口","更新时间"]}
                    fileName={["name1","name2","name3","name4","name5","name6","name7","name8","name9","name10"]}
                    data={this.state.data}
                />
                <div className="port_flow_echart">
                    <PortFlowEchart type={"lg"}/>
                </div>
            </div>)
        }else if(this.state.tabPortFlow==3){//进港船货
            tabContentPortFlow=(<div>
                <TableBox
                    list={4}
                    active={2}
                    thead={["MMSI","船名","呼号","国家","船舶类型","所装货物类型","货量","吃水","目的港口","更新时间"]}
                    fileName={["name1","name2","name3","name4","name5","name6","name7","name8","name9","name10"]}
                    data={this.state.data}
                />
                <div className="port_flow_echart">
                    <PortFlowEchart type={"jg"}/>
                </div>
            </div>)
        }else if(this.state.tabPortFlow==4){//预抵船货
            tabContentPortFlow=(<div>
                <TableBox
                    list={4}
                    active={2}
                    thead={["MMSI","船名","呼号","国家","船舶类型","所装货物类型","货量","吃水","目的港口","更新时间"]}
                    fileName={["name1","name2","name3","name4","name5","name6","name7","name8","name9","name10"]}
                    data={this.state.data}
                />
                <div className="port_flow_echart">
                    <PortFlowEchart type={"yd"}/>
                </div>
            </div>)
        }

        /**
         * 服务水平部分切换
         * 切换渲染的echarts等再此修改
         * */
        let tabContentServiceSta;
        //根据切换来选择渲染某一部分
        if (this.state.tabServiceSta==1){//历史服务水平
            tabContentServiceSta=(<div>
                <div className="service_sta_echart his">
                    {/*饼状图*/}
                    <div>
                        <HistroyServiceStaEchart_pie/>
                    </div>
                    {/*柱状图*/}
                    <div>
                        <HistroyServiceStaEchart_bar/>
                    </div>
                    {/*折线图*/}
                    <div>
                        <HistroyServiceStaEchart_line/>
                    </div>
                </div>
            </div>)
        }else if(this.state.tabServiceSta==2){//每月船舶停靠次数
            tabContentServiceSta=(<div>
                <div className="service_sta_echart">
                    <MonthStopCountEchart/>
                </div>
            </div>)
        }else if(this.state.tabServiceSta==3){//每月停靠数量
            tabContentServiceSta=(<div>
                <div className="service_sta_echart">
                    <MonthStopCountEchart/>
                </div>
            </div>)
        }else if(this.state.tabServiceSta==4){//装卸效率
            tabContentServiceSta=(<div>
                <div className="service_sta_echart">
                    <HandingEffEchart/>
                </div>
            </div>)
        }
        return (
            <div id="detail_box">
                {/*港区信息*/}
                <div id="port_dis">
                    <ModuleTitle title="港区信息" type="2"/>
                    <div className="port_dis_box">
                        <TableBox
                            list={4}
                            active={2}
                            thead={["港区名称","经营公司","类型","经度","纬度","泊位数"]}
                            fileName={["name1","name2","name3","name4","name5","name6"]}
                            data={this.state.data}
                        />
                    </div>
                </div>
                {/*泊位分类*/}
                <div id="berth_class">
                    <ModuleTitle title="泊位分类" type="2"/>
                    <div className="berth_class_box">
                        <div className="berth_class_echart">
                            <BerthClassEchart/>
                        </div>
                        <div className="berth_class_table">
                            <TableBox
                                list={4}
                                active={2}
                                thead={["港区名称","经营公司","类型","经度","纬度","泊位数"]}
                                fileName={["name1","name2","name3","name4","name5","name6"]}
                                data={this.state.data}
                            />
                            <PageEasy
                                total={22}
                                current={1}
                                position={'center'}
                                onPageChanged={this.handlePageChanged1}
                            />
                        </div>
                    </div>
                </div>
                {/*港口流量*/}
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
                {/*服务水平*/}
                <div id="service_sta">
                    <ModuleTitle title="服务水平" type="2"/>
                    <div className="service_sta_box">
                        <TabComponent
                            tabName={["历史服务水平","每月船舶停靠次数","每月停靠数量","装卸效率"]}
                            thisClick={this.tabFunForServiceSta}
                            active={1}
                            name={"service_sta"}
                        />
                        {/*渲染切换的内容*/}
                        {tabContentServiceSta}
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail;