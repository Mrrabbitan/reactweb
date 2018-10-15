import React from 'react'
import './index.css'
import Tempship from '../../../Components/Content/Tempship/tempship';
import Historyshipflow from '../../../Components/Content/Historyship/historyship';
import Relationwithother from '../../../Components/Content/RelationwithOther/relationwithother';
import server from '../../../../../axios/straitserver';


class detail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pageSize:4,
            data:[],
        }
    }
    

    componentDidMount(){
        this.TemporaryshipServer(1);
    }
    TemporaryshipServer(currentpage){
        server.Temporaryship({straitId:26,pagesize:this.props.pageSize,currentpage},(data)=>{
            if(data){
                this.setState({
                    data:data.data,
                    
                })
            }
        })
    }

    handlePageChanged = (n)=>{
        this.TemporaryshipServer(Number(n));
    }

    render(){
        return(
            <div id="detail_box">
            {/* 实时船舶模块 */}
                <Tempship data={this.state} func={this.handlePageChanged}/>{/* //父子组件间传递方法的途径 */}
            {/* 历史船舶流量 */}
                <Historyshipflow/>
            {/* 关联关系 */}
                <Relationwithother/>
            </div>
        )
    }
    
}
export default detail;