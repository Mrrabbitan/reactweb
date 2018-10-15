import React from 'react';
import ModuleTitle from '../../../Components/ModuleTitleBox';
import BerthClassEchartForPie from './BerthClassEchartForPie';
import TableBox from '../../../Components/Detail/TableBox';
import PageEasy from '../../../Components/Detail/PageEasy';
import server from '../../../../../axios/portAreaServer';
import './index.css'

class BerthType extends React.Component {
    state = {
        //泊位分类返回数据
        pieData: [],
        pieType: [],
        //每页显示多少条
        pageNumber: 4,
        //表格数据
        tableData: [],
        total:0,
    }
    componentDidMount() { 
        //统计表请求
        this.getBerthTotalServer();
        this.getAllBerthDetailServer(1);
    }
    //统计表请求
    getBerthTotalServer() { 
        server.getBerthTotal({ terminalId: this.props.portAreaId}, (data) => { 
            if (data) { 
                this.getBerthTotalData(data);
            }
        })
    }
    //表格数据请求
    getAllBerthDetailServer(pageNum) { 
        server.getAllBerthDetail({ terminalId: this.props.portAreaId, pageNum, pageSize: this.state.pageNumber}, (data) => { 
            if (data) { 
                this.getAllBerthDetailData(data);
            }
        })
    }
    //统计表请求数据处理
    getBerthTotalData(data) { 
        let pieData = [];
        let pieType = [];
        for (let i = 0; i < data.length; i++) {
            pieType.push(data[i].facility_type ? data[i].facility_type : '-');
            pieData.push({
                name: data[i].facility_type ? data[i].facility_type : '-',
                value: data[i].count
            })
        }
        this.setState({
            pieData,
            pieType
        })
    }
    //表格数据处理
    getAllBerthDetailData(data) { 

        this.setState({
            tableData: data.data,
            total:data.pageInfo.pages
        })
    }
    handlePageChanged = (n) => { 
        //表格数据请求
        this.getAllBerthDetailServer(Number(n));
    }
    render() {
        const { pieData, pieType, total, tableData } = this.state;
        return (
                <ModuleTitle type='2' title='泊位分类'>
                    <div className="berthType_content">
                        <div className="berth_class_box">
                            <div className="berth_class_echart">
                            <BerthClassEchartForPie
                                data={pieData}
                                type={pieType}
                            />
                            </div>
                            <div className="berth_class_table">
                                <div>
                                    <TableBox
                                        list={4}
                                        active={2}
                                        thead={["泊位ID", "名称", "状态", "泊位类型", "货物类型", "装卸货物", "经营公司"]}
                                        fileName={["id", "berth_name", "berth_status", "berth_type", "final_type", "dry_bulk", "berth_operator"]}
                                        data={tableData}
                                    />
                                </div>
                                <PageEasy
                                    total={total}
                                    current={1}
                                    pageId="bt_page"
                                    onPageChanged={this.handlePageChanged}
                                />
                            </div>
                        </div>
                    </div>
                </ModuleTitle>
        )
    }
}

export default BerthType;
