import React,{Component} from 'react';
import $ from 'jquery';
import './index.css';

class InputSearch extends Component{
    constructor(){
        super();
        this.input = this.input.bind(this);

    }
    componentDidMount(){
        $(".input_search_icon").on("click",this.input);
    }
    input(){
        this.props.getInputValue({[this.props.name]:this.refs.input.value});
    }
    render(){
        return (
            <div className="input_box">
                <input type="text" placeholder={this.props.placeHolder} ref="input"/>
                <span className="input_search_icon"></span>
            </div>
        )
    }
}
export default InputSearch;

