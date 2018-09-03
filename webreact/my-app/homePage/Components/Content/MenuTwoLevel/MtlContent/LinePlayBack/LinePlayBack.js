import React,{Component} from 'react';
import InputSearch from '../../../../PublicComponent/InputSearch/InputSearch';
import "./index.css"
import DateTime from 'react-datetime'
import ReactRanger from 'react-ranger';


class LinePlayBack extends Component{
    constructor(){
        super();
        this.state = {
            value:0,
            startRanger:0,
            endRanger:20,
        }
        this.rangerChange = this.rangerChange.bind(this)
    }
    rangerChange(value){
        this.setState({value});
    }
    render(){
        const { value,startRanger,endRanger } = this.state;
        return (
            <div id="tailreviewan">
                <div id="aimadded">目标添加</div>
                <InputSearch placeHolder="输入MMSI" getInputValue={this.getInputValue} name="input1"/>
                <div id="overviewlist">回放列表</div>
                <div id="overviewbox"></div>
                <div id="starttime">开始时间</div>
                {/* 时间列表 */}
                <div><DateTime defaultValue={new Date()} locale="zh-cn" onChange={this.change}/> <div className="datalistpic"></div></div>
                <div id="starttime">结束时间</div>
                {/* 时间列表 */}
                
                <div><DateTime defaultValue={new Date()} locale="zh-cn" onChange={this.change}/> <div className="datalistpic"></div></div>
                <div id="trackbackspeed">回放速度<span className="secondspot">秒/节点</span></div>
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
                <div className="common_btn">开始回放</div>
                <div className="common_btn">停止回放</div>
                <div id="spotinfomation">节点信息</div>
                <div id="spotbox">
                    <p><span>MMSI</span>:<span>1234568</span></p>
                    <p><span>节点总数</span>:<span>222</span></p>
                    <p><span>节点总数</span>:<span>14568</span></p>
                    <p><span>经度</span>:<span>1234568</span></p>
                    <p><span>纬度</span>:<span>1234568</span></p>
                    <p><span>速度</span>:<span>10节</span></p>
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
export default LinePlayBack;