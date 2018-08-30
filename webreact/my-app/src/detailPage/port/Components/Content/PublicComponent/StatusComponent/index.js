import React, {Component} from 'react';
import './index.css'

const StatusComponent = ({name, color})=>{
    let style = {
        borderColor:color
    }
    return (
        <div className="status_box" style={style}>
            {name}
        </div>
    )
}
export default StatusComponent;