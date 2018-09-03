import React,{Component} from 'react';
import $ from 'jquery';
import berthDetail from '../../axios/berthDetail'
import globalDefine from '../../Config/globaldefine';
import tool from '../../Assets/js/shipAndBerth';



class BerthUsingTable extends Component{
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
        //if(!this.props.data)return(<div></div>);
        //console.log(this.props.data);
        let tbody=[];
        $.each(this.props.data,function(i,item){
            //console.log(item);
            tbody.push(<tr><td>{tool.formatDate(item.time_in)}</td><td>{item.shipname}({item.mmsi})</td></tr>)
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>已用时长</th><th>停靠船舶</th>
                    </tr>
                </thead>
                <tbody>             
                       {tbody}    
                </tbody>
            </table>
        )
    }
}
export default BerthUsingTable;