import React,{Component} from 'react';
import './index.css'
import $ from 'jquery';
import Select from '../../../../PublicComponent/Select/Select';
import InputSearch from '../../../../PublicComponent/InputSearch/InputSearch';
import portAndBerthServer from '../../../../../../axios/portAndBerthServer';
import {connect} from "react-redux";

class PowerSearch extends Component{
    constructor(){
        super();
        this.getSelectCoValue = this.getSelectCoValue.bind(this);
        this.getSelectPoValue = this.getSelectPoValue.bind(this);
        this.Click = this.Click.bind(this);
        this.state = {
            TempArr1:[],
            TempArr2:[],
            portid:"",
        };
    }

    componentWillMount(){

        var TempArr1 = [];
        var self = this;
        portAndBerthServer.getAllCountry({}, function (data) {
            $.each(data.data, function (index, itemobj) {
                TempArr1[index] = {"name":itemobj.countryCnName,"id":itemobj.countryCode};
            });
            self.setState({TempArr1});
        });
    }
    componentDidMount(){
        $(".ps_tab_box div").on("click",this.tabChange);
    }
    tabChange(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".ps_con_box").eq(index).addClass("active").siblings().removeClass("active");
    }
    getSelectCoValue(data){
        var countrycodelrf = data.makeupCo.id;
        var TempArr2 = [];
        var self = this;
        portAndBerthServer.getPortByCountry({countrycodelrf}, function (data) {
            $.each(data.data, function (index, itemobj) {
                TempArr2[index] = {"name":itemobj.portname,"id":itemobj.portid};
            });
            self.setState({TempArr2});
        });
    }
    getSelectPoValue(data){
        this.state.portid = data.makeupPo.id;
        console.log(this);
    }
    getSelectTypeValue(data){
        console.log(data.shipType.name);
    }
    getSelectDraughtValue(data){
        console.log(data.shipDraught.name);
    }

    Click(){
        if($(".ps_tab_box>.active").attr("data-type") == "gk"){
            if(this.state.portid == "-1" || this.state.portid == ""){
                alert('请选择港口');
            } else {
                var portId = this.state.portid;
                var self = this;
                var selectPortFeature=self.props.mapListener.getPortFeatrue(portId);
                self.props.mapListener.serMapCenterPort(selectPortFeature.getGeometry().getCoordinates(),"8");
            }
        } else if($(".ps_tab_box>.active").attr("data-type") == "bw") {
            alert('泊位');
        } else if($(".ps_tab_box>.active").attr("data-type") == "cb") {
            alert('船舶');
        } else {
            alert('船舶推荐');
        }
        
    }
$
    render(){
        return (
            <div id="ps_box">
                <div className="ps_tab_box">
                    <div data-type="gk" className="active">港口</div>
                    <div data-type="bw">泊位</div>
                    <div data-type="cb">船舶</div>
                    <div data-type="cbtj">船舶推荐</div>
                </div>
                <div className="ps_con_box active">
                    <div className="ps_con_select">
                        <Select value={'国家'} data={this.state.TempArr1} getSelectValue={this.getSelectCoValue} name="makeupCo"/>&nbsp;&nbsp;
                        <Select value={'港口'} data={this.state.TempArr2} getSelectValue={this.getSelectPoValue} name="makeupPo"/>
                    </div>
                    <div className="common_btn" onClick={this.Click}>查询</div>
                </div>
                <div className="ps_con_box">
                    <div className="ps_con_select">
                        <Select value={'国家'} data={this.state.TempArr1} getSelectValue={this.getSelectCoValue} name="makeupCo"/>
                        <Select value={'港口'} data={this.state.TempArr2} getSelectValue={this.getSelectPoValue} name="makeupPo"/>
                        <Select value={'类型'} data={[{name: "液化气船", id: 1},{name: "化学品船", id: 2},{name: "油轮", id: 3},{name: "散货船", id: 4},
                            {name: "普通货船", id: 5},{name: "集装箱船", id: 6},{name: "冷藏船", id: 7},{name: "滚装货船", id: 8}]} 
                            getSelectValue={this.getSelectTypeValue} name="shipType"/>
                        <Select value={'最大吃水'} data={[{name: "0-10", id: 1},{name: "10-20", id: 2},{name: "20-30", id: 3},{name: "30以上", id: 4}]} 
                            getSelectValue={this.getSelectDraughtValue} name="shipDraught"/>
                    </div>
                    <div className="common_btn" onClick={this.Click}>查询</div>
                </div>
                <div className="ps_con_box">
                    <div className="ps_con_select">
                        <InputSearch placeHolder="MMSI" getInputValue={this.getInputValue} name="input1"/>&nbsp;&nbsp;
                        <InputSearch placeHolder="船名" getInputValue={this.getInputValue} name="input1"/>
                    </div>
                    <div className="common_btn" onClick={this.Click}>查询</div>
                </div>
                <div className="ps_con_box">
                    <div className="ps_con_select">
                        <Select value={'出发国家'} data={this.state.TempArr1} getSelectValue={this.getSelectCoValue} name="makeupCo"/>&nbsp;&nbsp;
                        <Select value={'出发港口'} data={this.state.TempArr2} getSelectValue={this.getSelectPoValue} name="makeupPo"/>
                        <Select value={'目的国家'} data={this.state.TempArr1} getSelectValue={this.getSelectCoValue} name="makeupCo"/>&nbsp;&nbsp;
                        <Select value={'目的港口'} data={this.state.TempArr2} getSelectValue={this.getSelectPoValue} name="makeupPo"/>
                    </div>
                    <div className="common_btn" onClick={this.Click}>查询</div>
                </div>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            mapListener: state.html.map.mapListener
        };
    }
)(PowerSearch);
//export default PowerSearch;