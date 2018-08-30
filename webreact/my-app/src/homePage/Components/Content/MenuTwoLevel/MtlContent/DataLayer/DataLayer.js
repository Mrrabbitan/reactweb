import React,{Component} from 'react';
import Select from '../../../../PublicComponent/Select/Select';
import InputSearch from '../../../../PublicComponent/InputSearch/InputSearch';
import './index.css'
import DateTime from 'react-datetime';
import 'moment/locale/zh-cn';
import 'react-datetime/css/react-datetime.css'
import $ from 'jquery';
import {connect} from 'react-redux';
import * as Action from '../../../../../Actions/DataLayer';
import shipServer from '../../../../../../axios/shipServer';

class DataLayer extends Component{
    constructor(){
        super();
        this.getSelectValue = this.getSelectValue.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.change = this.change.bind(this);
        this.choiceAllType = this.choiceAllType.bind(this);
        this.clearChoiceAllType = this.clearChoiceAllType.bind(this);
        this.state = {
            showOrHide:"none",
            allData:{
                ship:[],
                port:[]
            }
        }
    }
    componentDidMount(){
        //所有按钮点击效果
        $("#dl_box .choice_btn").on("click",this.btnStyleFun);
        //船事件监听
        $(".dl_choice_ship .choice_btn").on("click",this.shipSelectEventFun.bind(this));
        //港口事件监听
        $(".dl_choice_port .choice_btn").on("click",this.portSelectEventFun.bind(this));
        //数据图层显隐操作
        $(".choice_title").on("click",this.layerShowOrHideEventFun.bind(this));
    }

    //所有按钮点击效果
    btnStyleFun(){
        //样式修改
        if($(this).hasClass("choice_btn_active")){
            $(this).removeClass("choice_btn_active");
        }else{
            $(this).addClass("choice_btn_active");
        }
    }
    //船事件监听
    shipSelectEventFun(){
        //获取当前选中数据
        let $choiceBtn = $(".dl_choice_ship").find(".choice_btn");
        let choiceArr = [];
        $choiceBtn.map((index,item)=>{
            if($(item).hasClass("choice_btn_active")){
                choiceArr.push($(item).attr("data-type"));
            }
        });
        //存入state
        this.setState({
            allData:{
                ...this.state.allData,
                ship:choiceArr
            }
        },()=>{
            this.getDataDrawLayer();
        })
    }

    //港口事件监听
    portSelectEventFun(){
        //获取当前选中数据
        let $choiceBtn = $(".dl_choice_port").find(".choice_btn");
        let choiceArr = [];
        $choiceBtn.map((index,item)=>{
            if($(item).hasClass("choice_btn_active")){
                choiceArr.push($(item).attr("data-type"));
            }
        })
        //存入state
        this.setState({
            allData:{
                ...this.state.allData,
                port:choiceArr
            }
        },()=>{
            this.getDataDrawLayer();
        })
    }
    //数据图层显隐操作
    layerShowOrHideEventFun(e){
        let $this = $(e.currentTarget);
        if($this.hasClass("active")){
            $this.removeClass("active");
            this.props.mapListener.layerShowOrHideEventFun({type:$this.html(),status:false});
        }else{
            $this.addClass("active");
            this.props.mapListener.layerShowOrHideEventFun({type:$this.html(),status:true});
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
    //全选操作
    choiceAllType(e){
        let $eleBox = $(e.currentTarget).parents(".choice_title").next();
        //全选效果
        $eleBox.find(".choice_btn").addClass("choice_btn_active");
        console.log($eleBox)
        //全选得到数据请求数据
        //获取当前选中数据
        let $choiceBtn = $eleBox.find(".choice_btn");
        let choiceArr = [];
        $choiceBtn.map((index,item)=>{
            if($(item).hasClass("choice_btn_active")){
                choiceArr.push($(item).attr("data-type"));
            }
        })
        //存入state
        this.setState({
            allData:{
                ...this.state.allData,
                ship:choiceArr
            }
        },()=>{
            this.getDataDrawLayer();
        })
    }
    //清空数据
    clearChoiceAllType(e){
        let $eleBox = $(e.currentTarget).parents(".choice_title").next();
        //取消全选效果
        $eleBox.find(".choice_btn").removeClass("choice_btn_active");
        //存入state
        this.setState({
            allData:{
                ...this.state.allData,
                ship:[]
            }
        },()=>{
            //清除对应图层即可
            this.clearCanvasLayerFun()
        })
    }
    //获得数据画图层
    getDataDrawLayer(){
        shipServer.findByType(this.state.allData,(data)=>{
            //画图
            this.props.mapListener.getDataLayer(data);
            var self = this;
            //画船
           /* setTimeout(function(){self.props.mapListener.addShip(data)},2000)*/
        })
    }
    clearCanvasLayerFun(){
        this.props.mapListener.clearCanvasLayer();
    }
    render(){
        return (
            <div id="dl_box">
                {/*<Select value={'--国家--'} data={[{name:'1',id:'1'},{name:'2',id:'2'},{name:'3',id:'3'}]} getSelectValue={this.getSelectValue} name="select1"/>
                <Select value={'--国家--'} data={[{name:'11',id:'11'},{name:'22',id:'22'},{name:'33',id:'33'}]} getSelectValue={this.getSelectValue} name="select2"/>
                <InputSearch placeHolder="输入MMSI" getInputValue={this.getInputValue} name="input1"/>
                <DateTime defaultValue={new Date()} locale="zh-cn" onChange={this.change}/>*/}
                <div className="dl_choice_ship">
                    <div className="choice_title">
                        <span>船舶</span>
                        <div className="showAllAndClear">
                            <span id="showAllAndClear_all" onClick={this.choiceAllType}>全选</span>
                            <span id="showAllAndClear_clear" onClick={this.clearChoiceAllType}>清空</span>
                        </div>
                    </div>
                    <div className="dl_choice_btn_box">
                        <span className="choice_btn" data-type="0101">液化气</span>
                        <span className="choice_btn" data-type="02">散货</span>
                        <span className="choice_btn" data-type="0102">化学品</span>
                        <span className="choice_btn" data-type="0103">油轮</span>
                        <span className="choice_btn" data-type="0303">集装箱</span>
                        <span className="choice_btn" data-type="0301">普通货</span>
                        <span className="choice_btn" data-type="0304">冷藏</span>
                        <span className="choice_btn" data-type="0305">滚装货</span>
                        <span className="choice_btn" data-type="0308">其他</span>
                    </div>
                </div>
                <div className="dl_choice_port">
                    <div className="choice_title active">港口</div>
                    <div className="dl_choice_btn_box">
                        {/*<span className="choice_btn" data-type="">港口</span>*/}
                    </div>
                </div>
                <div className="dl_choice_ploy">
                    <div className="choice_title active">泊位</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_maodi active">
                    <div className="choice_title">锚地</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_ploy">
                    <div className="choice_title active">海峡</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_ploy">
                    <div className="choice_title active">航线</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_haidao">
                    <div className="choice_title active">海盗区域</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_haiqu">
                    <div className="choice_title active">全球海区</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_haiqu">
                    <div className="choice_title">全球排放区</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
                <div className="dl_choice_haiqu">
                    <div className="choice_title">中国排放区</div>
                    <div className="dl_choice_btn_box">
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    (state)=>{
        return {
            dataLayer:state.html.dataLayer,
            mapListener:state.html.map.mapListener
        }
    }
)(DataLayer);