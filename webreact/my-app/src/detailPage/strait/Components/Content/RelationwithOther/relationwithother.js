import React from 'react';
import ModuleTitle from '../../../../port/Components/Content/PublicComponent/ModuleTitle';
import $ from 'jquery';
import './index.css';
import Relationcountry from '../Echarts/RelationCountryEchart/relationcountryechart';
import Relationport from '../Echarts/RelationportEchart/relationportechart';
import Relationgoods from '../Echarts/RelationgoodsEchart/relationgoods';
import server from '../../../../../axios/straitserver'
import globaldefine from '../../../../../Config/globaldefine';
import Countrytable from '../Table/Countrytable';
import Goodstable from '../Table/Goodstable';
import Porttable from '../Table/Porttable';



class relationwithother extends React.Component{
    constructor(){
        super();
        this.state={
            country:[],
            voyage:[],
            portcountry:[],
            portvoyage:[],
            aimtarget:1,
            type1:globaldefine.getUrlParmsStraitrelationcountry(),
            type2:globaldefine.getUrlParmsStraitrelationport(),
            relationship:globaldefine.getUrlParmsStrait()
        }
    }

    componentDidMount(){
        this.relationwithotherServer();
        this.relationwithportServer();
        this.relationwithlocalportserver();
    }
// 数据获取经济体内国家的内容
    relationwithotherServer(){
        server.relationwithother({type:this.state.type1,relationship:this.state.relationship},(data)=>{
            if(data){
                // this.setState({data:data.data});
                this.countryType(data.data);
            }
        })
    }

    // 数据获取经济体内voyage内容
    relationwithportServer(){
        server.relationwithother({type:this.state.type1,relationship:this.state.relationship},(data)=>{
            if(data){
                // this.setState({data:data.data});
                this.portType(data.data);
            }
        })
    }

    // 数据获取与港口的内容
    relationwithlocalportserver(){
        server.relationwithother({type:this.state.type2,relationship:this.state.relationship},(data)=>{
            if(data){
                this.localportType(data.data);
                this.localportvoyaType(data.data);
            }
        })
    }


// 数据优化，获取想要的数据格式
    countryType(data)
    {
        let arr=[];
        for(var i=0;i<data.length;i++){
            arr.push(data[i].country);
        }
       // 一定要将数据封装一下，使得最外层state中可以获取到state的变化
       this.setState({
        country:arr,
    })
    }

    portType(data)
    {
        let arr=[];
        for(var i=0;i<data.length;i++){
            arr.push(data[i].voyage);
        }
       // 一定要将数据封装一下，使得最外层state中可以获取到state的变化
       this.setState({
        voyage:arr,
    })
    }

    localportType(data)
    {
        let arr=[];
        for(var i=0;i<data.length;i++){
            arr.push(data[i].country);
        }
       // 一定要将数据封装一下，使得最外层state中可以获取到state的变化
       this.setState({
        portcountry:arr,
    })
    }

    localportvoyaType(data)
    {
        let arr=[];
        for(var i=0;i<data.length;i++){
            arr.push(data[i].voyage);
        }
        console.log(arr);
       // 一定要将数据封装一下，使得最外层state中可以获取到state的变化
       this.setState({
        portvoyage:arr,
    })
    }


    changetabstate=(e,aimtarget)=>{
        $('.tab_title_rela>span').removeClass('active');
        $(e.currentTarget).addClass('active');
        this.setState({aimtarget})

    }

render(){
        let relationwithother;
        let tableinfo;
if(this.state.aimtarget===1){
    relationwithother=(
        <div className="relation_country_Echart">
            <Relationcountry  data={this.state}/>
        </div>
    )
    tableinfo=(
        <div className="relation_country_table">
            <Countrytable/>
        </div>
    )
}else if(this.state.aimtarget===2){
    relationwithother=(
        <div className="relation_port_Echart">
            <Relationport data={this.state}/>
        </div>
    )
    tableinfo=(
        <div className="relation_country_table">
            <Porttable/>
        </div>
    )
}else if(this.state.aimtarget===3){
    relationwithother=(
        <div className="relation_goods_Echart">
            <Relationgoods/>
        </div>
    )
    tableinfo=(
        <div className="relation_country_table">
            <Goodstable/>
        </div>
    )

}
        return(
            <div id="relation_box">
                <ModuleTitle title='关联关系' type='2'/>
                <div className="relation_content">
                    <div className="tab_title_rela">
                        <span className='active' onClick={(e)=>this.changetabstate(e,1)}>关联经济体</span>
                        <span onClick={(e)=>this.changetabstate(e,2)}>关联港口</span>
                        <span onClick={(e)=>this.changetabstate(e,3)}>关联货物</span>
                    </div>
                 {relationwithother}
                 {tableinfo}
                </div>
            </div>
        )
    }
}

export default relationwithother;