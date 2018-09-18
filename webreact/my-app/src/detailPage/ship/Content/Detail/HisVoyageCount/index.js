import React, { Component } from 'react';
import ModuleTitleBox from '../../../Components/ModuleTitleBox';
import CargoPerChartForPie from './CargoPerChartForPie';
import VoyageTrendChartForLine from './VoyageTrendChartForLine';
import LivePortChartForBar from './LivePortChartForBar';
import LiveCountryChartForBar from './LiveCountryChartForBar';
import BtnTitle from '../../../Components/Detail/BtnTitle';
import TableBox from '../../../Components/Detail/TableBox';
import PageEasy from '../../../Components/Detail/PageEasy';
import server from '../../../../../axios/shipServer';
import './index.css';

class HisVoyageCount extends Component { 
    state = {
        //货物比例
        cargoType: [],
        cargoData: [],
        //航行趋势
        trendType: [],
        trendData: [],
        //活跃港口
        portType: [],
        portDataHC: [],
        portDataHL:[],
        //活跃国家
        countryType: [],
        countryDataHC: [],
        countryDataHL: [],
        //表格数据
        tableData: [],
        //表格显示条数
        pageSize: 4,
        total:0
    }
    componentDidMount() { 
        //历史航次四个图表请求
        this.getShipInfoEcharsHistroyHCServer();
        //表格数据请求
        this.getShipInfoListHistroyHCServer(1);
    }
    //历史航次四个图表请求
    getShipInfoEcharsHistroyHCServer() { 
        server.getShipInfoEcharsHistroyHC({ shipid: this.props.shipId }, (data) => { 
            if (data.data) { 
                this.getShipInfoEcharsHistroyHCData(data.data)
            }
        })
    }
    //表格数据请求
    getShipInfoListHistroyHCServer(currentpage){
        server.getShipInfoListHistroyHC({ currentpage, pagesize: this.state.pageSize, shipid: this.props.shipId }, (data) => { 
            if (data.data) { 
                this.getShipInfoListHistroyHCData(data.data)
                console.log(data)
            }
        })
    }
    //历史航次四个图表数据处理
    getShipInfoEcharsHistroyHCData(data) { 
        //货物比例
        let cargoType = data.hwblName;
        let cargoData = data.hwbl;
        //航行趋势
        let trendType = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        let trendData = new Array(12).fill(0);
        //活跃港口
        let portType = data.portName;
        let portDataHC = data.PortHC;
        let portDataHL = data.PortHYL;
        //活跃国家
        let countryType = data.countryName;
        let countryDataHC = data.countryHC;
        let countryDataHL = data.countryHYL;
        
        //航行趋势处理
        for (let i = 0; i < data.hxqs.length; i++) {
            trendData[data.hxqs[i].startmouth - 1] = data.hxqs[i].value;
        }

        this.setState({
            cargoType,
            cargoData,
            trendType,
            trendData,
            portType,
            portDataHC,
            portDataHL,
            countryType,
            countryDataHC,
            countryDataHL
        })

    }
    //表格数据处理
    getShipInfoListHistroyHCData(data) {
        this.setState({
            tableData: data.list,
            total:data.count
        })
    }
    //页数切换
    handlePageChanged = (n) => { 
        this.getShipInfoListHistroyHCServer(Number(n));
    }
    render() { 
        const {
            cargoType,
            cargoData,
            trendType,
            trendData,
            portType,
            portDataHC,
            portDataHL,
            countryType,
            countryDataHC,
            countryDataHL,
            tableData,
            pageSize,
            total
        } = this.state;
        return (
            <ModuleTitleBox type="1" title="历史航次">
                <div className="hisVoyageCount_box">
                    <div className="hvc_chart_top">
                        <div className="hvc_chart_top_cargo">
                            <BtnTitle className="btn_title_cargo">货物比例</BtnTitle>
                            {/* 货物比例 */}
                            <CargoPerChartForPie
                                data={cargoData}
                                type={cargoType}
                            />
                        </div>
                        <div className="hvc_chart_top_trend">
                            <BtnTitle className="btn_title_trend">近一年航行趋势</BtnTitle>
                            {/* 航运趋势 */}
                            <VoyageTrendChartForLine
                                data={trendData}
                                type={trendType}
                            />
                        </div>
                    </div>
                    <div className='hvc_chart_center'>
                        <div className="hvc_chart_center_livePort">
                            <BtnTitle className="btn_title_port">活跃港口</BtnTitle>
                            {/* 活跃港口 */}
                            <LivePortChartForBar
                                data1={portDataHC}
                                data2={portDataHL}
                                type={portType}
                            />
                        </div>
                        <div className="hvc_chart_center_liveCountry">
                            <BtnTitle className="btn_title_country">活跃国家</BtnTitle>
                            {/* 活跃国家 */}
                            <LiveCountryChartForBar
                                data1={countryDataHC}
                                data2={countryDataHL}
                                type={countryType}
                            />
                        </div>
                    </div>
                    <div className='hvc_table'>
                        <div className="hvc_table_box">
                            <TableBox
                                list={4}
                                active={2}
                                thead={["港口名称", "国家/地区", "到港时间", "靠泊时间", "离港时间", "港口停留", "码头作业","等泊事件","航时","航程","停靠次数","装卸货物","装卸货量"]}
                                fileName={["arrive_port", "arrive_country", "arrive_time", "name", "name", "name", "name", "name", "name", "name", "voyage", "type","volume"]}
                                data={tableData}
                            />
                        </div>
                        <PageEasy
                            total={Math.ceil(total/pageSize)}
                            current={1}
                            pageId="hvc_table_page"
                            onPageChanged={this.handlePageChanged}
                        />
                    </div>
                </div>
            </ModuleTitleBox>
        )
    }
}
export default HisVoyageCount;