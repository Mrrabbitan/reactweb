import React,{Component} from 'react';
import InputSearch from '../../../../PublicComponent/InputSearch/InputSearch';
import "./index.css"
import DateTime from 'react-datetime'

class LinePlayBack extends Component{
    render(){
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
                <div id="startbutton">开始回放 <div id="startpic"></div></div>
                <div id="stopbutton">停止回放 <div id="stoppic"></div></div>
                <div id="spotinfomation">节点信息</div>
                <div id="spotbox"></div>
            </div>
        )
    }
}
export default LinePlayBack;