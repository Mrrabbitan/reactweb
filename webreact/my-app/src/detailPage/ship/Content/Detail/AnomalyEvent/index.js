import React, { Component } from 'react';
import ModuleTitleBox from '../../../Components/ModuleTitleBox';
import TableBox from '../../../Components/Detail/TableBox';
import PageEasy from '../../../Components/Detail/PageEasy';
import server from '../../../../../axios/shipServer';
import AnomalyEventChartForPie from './AnomalyEventChartForPie';
import AnomalyEventChartForLine from './AnomalyEventChartForLine';
import './index.css';

class AnomalyEvent extends Component { 
    static defaultProps = {
        pageSize:4
    }
    state = {
        total: 0,
        //表格数据初始化
        dataTable: [],
        //饼状图类型列表（显示图例）
        typePie: [],
        //饼状图数据初始化
        dataPie: [],
        //线状图数据
        dataLine: [],
        //线状图类型列表（显示图例）
        typeLine:[]
    }
    componentDidMount() { 
        //异常事件的表格数据请求
        this.getShipInfoListAnormalEventServer(1);
        //图表数据请求
        this.getShipInfoEcharsAnormalEventServer();
    }
    //异常事件的表格数据请求
    getShipInfoListAnormalEventServer(currentpage) { 
        server.getShipInfoListAnormalEvent({ mmsi: this.props.mmsi, currentpage, pagesize: this.props.pageSize }, (data) => { 
            if (data.data) { 
                this.setState({
                    total: data.data.count,
                    dataTable:data.data.list
                })
            }
            
        })
    }
    //图表数据请求
    getShipInfoEcharsAnormalEventServer() { 
        server.getShipInfoEcharsAnormalEvent({ mmsi: this.props.mmsi}, (data) => {
            if (data.data) {
                this.getShipInfoEcharsAnormalData(data.data)
            }
        })
    }
    //图表数据处理
    getShipInfoEcharsAnormalData(data) { 
        let typePie = [];
        let dataLine = [];
        let typeLine = [];
        //饼状图处理
        for (let i = 0; i < data.per.length; i++) {
            typePie.push(data.per[i].name);
        }
        //线状图处理
        for (let key in data.line) { 
            typeLine.push(key)
            dataLine.push({
                name: key,
                type: 'line',
                data: data.line[key]
            })
        }
        this.setState({
            typePie,
            dataPie: data.per,
            typeLine,
            dataLine
        })
    }
    //页数变化
    handlePageChanged = (page) => { 
        this.getShipInfoListAnormalEventServer(page);
    }
    render() { 
        return (
            <ModuleTitleBox type="2" title="异常事件">
                <div className="mtb_echart_box">
                    <div>
                        {/* 饼状图 */}
                        <AnomalyEventChartForPie
                            data={this.state.dataPie}
                            type={this.state.typePie}
                        />
                    </div>
                    <div>
                        {/* 线状图 */}
                        <AnomalyEventChartForLine
                            type={this.state.typeLine}
                            data={this.state.dataLine}
                        />
                    </div>
                </div>
                <div className="mtb_table">
                    <div className="mtb_table_box">
                        <TableBox
                            list={this.props.pageSize}
                            active={2}
                            thead={["行为类型", "发生海域", "持续时长", "开始时间", "开始位置（经度/纬度）", "结束时间", "结束位置（经度/纬度）"]}
                            fileName={["act_type", "sea_area", "duration_time", "start_datetime", "startlatlng", "end_datetime", "endlatlng"]}
                            data={this.state.dataTable}
                        />
                    </div>
                    <PageEasy
                        total={Math.ceil(this.state.total / this.props.pageSize)}
                        current={1}
                        pageId="mtb_page"
                        onPageChanged={this.handlePageChanged}
                    />
                </div>

            </ModuleTitleBox>
        )
    }
}
export default AnomalyEvent;