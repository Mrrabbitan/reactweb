import React,{Component} from 'react';
import './index.css'

class ModuleTitle extends Component{
    render(){
        return (
            <div className={'mt_box'+' mt_box_'+this.props.type}>
                {this.props.title}
            </div>
        )
    }
}
export default ModuleTitle;