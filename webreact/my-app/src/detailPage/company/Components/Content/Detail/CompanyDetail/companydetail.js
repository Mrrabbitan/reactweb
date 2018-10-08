import React from 'react'
import ModuleTitle from '../../PublicComponent/ModuleTitle'
import '../index.css'
import server from '../../../../../../axios/CompanyServer'

class companydetail extends React.Component{
    constructor(){
        super();
        this.state={
            data:null,
        }
    }
    
    
    render(){
       
        const {detail} = this.props.data?this.props.data:{};
        let details = detail?detail:{};
        console.log(details)
        return(
            <div id="company_detail_box">
                    <ModuleTitle title="公司概况" type="2"/>
                    <div className="bi_basicInfo_box">
                        <ul>
                            <li><span className="bi_basicInfo_box_item_k">公司简称&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{details.shortname}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">公司IMO编号&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{details.code}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">公司全称&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{details.fullname}</span></li>
                             <li><span className="bi_basicInfo_box_item_k">公司经营状态&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{details.companystatus}</span></li>
                             <li><span className="bi_basicInfo_box_item_k">公司注册地&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{details.controlcountry}</span></li>
                             <li><span className="bi_basicInfo_box_item_k">母公司&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{details.parentcompany}</span></li>
                             <li><span className="bi_basicInfo_box_item_k">公司经营地&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{details.controlcountry}</span></li>
                            {/* <li><span className="bi_basicInfo_box_item_k">国家：</span><span>{this.state.data?this.state.data.country_cn_name:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">经度：</span><span>{this.state.data?this.state.data.longitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">纬度：</span><span>{this.state.data?this.state.data.latitude:''}</span></li> */}
                        </ul>
                        
                    </div>
            </div>
        )
    }
}

export default companydetail;