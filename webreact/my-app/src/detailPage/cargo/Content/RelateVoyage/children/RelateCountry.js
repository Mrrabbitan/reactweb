import React, { Component } from 'react';
import ImportCountryTenChartForPie from '../charts/ImportCountryTenChartForPie';
import ExportCountryTenChartForPie from '../charts/ExportCountryTenChartForPie';
import TableBox from '../../../Components/Detail/TableBox';
import PageEasy from '../../../Components/Detail/PageEasy';
import server from '../../../../../axios/cargoServer';
import './index.css';

class RelateCountry extends Component {
    state = {
        importType: [],
        importData: [],
        exportType: [],
        exportData: []
    }
    componentDidMount() {
        //进口港口请求数据
        this.getGoodImporteCountryServer();
        //出口港口请求数据
        this.getGoodExitCountryServer();
    }
    //进口港口请求数据
    getGoodImporteCountryServer() {
        server.getGoodImporteCountry({ type: this.props.cargoType, year: 2017 }, (data) => {
            if (data) {
                this.getGoodImporteCountryData(data)
            }
        })
    }
    //出口港口请求数据
    getGoodExitCountryServer() {
        server.getGoodExitCountry({ type: this.props.cargoType, year: 2017 }, (data) => {
            if (data) {
                this.getGoodExitCountryData(data);
            }
        })
    }
    //进口港口数据处理
    getGoodImporteCountryData(data) {
        let importType = [];
        let importData = [];
        for (let i = 0; i < data.length; i++) {
            importType.push(data[i].country_cn_name ? data[i].country_cn_name : data[i].arrive_country);
            importData.push({
                name: data[i].country_cn_name ? data[i].country_cn_name : data[i].arrive_country,
                value: data[i].volume
            })
        }
        this.setState({
            importType, importData
        })
    }
    //出口港口数据处理
    getGoodExitCountryData(data) {
        let exportType = [];
        let exportData = [];
        for (let i = 0; i < data.length; i++) {
            exportType.push(data[i].country_cn_name ? data[i].country_cn_name : data[i].start_country);
            exportData.push({
                name: data[i].country_cn_name ? data[i].country_cn_name : data[i].start_country,
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
        const { importType, importData, exportData, exportType } = this.state;
        return (
            <div className="rc_box">
                <div className="rc_chart_box">
                    <div className="rc_chart_1">
                        <ImportCountryTenChartForPie
                            data={importData}
                            type={importType}
                        />
                    </div>
                    <div className="rc_chart_2">
                        <ExportCountryTenChartForPie
                            data={exportData}
                            type={exportType}
                        />
                    </div>
                </div>
                <div className="rc_table_box">
                    <div className="rc_table_box">
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
                        pageId="rc_page"
                        onPageChanged={this.handlePageChanged}
                    />
                </div>
            </div>
        )
    }
}
export default RelateCountry;