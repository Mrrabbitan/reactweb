import React from 'react';
import './index.css'
import ModuleTitle from '../../../Components/ModuleTitleBox';
import TableBox from '../../../Components/Detail/TableBox';
import PageEasy from '../../../Components/Detail/PageEasy';
import PortAndCargoChartForBar from './PortAndCargoChartForBar';
import server from '../../../../../axios/portAreaServer';


class TemoraryPortGoods extends React.Component {
    state = {
        chartDataNum: [],
        chartDataWeight:[],
        chartType: [],
        data:[],
        pageSize: 4,
        total:0
    }
    componentDidMount() { 
        //货物质量和数量统计
        this.getGoodsWeightAndNumberStatisticsServer();
        //表格数据请求
        this.getRealTimeGoodsServer(1);
    }
    //货物质量和数量统计
    getGoodsWeightAndNumberStatisticsServer() { 
        server.getGoodsWeightAndNumberStatistics({ terminalId: this.props.portAreaId }, (data) => { 
            if (data) { 
                this.getGoodsWeightAndNumberStatisticsData(data);
            }
        })
    }
    //表格数据请求
    getRealTimeGoodsServer(pageNum) { 
        server.getRealTimeGoods({ terminalId: this.props.portAreaId, pageNum, pageSize: this.state.pageSize }, (data) => { 
            if (data) { 
                this.getRealTimeGoodsData(data);
            }
        })
    }
    //货物质量和数量统计
    getGoodsWeightAndNumberStatisticsData(data) { 
        let chartDataNum = [];
        let chartDataWeight = [];
        for (let i = 0; i < data.length;i++) { 
            // chartDataNum.push(tonnage)
            // chartDataWeight.push()
        }
    }
    //表格数据处理
    getRealTimeGoodsData(data) { 
        this.setState({
            data: data.data,
            total:data.pageInfo.pages
        })
    }
    handlePageChanged = () => {
        
    }
    render() {
        const { chartDataNum, chartDataWeight, chartType, data, total} = this.state;
        
        return (
            <div id="TemporaryPortGoods_box">
                <ModuleTitle type="2" title="实时港货">
                    <div className="TemporaryPortGoods_content">
                        <div className="tpg_table_box">
                            <div className="tpg_table_box_box">
                                <TableBox
                                    list={4}
                                    active={2}
                                    thead={["MMSI", "船名", "呼号", "国家", "船舶类型", "所装货物类型", "货量","吃水","目的港口","更新时间"]}
                                    fileName={["mmsi", "shipname", "imo", "registeredownercountry", "shiptype", "name", "name", "name","portname","name"]}
                                    data={data}
                                />
                            </div>
                            <PageEasy
                                total={total}
                                current={1}
                                pageId="tpg_page"
                                onPageChanged={this.handlePageChanged}
                            />
                        </div>
                        <div className="tpg_chart_box">
                            <PortAndCargoChartForBar
                                data1={chartDataNum}
                                data2={chartDataWeight}
                                type={chartType}
                            />
                        </div>
                    </div>
                </ModuleTitle>

            </div>
        )
    }
}

export default TemoraryPortGoods;