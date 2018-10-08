import React from 'react';
import TableBox from '../../PublicComponent/TableBox';

const Countrytable =(props)=>{
    return(
        <div id="country_table_in_relation">
            <TableBox
                list={4}
                active={1}
                thead={['国家','经过该海峡总流量','经过该海峡总货运量','占国家总货量比例']}
                filename={[]}
                data={[]}
            />

        </div>
    )
}
export default Countrytable;