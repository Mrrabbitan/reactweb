import React from 'react';
import CompanyDescription from '../../Components/Content/Detail/CompanyDetail/companydetail'
import CompanyTelephone from '../../Components/Content/Detail/CompanyTelephone/companytelephone';
import Shipteam from '../../Components/Content/Detail/Shipteam/shipteam';
import Runvoyage from '../../Components/Content/Detail/Runvoyage/runvoyage';
import Relationshipandcompany
    from '../../Components/Content/Detail/Relationshipandcompany/relationshipandcomp';
import server from '../../../../axios/CompanyServer'
class basic extends React.Component{
    constructor(){
        super();
        this.state={
            data:null,
        }
    }
    componentDidMount(){
        let self = this;
        server.getCompanybycompname({code:'0000249'},(data)=>{
            if(data.data){
                self.setState({data:data.data})
            }
        })
        
    }
    render(){
        return(
            <div>
                {/* 公司概况 */}
                <CompanyDescription data={this.state.data}/>
                {/* 联系方式 */}
                <CompanyTelephone data={this.state.data}/>
                {/* 船队 */}
                <Shipteam/>
                {/* 经营航线 */}
                <Runvoyage/>
                {/* 关联船舶及公司 */}
                <Relationshipandcompany/>
            </div>
        )
    }
}
export default basic