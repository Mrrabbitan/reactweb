import React from 'react';
import TableBox from '../../PublicComponent/TableBox';
import PageEasy from '../../PublicComponent/PageEasy';
import './index.css'

class Countrytable extends React.Component{
    constructor(){//without this props cannot be insert into this function
        super();
    }
    
    render(){
    let countrydetail=this.props.data.data?this.props.data.data:[];
    return(
        <div id="country_table_in_relation">
            <TableBox
                list={4}
                active={1}
                thead={['国家','经过该海峡总流量','经过该海峡总货运量','占国家总货量比例']}
                fileName={['country','voyage','totalton','baifenbi']}
                data={countrydetail}
            />
            <PageEasy
                        total={Math.ceil(countrydetail.length / this.props.data.pageSize)}
                        current={1}
                        pageId="unlock_page"
                        onPageChanged={this.handlePageChanged}
                    />
        </div>
    )
  }
}
export default Countrytable;