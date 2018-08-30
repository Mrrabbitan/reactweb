import React,{Component} from 'react';
import './index.css'

class BerthNum extends Component{
    constructor(){
        super();
    }
    render(){
        let list = () =>{
            let numContainer = [];
            let number = (this.props.number+'').split('');
            let digit = this.props.digit;
            for(var n = 0;n<digit-number.length;n++){
                numContainer.push(<span className="bn_num" key={n+'s'} data-num="-1"></span>)
            }
            for(var i=0;i<number.length;i++){
                numContainer.push(<span className="bn_num" key={i} data-num={number[i]}></span>);
            }
            return (numContainer);
        };
        let otherList = () => {
            let otherArr = [];
            otherArr.push(<span className="bn_num" data-num={this.props.number1} key={Math.random()}></span>);
            otherArr.push(<span className="bn_units" key={Math.random()}>{this.props.units1}</span>);
            otherArr.push(<span className="bn_num" data-num={this.props.number2} key={Math.random()}></span>);
            otherArr.push(<span className="bn_num" data-num={this.props.number3} key={Math.random()}></span>);
            otherArr.push(<span className="bn_point" key={Math.random()}></span>);
            otherArr.push(<span className="btn_small_num" data-small-num={this.props.float} key={Math.random()}></span>);
            return (otherArr);
        }
        return(
            <div className="bn_box">
                {this.props.type==1?list():otherList()}
                <span className="bn_units" onClick={this.handle}>{this.props.units}</span>
            </div>
        )
    }
}


export default BerthNum;