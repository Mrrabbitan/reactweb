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
        exportData: [],
        tableData:[],
        total:0
    }
    componentDidMount() {
        if(this._ismount){
        //进口港口请求数据
        this.getGoodImportePortServer();
        //出口港口请求数据
        this.getGoodExitPortServer();
        //表格数据请求
        this.getGoodsDetailByPortServer(1);
        }
        
    }
    //进口港口请求数据
    getGoodImportePortServer() {
        server.getGoodImportePort({ type: this.props.cargoType, year: this.props.year }, (data) => {
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
    //表格数据请求
    getGoodsDetailByPortServer(pageNum){
        server.getGoodsDetailByPort({type:this.props.cargoType,year:2017,pageSize:4,pageNum},(data)=>{
            if (data) {
                this.getGoodsDetailByPortData(data);
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
    //请求表格数据处理
    getGoodsDetailByPortData(data){
        let d = data.data;
        let tableData = [];
        for(let i=0;i<d.length;i++){
            tableData.push({
                ...d[i],
                globalproportion:d[i].globalproportion?d[i].globalproportion*100+'%':0,
                countryproportion:d[i].countryproportion?d[i].countryproportion*100+'%':0
            })
        }
        this.setState({
            tableData,
            total:data.pageInfo.pages
        })
        console.log(data.pageInfo.pages)
    }
    handlePageChanged = (n) => {
        //表格数据请求
        this.getGoodsDetailByPortServer(Number(n));
    }
    render() {
        const { importType, importData, exportData, exportType,tableData,total} = this.state;
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
                            thead={["港口名称", "所属国家", "经度", "纬度", "进口货量（吨）", "出口货量（吨）", "全球占比","所属国家占比"]}
                            fileName={["port", "country_cn_name", "longitudedecimal", "latitudedecimal", "import", "exit", "globalproportion","countryproportion"]}
                            data={tableData}
                        />
                    </div>
                    <PageEasy
                        total={total}
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