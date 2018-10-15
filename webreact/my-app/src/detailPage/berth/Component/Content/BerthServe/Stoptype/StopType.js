import React,{Component} from 'react';
import '../index.css';
import TypeBtn from './TypeBtn';
import BtnTitle from '../../PublicComponent/BtnTitle/index';
import server from '../../../../../../axios/berthDetail';

class StopType extends Component{
    constructor(){
        super();
        this.state = {
            data:[],
            oilship:[],
            gasship:[],
            chemical:[],
            normalgoods:[],
            jizhuangbox:[],
            coldship:[],
            rollship:[],
            other:[],
            goods:[],
        }
    }
    componentDidMount(){
        this.getallkindsofshipinberthServer();
    }

    getallkindsofshipinberthServer(){
        server.getallkindsofshipinberth({berthId:'34643'},(data)=>{
            if(data){
                this.optimazationdata(data)
            }
        })
    }

    optimazationdata(data){
        let dataarr=data.data;
        for(var i in dataarr){
            let newdada=dataarr[i].shiptypecode;
            if(newdada.indexOf('01030')!==-1){
                var oilship = newdada;
            }else if(newdada.indexOf('01010')!==-1){
                var gasship= newdada;
            }else if(newdada.indexOf('01020')!==-1){
                var chemical = newdada;
            }else if(newdada.indexOf('03010')!==-1){
                var normalgoods = newdada;
            }else if(newdada.indexOf('03030')!==-1){
                var jizhuangbox = newdada;
            }else if(newdada.indexOf('03040')!==-1){
                var coldship = newdada;
            }else if(newdada.indexOf('03050')!==-1){
                var rollship = newdada;
            }else if(newdada.indexOf('020')!==-1){
                var goods = newdada;
            }else{
                var other =newdada;
            }
        }
        this.setState({
            oilship:oilship,
            gasship:gasship,
            chemical:chemical,
            normalgoods:normalgoods,
            jizhuangbox:jizhuangbox,
            coldship:coldship,
            rollship:rollship,
            other:other,
            goods:goods,
        })
    }

    render(){
      
        return (
            <div className="stopType_box">
                <BtnTitle className="stopType_btn">停靠类型</BtnTitle>
                <div className="stopType_btn_box">
                    <TypeBtn active={this.state.gasship?true:false}>液化气</TypeBtn>
                    <TypeBtn active={this.state.goods?true:false}>散货</TypeBtn>
                    <TypeBtn active={this.state.chemical?true:false}>化学品</TypeBtn>
                    <TypeBtn active={this.state.oilship?true:false}>油轮</TypeBtn>
                    <TypeBtn active={this.state.jizhuangbox?true:false}>集装箱</TypeBtn>
                    <TypeBtn active={this.state.normalgoods?true:false}>普通货</TypeBtn>
                    <TypeBtn active={this.state.coldship?true:false}>冷藏</TypeBtn>
                    <TypeBtn active={this.state.rollship?true:false}>滚装货</TypeBtn>
                    <TypeBtn active={this.state.other?true:false}>其他</TypeBtn>
                </div>
            </div>
        )
    }
}

export default StopType;