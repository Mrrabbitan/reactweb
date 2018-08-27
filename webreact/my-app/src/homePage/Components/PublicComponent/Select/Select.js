import React,{Component} from 'react';
import './index.css';

export default class Select extends Component{
    constructor(){
        super();
        this.change = this.change.bind(this);
    }
    change(){
        this.props.getValue({[this.props.name]:this.refs.thisSelect.value});
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