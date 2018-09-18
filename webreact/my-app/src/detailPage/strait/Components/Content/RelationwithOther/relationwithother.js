import React from 'react';
import ModuleTitle from '../../../../port/Components/Content/PublicComponent/ModuleTitle';
import $ from 'jquery';
import './index.css';
import Relationcountry from '../Echarts/RelationCountryEchart/relationcountryechart';
import Relationport from '../Echarts/RelationportEchart/relationportechart';
import Relationgoods from '../Echarts/RelationgoodsEchart/relationgoods';

class relationwithother extends React.Component{
    constructor(){
        super();
        this.state={
            aimtarget:1,
        }
    }

    changetabstate=(e,aimtarget)=>{
        $('.tab_title_rela>span').removeClass('active');
        $(e.currentTarget).addClass('active');

        this.setState({aimtarget})

    }

    render(){
        let relationwithother
if(this.state.aimtarget===1){
    relationwithother=(
        <div className="relation_country_Echart">
            <Relationcountry/>
        </div>
    )
}else if(this.state.aimtarget===2){
    relationwithother=(
        <div className="relation_port_Echart">
            <Relationport/>
        </div>
    )
}else if(this.state.aimtarget===3){
    relationwithother=(
        <div className="relation_goods_Echart">
            <Relationgoods/>
        </div>
    )

}
        return(
            <div id="relation_box">
                <ModuleTitle title='关联关系' type='2'/>
                <div className="relation_content">
                    <div className="tab_title_rela">
                        <span className='active' onClick={(e)=>this.changetabstate(e,1)}>关联经济体</span>
                        <span onClick={(e)=>this.changetabstate(e,2)}>关联港口</span>
                        <span onClick={(e)=>this.changetabstate(e,3)}>关联货物</span>
                    </div>
                 {relationwithother}
                </div>
            </div>
        )
    }
}

export default relationwithother;