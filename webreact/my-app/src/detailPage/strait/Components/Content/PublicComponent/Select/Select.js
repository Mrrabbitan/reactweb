import React,{Component} from 'react';
import $ from 'jquery';
import './index.css';

export default class Select extends Component{
    constructor(){
        super();
        //this.change = this.change.bind(this);
    }
    change =()=>{
        let name = $(this.refs.thisSelect).find("option[value="+this.refs.thisSelect.value+"]").html();
        this.props.getSelectValue({[this.props.name]:{id:this.refs.thisSelect.value,name}});
    }
    render(){
        return (
            <div className="select_box">
                <select onChange={this.change} ref="thisSelect">
                    <option value="-1">{this.props.value}</option>
                    {this.props.data.map((item,index)=>(
                        <option value={item.id} key={index}>{item.name}</option>
                    ))}
                </select>
                <span className="select_down_icon"></span>
            </div>
        )
    }
}