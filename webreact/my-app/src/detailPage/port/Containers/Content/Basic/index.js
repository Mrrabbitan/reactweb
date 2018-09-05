import React,{Component} from 'react';
import Map from '../../../Components/Content/Map'
import BasicInfo from '../../../Components/Content/BasicInfo'
import './index.css'




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