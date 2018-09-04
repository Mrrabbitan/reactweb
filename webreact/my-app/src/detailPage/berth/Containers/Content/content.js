import React,{Component} from 'react';
import Basic from './Basic/Basic';
import Detail from './Detail/Detail';

class content extends Component{
render(){
    return(
            <div id="content">
                {/*基本信息*/}
                <Basic/>
                {/*具体内容*/}
                <Detail/>
            </div>

        )

    }

}

export default content;