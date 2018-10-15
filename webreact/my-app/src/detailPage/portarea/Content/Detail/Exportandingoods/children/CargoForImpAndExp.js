import React, { Component } from 'react';
import { ExportChartForPie, ExportChartForLine, ImportChartForPie, ImportChartForLine } from '../charts'
import server from '../../../../../../axios/portAreaServer';
import '../index.css';

class CargoForImpAndExp extends Component { 
    state = {
        //出口
        //饼状图
        pieExpData: [],
        pieExpType: [],
        //线状图
        lineExpData: [],
        lineExpType: [],
        //进口
        //饼状图
        pieImpData: [],
        pieImpType: [],
        //线状图
        lineImpData: [],
        lineImpType: [],
    }
    componentDidMount() { 
        
        //出口数据表请求
        this.getExitGoodsStatisticsByTerminalServer();
        //进口数据表请求
        this.getImportGoodsStatisticsByTerminalServer();
    }
    //出口数据表请求
    getExitGoodsStatisticsByTerminalServer() { 
        server.getExitGoodsStatisticsByTerminal({ terminalId: this.props.portAreaId, year: this.props.year }, (data) => {
            if (data) { 
                this.getExitGoodsStatisticsByTerminalData(data);
            }
        })
    }
    //进口数据表请求
    getImportGoodsStatisticsByTerminalServer() { 
        server.getImportGoodsStatisticsByTerminal({ terminalId: this.props.portAreaId, year: this.props.year }, (data) => {
            if (data) {
                this.getImportGoodsStatisticsByTerminalData(data);
            }
        })
    }
    //出口数据处理
    getExitGoodsStatisticsByTerminalData(data) { 
        //饼状图
        let pieExpData = [];
        let pieExpType = [];
        //线状图
        let lineExpData = new Array(12).fill(0);
        let lineExpType = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
        for (let i = 0; i < data.chart.length; i++) {
            pieExpData.push({
                name: data.chart[i].type,
                value: data.chart[i].original_load
            })   
            pieExpType.push(data.chart[i].type);
        }
        for (let i = 0; i < data.table.length; i++) {
            lineExpData[Number(data.table[i].month)] = data.table[i].original_load
        }
        this.setState({
            pieExpData,
            pieExpType,
            lineExpData,
            lineExpType
        })
           
    }
    //进口数据处理
    getImportGoodsStatisticsByTerminalData(data) { 
        //饼状图
        let pieImpData = [];
        let pieImpType = [];
        //线状图
        let lineImpData = new Array(12).fill(0);
        let lineImpType = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
        for (let i = 0; i < data.chart.length; i++) {
            pieImpData.push({
                name: data.chart[i].type,
                value: data.chart[i].original_load
            })
            pieImpType.push(data.chart[i].type);
        }
        for (let i = 0; i < data.table.length; i++) {
            lineImpData[Number(data.table[i].month)] = data.table[i].original_load
        }
        this.setState({
            pieImpData,
            pieImpType,
            lineImpData,
            lineImpType
        })
    }
    render() { 
        const { pieExpData, pieExpType, lineExpData, lineExpType, pieImpData, pieImpType, lineImpData, lineImpType } = this.state;
        return (
            <div className="cfiae_box">
                <div className="cfiae_export">
                    <div className="cfiae_export_left">
                        <ExportChartForPie
                            data={pieExpData}
                            type={pieExpType}
                        />
                    </div>
                    <div className="cfiae_export_right">
                        <ExportChartForLine
                            data={lineExpData}
                            type={lineExpType}
                        />
                    </div>
                </div>
                <div className="cfiae_import">
                    <div className="cfiae_import_left">
                        <ImportChartForPie
                            data={pieImpData}
                            type={pieImpType}
                        />
                    </div>
                    <div className="cfiae_import_right">
                        <ImportChartForLine
                            data={lineImpData}
                            type={lineImpType}
                        />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default CargoForImpAndExp;