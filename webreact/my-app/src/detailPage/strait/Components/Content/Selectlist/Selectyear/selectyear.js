import React from 'react';
import './index.css'
import Select from '../../PublicComponent/Select/Select';
import Server from '../../../../../../axios/portAndBerthServer';
import straitserver from '../../../../../../axios/straitserver';
import $ from 'jquery'
import * as action from '../../../../store/action'
import {connect} from 'react-redux';

class selectyear extends React.Component {
    constructor(){
        super()
        this.state={
            countryarr:[],
            inputValue:{},
           /*  typecn:'all', */
        }
        this.inputValue = {
            select1:'2017',
            select2:'-1',
            select3:'-1',
            select4:'-1'
        }
    }

    componentDidMount(){
        this.getAllCountryServer();
    }

    getAllCountryServer(){
        Server.getAllCountry({},(data)=>{
            if(data){
                this.choosecountrysidandname(data)
            }
        })
    }

    choosecountrysidandname(data){
        let TempArr1=[]
        $.each(data.data, function (index, itemobj) {
            TempArr1[index] = {"name":itemobj.countryCnName,"id":itemobj.countryCode};
        });//遍历后按顺序插入到数据中
        this.setState({
            countryarr:TempArr1
        })
    }


    getSelectValue =(typecn)=>{//插入折线图的数据
        let arr=[];
        let arr1=[];
        straitserver.selectQuxiantuline({yearMonth:this.inputValue.select1,typecn},(data)=>{
            if(data){
                let dataannew=data.data
                for(var i in dataannew){
                    arr.push(i);
                    arr1.push(dataannew[i]['voyage']);
                }
                this.props.dispatch(action.Gethistoryflow({
                    mouth:arr,//传入数据，准备将其传入redux
                    dataan:arr1,//传入数据，准备将其传入redux
                }))
            }
        })
    }

    getSelectRate =(typecn)=>{
        let arr=[];
        let arr1=[];
        straitserver.shipstypepercentpie({yearMouth:this.inputValue.select1,typecn},(data)=>{
            if(data){
                let datanew=data.data;
                for(var i in datanew){
                    arr.push(datanew[i]['car']);
                    arr1.push(datanew[i]['voyage']);
                }
            }
             this.props.dispatch(action.Getshiptype({
                 type:arr,
                 voyage:arr1,
             }))
        })
    }


    getSelectValue1 = (data) =>{//获取数据的id
        let newdata=data.select1.name?data.select1.name:null;
        this.inputValue.select1=newdata;
    }
    getSelectValue2 = (data) =>{
         let newdata=data.select2.id?data.select2.id:null;
         this.inputValue.select2=newdata;
         this.typecnFun();//执行数据匹配
    }
    getSelectValue3 = (data) =>{
        let newdata=data.select3.id?data.select3.id:null;
        this.inputValue.select3=newdata;
        this.typecnFun();//执行数据匹配
    }
    getSelectValue4 = (data) =>{
        let newdata=data.select4.id?data.select4.id:null;
        this.inputValue.select4=newdata;
    }
    typecnFun(){//使id与数据的参数匹配
        let selecttype1=this.inputValue.select1;
        let selecttype2=this.inputValue.select2;
        let selecttype3=this.inputValue.select3;
        let selecttype4=this.inputValue.select4;
        let relationship=0;
        let typecn=0;
        let haiXiaName='bering strait'
        /**
	 * 判断节点关系
	 * 13：海峡-起运国家 14：海峡-目的国家 15：起运国家-海峡-目的国家 
	 */
	if(selecttype2 == '-1' && selecttype3 == '-1'){
		relationship = "%"+haiXiaName+"%";
		typecn = "all";
	}else if(selecttype2 != '-1' && selecttype3 =='-1'){
		//13：海峡-起运国家 
		typecn ='13';
		relationship = haiXiaName +"--"+ selecttype2;
	}else if(selecttype2 == '-1' && selecttype3 !='-1'){
		//14：海峡-目的国家
		typecn ='14';
		relationship = haiXiaName +"--"+ selecttype3;
	}else if(selecttype2 != '-1' && selecttype3 !='-1'){
		//15：起运国家-海峡-目的国家 
		typecn ='15';
		relationship = selecttype2 +'--'+ haiXiaName +"--"+ selecttype3;
	}else{
		typecn = "all";
		relationship = "%"+haiXiaName+"%";
    }
    // this.setState({
    //     typecn:typecn,
    // })
    this.getSelectValue(typecn);
    this.getSelectRate(typecn);
    }
    

render(){
    let countryarr = this.state.countryarr ? this.state.countryarr : [];
return(
    <div className="four_select_mode">
        <Select value={'--年份--'} data={[{name:'2016',id:'1'},{name:'2017',id:'2'},{name:'2018',id:'3'}]} getSelectValue={this.getSelectValue1} name="select1"/>
        <Select value={'--起运国家--'} data={countryarr} getSelectValue={this.getSelectValue2} name="select2"/>            
        <Select value={'--目的国家--'} data={countryarr} getSelectValue={this.getSelectValue3} name="select3"/>
        <Select value={'--货运类型--'} data={[{name:'2016',id:'1'},{name:'2017',id:'2'},{name:'2018',id:'3'}]} getSelectValue={this.getSelectValue4} name="select4"/>
    </div>
)}
}

export default connect(
    (state)=>{
        return{
            historyflowdata:state.data
        }
    }
)(selectyear);