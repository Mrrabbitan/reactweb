import React,{Component} from 'react';
import Basic from './Basic';
import Detail from './Detail';
import './index.css'

class Content extends Component{
    render(){
        return (
            <div id="content">
                {/*基本信息*/}
                <Basic/>
                {/*具体内容*/}
                <Detail/>
            </div>
        )
    }
}
export default Content;