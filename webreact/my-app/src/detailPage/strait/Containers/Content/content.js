import React from 'react';
import Basic from './Basic/Basic';
import Detail from './Detail/Detail';


const content =(props)=> {
    
        return(
            <div>

                {/* 基本信息模块 */}
                <Basic/>
                {/* 多模块部分 */}
                <Detail/>

            </div>
        )
    
}

export default content;