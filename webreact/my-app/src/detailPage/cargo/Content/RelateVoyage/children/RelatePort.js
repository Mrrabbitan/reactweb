import React, { Component } from 'react';
import ImportPortTenChartForPie from '../charts/ImportPortTenChartForPie';
import ExportPortTenChartForPie from '../charts/ExportPortTenChartForPie';
import TableBox from '../../../Components/Detail/TableBox';
import PageEasy from '../../../Components/Detail/PageEasy';
import server from '../../../../../axios/cargoServer';
import './index.css';

class RelatePort extends Component {
    state = {
        importType: [],
        importData: [],
        exportType: [],
        exportData: []
    }
    componentDidMount() {
        //进口港口请求数据
        this.getGoodImportePortServer();
        //出口港口请求数据
        this.getGoodExitPortServer();
    }
    //进口港口请求数据
    getGoodImportePortServer() {
        server.getGoodImportePort({ type: this.props.cargoType, year: 2017 }, (data) => {
            if (data) {
                this.getGoodImportePortData(data)
            }
        })
    }
    //出口港口请求数据
    getGoodExitPortServer() {
        server.getGoodExitPort({ type: this.props.cargoType, year: 2017 }, (data) => {
            if (data) {
                this.getGoodExitPortData(data);
            }
        })
    }
    //进口港口数据处理
    getGoodImportePortData(data) { 
        let importType = [];
        let importData = [];
        for (let i = 0; i < data.length; i++) { 
            importType.push(data[i].arrive_port);
            importData.push({
                name: data[i].arrive_port,
                value: data[i].volume
            })
        }
        this.setState({
            importType, importData
        })
    }
    //出口港口数据处理
    getGoodExitPortData(data) { 
        let exportType = [];
        let exportData = [];
        for (let i = 0; i < data.length; i++) {
            exportType.push(data[i].start_port);
            exportData.push({
                name: data[i].start_port,
                value: data[i].volume
            })
        }
        this.setState({
            exportType, exportData
        })
    }
    handlePageChanged = () => {

    }
    render() {
        const { importType, importData, exportData, exportType} = this.state;
        return (
            <div className="rp_box">
                <div className="rp_chart_box">
                    <div className="rp_chart_1">
                        <ImportPortTenChartForPie
                            data={importData}
                            type={importType}
                        />
                    </div>
                    <div className="rp_chart_2">
                        <ExportPortTenChartForPie
                            data={exportData}
                            type={exportType}
                        />
                    </div>
                </div>
                <div className="rp_table_box">
                    <div className="rp_table_box">
                        <TableBox
                            list={4}
                            active={2}
                            thead={["行为类型", "发生海域", "持续时长", "开始时间", "开始位置（经度/纬度）", "结束时间", "结束位置（经度/纬度）"]}
                            fileName={["act_type", "sea_area", "duration_time", "start_datetime", "startlatlng", "end_datetime", "endlatlng"]}
                            data={[]}
                        />
                    </div>
                    <PageEasy
                        total={20}
                        current={1}
                        pageId="rp_page"
                        onPageChanged={this.handlePageChanged}
                    />
                </div>
            </div>
        )
    }
}
export default RelatePort;