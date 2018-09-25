import React from 'react';
import ModuleTitle from '../../PublicComponent/ModuleTitle/index'
import '../index.css'
import Relationbottomchart
    from '../../Relationshipandcompanycomponents/Relationbottomchart/relationbottomchart';
import Relationtoptable
    from '../../Relationshipandcompanycomponents/Relationtoptable/relationtoptable';

class relationshipandcomp extends React.Component{
render(){
    return(
        <div id="relationshipandcomp_box">
            <ModuleTitle title="关联船舶及公司" type="2"/>
            <div id="relation_content">
            {/* 上方表格数据插入 */}
                <Relationtoptable/>
            {/* 下方图表数据插入 */}
                <Relationbottomchart/>
            </div>
        </div>

    )

}

}
export default relationshipandcomp;