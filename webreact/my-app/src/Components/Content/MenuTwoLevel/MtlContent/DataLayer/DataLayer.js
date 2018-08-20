import React,{Component} from 'react';
import Select from '../../../../PublicComponent/Select/Select';
import InputSearch from '../../../../PublicComponent/InputSearch/InputSearch';
import './index.css'
import DateTime from 'react-datetime';
import 'moment/locale/zh-cn';
import 'react-datetime/css/react-datetime.css'

class DataLayer extends Component{
    constructor(){
        super();
        this.getSelectValue = this.getSelectValue.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.change = this.change.bind(this);
        this.state = {
            showOrHide:"none"
        }
    }
    getSelectValue(aaa){
        console.log(aaa)
    }
    getInputValue(bbb){
        console.log(bbb)
    }
    change(date){
        console.log(date)
    }
    componentDidUpdate(){
        console.log(this.props)
    }
    render(){
        return (
            <div id="dl_box" style={{display:this.props.isShow=="datalayer"?"block":"none"}}>
                {/*<Select value={'--国家--'} data={[{name:'1',id:'1'},{name:'2',id:'2'},{name:'3',id:'3'}]} getSelectValue={this.getSelectValue} name="select1"/>
                <Select value={'--国家--'} data={[{name:'11',id:'11'},{name:'22',id:'22'},{name:'33',id:'33'}]} getSelectValue={this.getSelectValue} name="select2"/>
                <InputSearch placeHolder="输入MMSI" getInputValue={this.getInputValue} name="input1"/>
                <DateTime defaultValue={new Date()} locale="zh-cn" onChange={this.change}/>*/}
                <div className="dl_choice_ship">
                    <div className="choice_title">
                        <span>船舶</span>
                        <div className="showAllAndClear">
                            <span id="showAllAndClear_all">全选</span>
                            <span id="showAllAndClear_clear">清空</span>
                        </div>
                    </div>
                    <div className="dl_choice_btn_box">
                        <span className="choice_btn choice_btn_active">液化气</span>
                        <span className="choice_btn choice_btn_active">散货</span>
                        <span className="choice_btn choice_btn_active">化学品</span>
                        <span className="choice_btn choice_btn_active">油轮</span>
                        <span className="choice_btn choice_btn_active">集装箱</span>
                        <span className="choice_btn choice_btn_active">普通货</span>
                        <span className="choice_btn">冷藏</span>
                        <span className="choice_btn choice_btn_active">滚装货</span>
                        <span className="choice_btn">其他</span>
                    </div>
                </div>
                <div className="dl_choice_port">
                    <div className="choice_title">港口</div>
                    <div className="dl_choice_btn_box">
                        <span className="choice_btn choice_btn_active">港口</span>
                    </div>
                </div>
                <div className="dl_choice_ploy">
                    <div className="choice_title">泊位</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_maodi">
                    <div className="choice_title">锚地</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_ploy">
                    <div className="choice_title">海峡</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_ploy">
                    <div className="choice_title">航线</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_haidao">
                    <div className="choice_title">海盗区域</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_haiqu">
                    <div className="choice_title">全球海区</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
            </div>
        )
    }
}
export default DataLayer;