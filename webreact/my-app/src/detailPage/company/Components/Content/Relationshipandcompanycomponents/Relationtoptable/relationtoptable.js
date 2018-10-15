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
        dataTable:[],//不声明没有容器来承载数据，这个容器就是一个数组
        count:[]
    }
    componentDidMount(){
        this.relationtableserver(1);//必须调一下
    }
    relationtableserver(currentpage){
        server.relationtable({ code: '0003376', currentpage, pagesize: this.props.pageSize }, (data) => { 
            if (data.data) { 
                this.setState({
                    total: data.data.count,
                    dataTable:data.data.list,
                    
                })
            }
            
        })
    }

    handlePageChanged=(n)=>{
        this.relationtableserver(Number(n));
    }
    render(){
        return(
            <div className="relationtop_table">
                    <div className="relation_table_box">
                        <TableBox
                            list={4}
                            active={1}
                            thead={["船队类型", "MMSI", "呼号", "IMO", "类型", "关联公司", "关联公司船队类型"]}
                            fileName={["shiptypegroup", "mmsi", "callsign", "imo", "type", "doccompany", "shiptypelevel5subgroup"]}
                            data={this.state.dataTable}
                        />
                    </div>
                    <PageEasy
                        total={Math.ceil(this.state.total / 4)}
                        current={1}
                        pageId="mtb_page"
                        onPageChanged={this.handlePageChanged}
                    />
                </div>
        )
    }
}
export default relationtoptable;