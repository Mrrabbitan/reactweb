import React,{Component} from 'react';
import './index.css'
import $ from 'jquery';
import Select from '../../../../PublicComponent/Select/Select';

class PowerSearch extends Component{
    constructor(){
        super();
        this.getSelectValue = this.getSelectValue.bind(this);
    }

    componentDidMount(){
        $(".ps_tab_box").on("click",this.tabChange)
    }
    tabChange(){

    }
    getSelectValue(){

    }
    render(){
        return (
            <div id="ps_box">
                <div className="ps_tab_box">
                    <div data-type="gk" className="active">港口</div>
                    <div data-type="bw">泊位</div>
                    <div data-type="cb">船舶</div>
                    <div data-type="cbtj">船舶推荐</div>
                </div>
                <div className="ps_con_box">
                    <div className="ps_con_select">
                        <Select value={'--国家--'} data={[{name:'1',id:'1'},{name:'2',id:'2'},{name:'3',id:'3'}]} getSelectValue={this.getSelectValue} name="select1"/>
                        <Select value={'--国家--'} data={[{name:'1',id:'1'},{name:'2',id:'2'},{name:'3',id:'3'}]} getSelectValue={this.getSelectValue} name="select1"/>
                        <Select value={'--国家--'} data={[{name:'1',id:'1'},{name:'2',id:'2'},{name:'3',id:'3'}]} getSelectValue={this.getSelectValue} name="select1"/>
                        <Select value={'--国家--'} data={[{name:'1',id:'1'},{name:'2',id:'2'},{name:'3',id:'3'}]} getSelectValue={this.getSelectValue} name="select1"/>
                    </div>
                    <div className="common_btn">查询</div>
                </div>
            </div>
        )
    }
}
export default PowerSearch;