import React,{Component} from 'react';
import InputSearch from '../../../../PublicComponent/InputSearch/InputSearch';
import "./index.css"
import DateTime from 'react-datetime'
import ReactRanger from 'react-ranger';
import shipServer from '../../../../../../axios/shipServer';
import $ from 'jquery';
import MapEvent from '../../../../../../Basic/Tool/event/MapEvent';
import toolMap from "../../../../../../Basic/Map/Other/ToolMap";
import htmlTemplate from '../../../../../../Basic/Map/Popup/HtmlTemplate';
import {connect} from "react-redux";


class LinePlayBack extends Component{
    constructor(){
        super();
        this.state = {
            value:[1],
            startRanger:1,
            endRanger:20,
            shipId:"",
            point:0,
        }
        this.rangerChange = this.rangerChange.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.timerID;
    }
    componentDidMount(){
        $("#empty").on("click",this.empty);
        $("#overviewbox").on("click","#addDiv",this.mmsiChange);
        $("#start").on("click",this.start.bind(this));
        $("#stop").on("click",this.stopTimer.bind(this));
        $("#clear").on("click",this.clear.bind(this));       
    }
    start(){
        var self = this;
        let shipId = self.state.shipId;
        //let shipId = 10507287;
        let start = MapEvent.timeTrans($("#starttime>div .form-control").val());
        let end = MapEvent.timeTrans($("#endtime>div .form-control").val());
        shipServer.findTrajectory({shipId,start,end},function (data){
            if(data.data.length > 0){
                let i = self.state.point;
                console.log("i",i);
                self.startTimer(self.state.value[0],data.data,i);
            } else {
                alert("未找到船舶行进轨迹");
            }
        })
    }
    startTimer(value,data,i){
        this.timerID = setInterval(
            () => {
                if(i < data.length){
                    this.tick(data,i);
                    this.state.point = i;
                    i += 1;
                } else {
                    this.stopTimer();
                    this.state.point = 0;
                } 
            },
            parseInt(value)*1000
        )
    }
    stopTimer(){
        clearInterval(this.timerID);
    }
    clear(){
        this.stopTimer();
        this.state.point = 0;
        this.props.mapListener.clearShipTrajectory();
    }
    /**
     * 画轨迹
     */
    tick(data,i){
        var self = this;
        let longitude = data[i].X/1000000;
        let latitude = data[i].Y/1000000;
        var disInfo = htmlTemplate.createTrajectoryDisInfo(data[i]);
        var coord = toolMap.transform(longitude,latitude);
        let shipInfo = ` <p><span>MMSI</span>:<span id="shipInfo">`+data[i].M+`</span></p>
                        <p><span>采集时间</span>:<span id="shipInfo">`+MapEvent.transTime(data[i].U)+`</span></p>
                        <p><span>节点总数</span>:<span id="shipInfo">`+data[i].R+`</span></p>
                        <p><span>经度</span>:<span id="shipInfo">`+longitude+`</span></p>
                        <p><span>纬度</span>:<span id="shipInfo">`+latitude+`</span></p>
                        <p><span>速度</span>:<span id="shipInfo">`+data[i].S+`节</span></p>`

        $("#spotbox").html(shipInfo);
        if(i == 0){
            self.props.mapListener.serMapCenterPort(coord,"15");
            self.props.mapListener.getShipTrajectoryFeature(disInfo,coord,data,i);
        } else {
            self.props.mapListener.serMapCenterPort(coord,"null");
            self.props.mapListener.getShipTrajectoryFeature(disInfo,coord,data,i);
        }
    }

    empty(){
        $("#overviewbox").empty();
    }

    mmsiChange(){
        $(this).addClass("addMmsi").siblings().removeClass("addMmsi");
    }
    rangerChange(value){
        this.setState({value});
        this.stopTimer();
    }
    getInputValue(value){
        let mmsi = value.inputMmsi;
        let self = this;
        shipServer.findShipByMmsi({mmsi}, function (data) {
            if(data.data.LSDetail == null){
                alert("没有该目标");
            } else {
                self.state.shipId = data.data.LSDetail.I;
                let num = 0;
                $("#overviewbox div").each(function() {
                    if(mmsi == $(this).text()){
                        num++;
                    }
                })
                if(num == 0){
                    $("#overviewbox").append("<div id='addDiv'>"+mmsi+"</div>");
                }
            }
        });
    }
    render(){
        const { value,startRanger,endRanger } = this.state;
        return (
            <div id="tailreviewan">
                <div id="aimadded">目标添加</div>
                <InputSearch placeHolder="输入MMSI" getInputValue={this.getInputValue} name="inputMmsi"/>
                <div id="overviewlist">回放列表</div>
                <div id="overviewbox"></div>
                <div className="common_btn" id="empty">清空列表</div>
                <div>开始时间</div>
                {/* 时间列表 */}
                <div id="starttime"><DateTime defaultValue={new Date()} locale="zh-cn" onChange={this.change}/> <div className="datalistpic"></div></div>
                <div>结束时间</div>
                {/* 时间列表 */}
                <div id="endtime"><DateTime defaultValue={new Date()} locale="zh-cn" onChange={this.change}/> <div className="datalistpic"></div></div>
                <div id="trackbackspeed">回放速度<span className="secondspot">{this.state.value}秒/节点</span></div>
                {/* 拉动组件 */}
                {/*<div id="startbutton">开始回放 <div id="startpic"></div></div>*/}
                {/*<div id="stopbutton">停止回放 <div id="stoppic"></div></div>*/}
                <div className="ranger">
                    <span className="startRanger">{startRanger}</span>
                    <ReactRanger min={startRanger} max={endRanger} stepSize={1} value={value} onChange={this.rangerChange}>
                        {({ getTrackProps, handles }) => (
                            <div {...getTrackProps({ style:lineStyle})}>
                                {handles.map(({ value, active, getHandleProps }) => (
                                    <div {...getHandleProps({style: btnStyle})}>{value}</div>
                                ))}
                            </div>
                        )}
                    </ReactRanger>
                    <span className="endRanger">{endRanger}</span>
                </div>
                <div className="common_btn" id="start">开始回放</div>
                <div className="common_btn" id="stop">停止回放</div>
                <div className="common_btn" id="clear">清除轨迹</div>
                <div id="spotinfomation">节点信息</div>
                <div id="spotbox">
                    <p><span>MMSI</span>:</p>
                    <p><span>采集时间</span>:</p>
                    <p><span>节点总数</span>:</p>
                    <p><span>经度</span>:</p>
                    <p><span>纬度</span>:</p>
                    <p><span>速度</span>:</p>
                </div>
            </div>
        )
    }
}
const lineStyle = {
    height: "4px",
    background: "#3ff3e3",
    borderRadius: "2px"
};
const btnStyle = {
    width: "18px",
    height: "18px",
    color:"#333",
    fontSize:"12px",
    lineHeight:"18px",
    borderRadius: "4px",
    backgroundColor:"#56f893",
    textAlign:"center",
    border: "solid 1px #888"
};
export default connect(
    (state) => {
        return {
            mapListener: state.html.map.mapListener
        };
    }
)(LinePlayBack);
// export default LinePlayBack;