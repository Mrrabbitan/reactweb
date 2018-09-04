import React, {Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle'
import TableBox from '../../../Components/Content/PublicComponent/TableBox'
import PageEasy from '../../../Components/Content/PublicComponent/PageEasy';
import server from '../../../../../axios/portAndBerthServer';
import '../../../style/page.css';
import './index.css';

class PortDis extends Component {
    constructor() {
        super();
        this.handlePageChanged = this.handlePageChanged.bind(this);
        this.state = {
            //港区信息返回数据
            selectTerminalInfoData: null,
            selectTerminalInfoCount: 0,
            pageNumber: 4
        }
    }

    componentWillMount() {
        //港区信息请求处理
        this.selectTerminalInfoServer(1);
    }

    //港区信息请求处理
    selectTerminalInfoServer(currentPage) {
        let self = this;
        //港区信息
        server.selectTerminalInfo({id: this.props.portId, currentPage, number: this.state.pageNumber}, (data)=> {
            if (data) {
                self.setState({selectTerminalInfoData: data.data, selectTerminalInfoCount: data.count})
            }
        })
    }
    //港区信息分页
    handlePageChanged(page) {
        this.selectTerminalInfoServer(page);
    }

    render() {
        /**
         *总数不存在时初始化0
         * */
        let totalPageForPort = this.state.selectTerminalInfoCount ? Math.ceil(this.state.selectTerminalInfoCount / this.state.pageNumber) : 0;
        return (
            <div id="port_dis">
                <ModuleTitle title="港区信息" type="2"/>
                <div className="port_dis_box">
                    {
                        this.state.selectTerminalInfoData ?
                            <TableBox
                                list={this.state.pageNumber}
                                active={2}
                                thead={["港区名称", "经营公司", "类型", "经度", "纬度", "泊位数"]}
                                fileName={["terminal_name", "terminal_operator", "facility_type", "longitude", "latitude", "count"]}
                                data={this.state.selectTerminalInfoData}
                            /> : ''
                    }
                    {
                        this.state.selectTerminalInfoData ?
                            <PageEasy
                                total={totalPageForPort}
                                current={1}
                                position={'center'}
                                onPageChanged={this.handlePageChanged}
                            /> : ''
                    }

                </div>
            </div>
        )
    }
}
export default PortDis;