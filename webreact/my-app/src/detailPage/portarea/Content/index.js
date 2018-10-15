import React from 'react';
import Basic from './Basic';
import Detail from './Detail';
import './index.css'

const Content = () => {
    return (
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
export default Content;