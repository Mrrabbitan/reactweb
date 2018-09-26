import React from 'react'
import './index.css'
import Berthtype from './Berthtype';
import Temporaryportgoods from './Temoraryportgoods';
import Exportandingoods from './Exportandingoods';

const Detail=(props)=>{
    
        return(
            <div>
                {/* 泊位分类 */}
                <Berthtype {...props}/>
                {/* 实时港货 */}
                <Temporaryportgoods {...props}/>
                {/* 进出口货物 */}
                <Exportandingoods {...props}/>
            </div>
        )
    
}

export default Detail;