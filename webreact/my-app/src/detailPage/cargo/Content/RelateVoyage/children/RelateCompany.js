import React, { Component } from 'react';
import ImportCompanyTenChartForPie from '../charts/ImportCompanyTenChartForPie';
import ExportCompanyTenChartForPie from '../charts/ExportCompanyTenChartForPie';
import server from '../../../../../axios/cargoServer';
import './index.css';

class RelateCompany extends Component {
    state = {
        importData: [],
        importType: [],
        exportData: [],
        exportType: []
    }
    componentDidMount() { 
        //两个图表数据请求
        this.getGoodsImportExitTotalByCompanyServer();
    }
    //两个图表数据请求
    getGoodsImportExitTotalByCompanyServer() { 
        server.getGoodsImportExitTotalByCompany({ type: this.props.cargoType, year: this.props.year }, (data) => { 
            if (data) { 
                this.getGoodsImportExitTotalByCompanyData(data);
            }
        })
    }
    //数据处理
    getGoodsImportExitTotalByCompanyData(data) { 
        let importData = data.importTotal.map((item) => { 
            return {
                value: item.volume,
                name: item.operatorcompany
            }
        })
        let importType = data.importTotal.map((item) => {
            return item.operatorcompany
        })
        let exportData = data.exitTotal.map((item) => {
            return {
                value: item.volume,
                name: item.operatorcompany
            }
        })
        let exportType = data.exitTotal.map((item) => {
            return item.operatorcompany
        })
        this.setState({
            importData, importType, exportData, exportType
        })
        console.log(importData)

    }
    handlePageChanged = () => {

    }
    render() {
        const { importData, importType, exportData, exportType } = this.state;
        return (
            <div className="rcp_box">
                <div className="rcp_chart_box">
                    <div className="rcp_chart_1">
                        <ImportCompanyTenChartForPie
                            data={importData}
                            type={importType}
                        />
                    </div>
                    <div className="rcp_chart_2">
                        <ExportCompanyTenChartForPie
                            data={exportData}
                            type={exportType}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default RelateCompany;