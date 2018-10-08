import React from 'react';
import TableBox from '../../PublicComponent/TableBox';
import PageEasy from '../../PublicComponent/PageEasy';
import server from '../../../../../../axios/CompanyServer';
import '../index.css'

class relationtoptable extends React.Component{
    static defaultProps = {
        pageSize:4
    }
    state={
        /* 表格数据初始化 */
        dataTable:[]
    }
    componentDidMount(){
        this.getCompanytableallteamserver(1);//必须调一下
    }
    getCompanytableallteamserver(currentpage){
        server.getCompanytableallteam({ code: '0000249', currentpage, pagesize: this.props.pageSize }, (data) => { 
            if (data.data) { 
                this.setState({
                    total: data.data.count,
                    dataTable:data.data.list,
                    
                })
            }
            
        })
    }
    render(){
        return(
            <div className="relationtop_table">
                    <div className="relation_table_box">
                        <TableBox
                            list={this.props.pageSize}
                            active={2}
                            thead={["船舶IMO", "船名", "船籍", "船舶状态", "载重/吨", "总吨", "船舶类型","建造日期","主机型号","主机数量","异常事件","更新时间"]}
                            fileName={["imo", "shipname", "flagcountry", "shipstatus", "deadweight", "grosstonnage", "shiptype","builddate","fueltype2","mainnumberofcylinders","shipstatuseffectivedate","dataupdatetime"]}
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
        )
    }
}
export default relationtoptable;