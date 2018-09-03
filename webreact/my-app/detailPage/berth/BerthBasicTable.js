import React,{Component} from 'react';
import $ from 'jquery';
import berthDetail from '../../axios/berthDetail'
import globalDefine from '../../Config/globaldefine';
import tool from '../../Assets/js/shipAndBerth';



class BerthBasicTable extends Component{
    constructor(){
        super();
    }
    //页面元素加载前
    componentDidUpdate(){
        
    }
    //页面元素加载完成之后
    componentDidMount(){
       // let berthId=globalDefine.getUrlParms('berthId');
    }

    render(){
        if(!this.props.data)return(<div></div>);
        //console.log(this.props.data)
        return (
            <table>
                        <tbody>
             
                            <tr>
                                <td>所属港口：</td><td>{this.props.data.data.portname?this.props.data.data.portname:''}</td><td>靠泊能力：</td><td>40万吨</td>
                            </tr>
                            <tr>
                                <td>所属国家：</td><td>{this.props.data.data.country?this.props.data.data.country:''}</td><td>年通过能力：</td><td>1亿吨</td>
                            </tr>
                            <tr>
                                <td>泊位长度：</td><td>400米</td><td>装卸能力：</td><td>{this.props.data.data.loadEfficiency?this.props.data.data.loadEfficiency:''}</td>
                            </tr>
                            <tr>
                                <td>泊位宽度：</td><td>100米</td><td>装卸时长：</td><td>20小时</td>
                            </tr>
                            <tr>
                                <td>泊位吃水：</td><td>20米</td><td>停靠类型：</td><td>{tool.getBerchTypeByBerthCode(this.props.data.data.finalType?this.props.data.data.finalType:'')}</td>
                            </tr>
                        </tbody>
            </table>
        )
    }
}
export default BerthBasicTable;