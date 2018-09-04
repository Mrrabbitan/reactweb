import React,{Component} from 'react';
import ModuleTitle from '../../../Components/Content/PublicComponent/ModuleTitle'
import TabComponent from '../../../Components/Content/PublicComponent/TabComponent'
import HistroyServiceStaEchart_pie from '../../../Components/Content/Echarts/HistroyServiceStaEchart_pie';
import HistroyServiceStaEchart_bar from '../../../Components/Content/Echarts/HistroyServiceStaEchart_bar';
import HistroyServiceStaEchart_line from '../../../Components/Content/Echarts/HistroyServiceStaEchart_line';
import MonthStopCountEchart from '../../../Components/Content/Echarts/MonthStopCountEchart';
import HandingEffEchart from '../../../Components/Content/Echarts/HandingEffEchart';
import $ from 'jquery';
import '../../../style/page.css';
import './index.css';

class ServiceSta extends Component{
    constructor(){
        super();
        this.tabFunForServiceSta = this.tabFunForServiceSta.bind(this);
        this.state = {
            tabServiceSta:1,
            //分页初始化参数
            total: 11,
            current: 1,
            visiblePage: 5,
            //每页显示多少条
            pageNumber:4,
            //年切换
            year:'2017'
        }
    }
    componentDidMount(){
        //年份切换
        $(".service_sta_timeTab>span").on("click",this.yearTimeTab.bind(this));
    }
    //年切换
    yearTimeTab(e){
        $(".service_sta_timeTab>span").removeClass("active");
        $(e.currentTarget).addClass("active");
        this.setState({year:$(e.currentTarget).html()});
    }
    //服务水平切换
    tabFunForServiceSta(data){
        this.setState({tabServiceSta:Number(data)});
    }
    render(){
        /**
         * 服务水平部分切换
         * 切换渲染的echarts等再此修改
         * */
        console.log("renderA")
        let tabContentServiceSta;
        //根据切换来选择渲染某一部分
        if (this.state.tabServiceSta==1){//历史服务水平
            tabContentServiceSta=(<div>
                <div className="service_sta_echart his">
                    {/*饼状图*/}
                    <div>
                        <HistroyServiceStaEchart_pie year={this.state.year} portId={this.props.portId}/>
                    </div>
                    {/*柱状图*/}
                    <div>
                        <HistroyServiceStaEchart_bar year={this.state.year} portId={this.props.portId}/>
                    </div>
                    {/*折线图*/}
                    <div>
                        <HistroyServiceStaEchart_line year={this.state.year} portId={this.props.portId}/>
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
                <div id="service_sta">
                    <ModuleTitle title="服务水平" type="2"/>
                    <div className="service_sta_box">
                        <TabComponent
                            tabName={["历史服务水平","每月船舶停靠次数","每月停靠数量","装卸效率"]}
                            thisClick={this.tabFunForServiceSta}
                            active={1}
                            name={"service_sta"}
                        />
                        <div className="service_sta_timeTab">
                            <span>2016</span>
                            <span className="active">2017</span>
                        </div>
                        {/*渲染切换的内容*/}
                        {tabContentServiceSta}
                    </div>
                </div>
        )
    }
}

export default ServiceSta;