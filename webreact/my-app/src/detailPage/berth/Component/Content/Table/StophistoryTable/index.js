import React from 'react'
import TableBox from '../../PublicComponent/TableBox';
import PageEasy from '../../../../../cargo/Components/Detail/PageEasy';

class StophistoryTable extends React.Component{
    constructor(){
        super();

    }
    handlePageChanged = (n) => {
            this.props.fun(Number(n))
     }
render(){

    let shipdetail=this.props.data.data1?this.props.data.data1:[];
    return(
        <div className="stop_ship_history_table">
            <TableBox
                list={4}
                active={1}
                thead={['MMSI','船名','国家','IMO','船舶类型','进入时间','驶离时间','待舶时长','货物类型','装卸货量']}
                fileName={["mmsi",'shipname','flagcountry','imo','shiptype','destination_in_utc','destination_out_utc','shipstatus','fueltype1','fueltype1capacity']}
                data={shipdetail}
            />
            <PageEasy
                total={Math.ceil(shipdetail.length/this.props.data.pageSize)}
                current={1}
                pageId="detail_page"
                onPageChanged={this.handlePageChanged}
            />
        </div>
    )
}

}

export default StophistoryTable