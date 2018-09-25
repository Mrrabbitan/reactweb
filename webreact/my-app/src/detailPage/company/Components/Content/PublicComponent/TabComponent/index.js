import React, {Component} from 'react';
import $ from 'jquery'
import './index.css'

class TabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabName:props.tabName,
            active:props.active,
        }
        this.tabClick = this.tabClick.bind(this);
    }
    tabClick(e){
        $("#"+this.props.name+"tab>div").removeClass("active");
        $(e.currentTarget).addClass("active");
        this.props.thisClick($("#"+this.props.name+"tab>div").index($(e.currentTarget))+1)
    }
    render() {
        return (
            <div className="tc_box" id={this.props.name+"tab"}>
                {this.state.tabName.map((item,index)=>{
                    if(this.state.active-1==index){
                        return (
                            <div 
                            key={index} 
                            className="active" 
                            style={{
                                width:(100/this.state.tabName.length)+"%"
                            }} 
                            onClick={this.tabClick}>
                                {item}
                            </div>
                        )
                    }
                    return (
                    <div key={index} style={{
                        width:(100/this.state.tabName.length)+"%"
                    }} onClick={this.tabClick}>{item}</div>
                )})}
            </div>
        )
    }
}
export default TabComponent;