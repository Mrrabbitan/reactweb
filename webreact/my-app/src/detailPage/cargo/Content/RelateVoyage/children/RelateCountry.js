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
        exportData: [],
        tableData:[],
        total:0
    }
    componentDidMount() {
        //进口港口请求数据
        this.getGoodImporteCountryServer();
        //出口港口请求数据
        this.getGoodExitCountryServer();
        //表格数据请求
        this.getGoodsImportExitTotalServer(1);
    }
    //进口港口请求数据
    getGoodImporteCountryServer() {
        server.getGoodImporteCountry({ type: this.props.cargoType, year: this.props.year }, (data) => {
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
    //表格数据请求
    getGoodsImportExitTotalServer(pageNum){
        server.getGoodsImportExitTotal({type:this.props.cargoType,year:2017,pageSize:4,pageNum},(data)=>{
            if (data) {
                this.getGoodsImportExitTotalData(data);
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
    //请求表格数据处理
    getGoodsImportExitTotalData(data){
        this.setState({
            tableData:data.data,
            total:data.pageInfo.pages
        })
    }
    handlePageChanged = (n) => { 
        //表格数据请求
        this.getGoodsImportExitTotalServer(Number(n));
    }
    render() {
        const { importType, importData, exportData, exportType,tableData,total } = this.state;
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
                            thead={["国家", "进口货量（吨）", "出口货量（吨）"]}
                            fileName={["country_cn_name","import","exit"]}
                            data={tableData}
                        />
                    </div>
                    <PageEasy
                        total={total}
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