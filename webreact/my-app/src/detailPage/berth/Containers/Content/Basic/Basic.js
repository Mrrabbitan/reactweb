import React,{Component} from 'react';
import Map from '../../../Component/Content/Map/Map';

import './index.css'
import BasicInfo from '../../../Component/Content/BasicInfo/BasicInfo';

class Basic extends Component{
    render(){
        return (
            <div id="basic">
                {/*map*/}
                <Map/>
                {/*基本信息*/}
                <BasicInfo/>
            </div>
        )
    }
}
export default Basic;