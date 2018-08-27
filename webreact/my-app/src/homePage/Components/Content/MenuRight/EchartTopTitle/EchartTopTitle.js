import React,{Component} from 'react';
import "./index.css"


class EchartTopTitle extends Component{
    render(){
        return(
            <div className="ett_box">
                <p>{this.props.title}</p>
            </div>
        )

    }
}

export default EchartTopTitle;