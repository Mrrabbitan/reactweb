import React from "react";
import Map from '../../../Components/Content/Map/map';
import BasicInfo from '../../../Components/Content/BasicInfo/basicinfo';
import server from '../../../../../axios/straitserver'
import './index.css'
import globaldefine from "../../../../../Config/globaldefine";




class basic extends React.Component{
    
        state={
            data1:null,
            data2:null,
            straitName:globaldefine.getUrlParmsStrait()
        }
    
    componentDidMount(){
        this.allstraitDetailServer();
        this.stratigyindexServer();
    }
    allstraitDetailServer(){
        server.allstraitDetail({straitName:this.state.straitName},(data)=>{
            if(data){
                this.setState({data1:data.data});
        }else{
            console.log('fucked up')
        }
        })

    }

    stratigyindexServer(){
        server.stratigyindex({straitName:this.state.straitName},(data)=>{
            if(data){
                this.setState({data2:data.data});
            }
        })
    }

// 此处需要判断是否需要添加数据处理的函数
   render(){
    return(
        <div id="basic">
            {/* 增加海图内容 */}
            <Map/>
            {/* 增加海峡描述信息 */}
            <BasicInfo data={this.state}/>
        </div>
    )
   }
}

export default basic;