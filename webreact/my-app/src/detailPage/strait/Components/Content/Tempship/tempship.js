import React from 'react'
import ModuleTitle from '../../../Components/Content/PublicComponent/ModuleTitle/index';
import './index.css'
import TableBox from '../PublicComponent/TableBox';
import PageEasy from '../PublicComponent/PageEasy';


class tempship extends React.Component{
    
    render(){
        
      let newarr=this.props.data;
    return(
        <div className='tempship_box'>
            <ModuleTitle title='当前船舶' type='2'/>
             <div className="relation_table_box">
                        <TableBox
                            list={newarr.pageSize}
                            active={2}
                            thead={["ID", "MMSI", "船名", "船舶类型", "呼号", "国家", "船长","船宽","IMO","吃水","更新时间"]}
                            fileName={["shipId", "mmsi", "shipName", "shipType", "callSign", "countryCode", "shipLength","shipWide","imo","shipDraft","collectUTC"]}
                            data={newarr.data.data}
                        />
                    </div>
                    <PageEasy
                        total={Math.ceil(newarr.data.count / newarr.pageSize)}
                        current={1}
                        pageId="mtb_page"
                        onPageChanged={this.handlePageChanged}
                    /> 
        </div>
    )}

}

export default tempship;
