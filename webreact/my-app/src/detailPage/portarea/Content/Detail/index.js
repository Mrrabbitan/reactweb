import React from 'react'
import './index.css'
import BerthType from './BerthType';
import TemoraryPortGoods from './TemoraryPortGoods';
import ExportAndInGoods from './ExportAndInGoods';
import { connect } from 'react-redux';

const Detail = (props) => {
    console.log(props)
        return(
            <div>
                {/* 泊位分类 */}
                <BerthType {...props}/>
                {/* 实时港货 */}
                <TemoraryPortGoods {...props}/>
                {/* 进出口货物 */}
                <ExportAndInGoods {...props}/>
            </div>
        )
    
}

export default connect(
    state => { 
        return {
            portAreaId: state.portAreaId,
            year:state.year
        }
    }
)(Detail);