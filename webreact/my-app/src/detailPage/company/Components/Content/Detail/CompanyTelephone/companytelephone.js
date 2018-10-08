import React from 'react'
import ModuleTitle from '../../PublicComponent/ModuleTitle';
import '../index.css'
class companytelephone extends React.Component{
    constructor(){
        super();
        this.state={
            data:null,
        }
    }
    render(){
        const {address}=this.props.data?this.props.data:{};
        let addresses =address?address:{};

        return(
            <div id="company_tele_box">
                <ModuleTitle title="联系方式" type="2"/>
                <div className="bi_basicInfo_box">
                        <ul>
                            <li><span className="bi_basicInfo_box_item_k">公司地址&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{addresses.fulladdress}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">电话&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{addresses.telephone}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">电报&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{addresses.telex}</span></li>
                             <li><span className="bi_basicInfo_box_item_k">传真&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{addresses.facsimile}</span></li>
                             <li><span className="bi_basicInfo_box_item_k">E-mail&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span><span>{addresses.email}</span></li>
                            {/* <li><span className="bi_basicInfo_box_item_k">国家：</span><span>{this.state.data?this.state.data.country_cn_name:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">经度：</span><span>{this.state.data?this.state.data.longitude:''}</span></li>
                            <li><span className="bi_basicInfo_box_item_k">纬度：</span><span>{this.state.data?this.state.data.latitude:''}</span></li> */}
                        </ul>
                        
                    </div>

            </div>
        )
    }
}

export default companytelephone;