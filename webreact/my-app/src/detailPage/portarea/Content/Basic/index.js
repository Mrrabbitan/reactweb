import React from 'react';
import Map from '../../Components/Basic/Map'
import ModuleTitle from '../../Components/ModuleTitleBox';
import './index.css'

class Basic extends React.Component{
    render(){
        return(
            <div id='basic'>
            {/* 左侧海图内容 */}
                <Map/>
                {/* 右侧基本信息模块 */}
                <div className="basic_box">
                    <ModuleTitle title='基本信息' type='1'>
                    </ModuleTitle>
                </div>
            </div>
        )
    }
}

export default Basic;