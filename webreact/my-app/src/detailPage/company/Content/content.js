import React from 'react';
import Basic from './Basic/basic';
import Detail from './Detail/detail'
import './index.css'
class content extends React.Component{
    render(){
        return(
            <div id="content">
            <div className="wrap">
                {/*基本信息*/}
                <Basic />
                {/*具体内容*/}
                <Detail />
            </div>
        </div>
        )        
    }
}

export default content;