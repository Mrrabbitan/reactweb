import React from 'react';
import Server from '../../../../../../axios/CompanyServer'
import TableBox from '../../PublicComponent/TableBox';
import PageEasy from '../../PublicComponent/PageEasy';

class runningteam extends React.Component{
    static defaultProps={
        Pagesize:4,
    }
    state={
        /* 初始化表格 */
        datatable:[],
        total:[],
    }
    componentDidMount(){
        this.getOperateFleetServer(1)
    }

    getOperateFleetServer(currentpage){
        Server.getOperateFleet({code:'0000249',currentpage,pagesize:4},(data)=>{
           if(data){
                this.setState({
                    total:data.data.count,
                    datatable:data.data.list
                })
           }
        })
    }

    handlePageChanged =(n)=>{
        this.getOperateFleetServer(Number(n));
    }
    render(){
        return(
            <div className="mtb_table">
                    <div className="mtb_table_box">
                    <TableBox
                        list={4}
                        avtive={1}
                        thead={["船舶IMO", "船名", "船籍", "船舶状态", "载重/吨", "总吨", "船舶类型","建造日期","主机型号","主机数量","异常事件","更新时间"]}
                        fileName={["imo", "shipname", "flagcountry", "shipstatus", "deadweight", "grosstonnage", "shiptype","builddate","fueltype2","mainnumberofcylinders","shipstatuseffectivedate","dataupdatetime"]}
                        data={this.state.datatable}
                    />
                    </div>
                    <PageEasy
                        total={Math.ceil(this.state.total / this.props.Pagesize)}
                        current={1}
                        pageId="mtb_page"
                        onPageChanged={this.handlePageChanged}
                    />
            </div>
        )
    }
}
export default runningteam;