import React from 'react';
import TableBox from '../../PublicComponent/TableBox';
import PageEasy from '../../PublicComponent/PageEasy';

class Porttable extends React.Component{
    constructor(){
        super();
    }

    render(){
        let porttablerela=this.props.data.data1?this.props.data.data1:[];
        console.log(porttablerela)
    return (
        <div className="port_table_in_rela">
            <TableBox
                list={4}
                active={1}
                thead={['国家','经过该海峡总流量','经过该海峡总货运量','占国家总货量比例']}
                fileName={['country','voyage','totalton','baifenbi']}
                data={porttablerela}
            />
            <PageEasy
                total={Math.ceil(porttablerela.length / this.props.data.pageSize)}
                current={1}
                pageId="unlock_page"
                onPageChanged={this.handlePageChanged}
            />
        </div>
    )
    }
}
export default Porttable;
