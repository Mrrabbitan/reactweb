import React, { Component } from 'react';
import VoyageTrendChartForLine from '../charts/VoyageTrendChartForLine';
import TableBox from '../../../Components/Detail/TableBox';
import PageEasy from '../../../Components/Detail/PageEasy';
import BtnTitle from '../../../Components/Detail/BtnTitle';
import server from '../../../../../axios/cargoServer';
import './index.css';

class RelateVoyageCount extends Component {
    state = {
        chartType: [],
        chartData: [],
        tableData: [],
        pages:0
    }
    componentDidMount() { 
        //航行趋势
        this.getGoodTypeVoyageServer();
        //航行表格
        this.getGoodTypeRelationShipServer(1);
    }
    //航行趋势数据请求
    getGoodTypeVoyageServer() { 
        server.getGoodTypeVoyage({ type: this.props.cargoType, year: this.props.year }, (data) => { 
            if (data) { 
                this.getGoodTypeVoyageData(data);
            }
        })
    }
    //航行表格请求
    getGoodTypeRelationShipServer(pageNum) { 
        server.getGoodTypeRelationShip({ type: this.props.cargoType, year: "2017",pageNum,pageSize:4 }, (data) => {
            if (data) {
                this.getGoodTypeRelationShipData(data);
            }
        })
    }
    //航行表格数据处理
    getGoodTypeRelationShipData(data) { 
        this.setState({
            tableData: data.data,
            pages:data.pageInfo.pages
        })
    }
    //航行趋势数据处理
    getGoodTypeVoyageData(data) { 
        let chartType = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        let chartData = [];
        for (let i = 0; i < 12; i++) {
            chartData.push(data[i].floor);
        }
        this.setState({
            chartType, chartData
        })
    
    }
    handlePageChanged = (page) => { 
        this.getGoodTypeRelationShipServer(page);
    }
    render() {
        const { tableData = [], chartData = [], chartType = [], pages = 0 } = this.state;
        
        return (
            <div className="rvc_box">
                <div className="rvc_chart_box">
                    <BtnTitle className="rvc_chart_title">近一年航行趋势</BtnTitle>  
                    <VoyageTrendChartForLine
                        type={chartType}
                        data={chartData}
                    />
                </div>
                <div className="rvc_table_box">
                    <div className="rvc_table_box_box">
                        <TableBox
                            list={4}
                            active={2}
                            thead={["船舶名称", "MMSI", "港口名称","国家/地区", "到港时间", "靠泊时间", "离港时间", "港口停留", "码头作业", "等泊事件", "航时", "航程", "停靠次数", "装卸货物"]}
                            fileName={["ship_name", "mmsi", "start_port","country_cn_name", "arrive_time", "name", "start_time", "stay", "name", "name", "name", "name", "name", "type"]}
                            data={tableData}
                        />
                    </div>
                    <PageEasy
                        total={pages}
                        current={1}
                        pageId="rvc_page"
                        onPageChanged={this.handlePageChanged}
                    />
                </div>
            </div>
        )
    }
}
export default RelateVoyageCount;