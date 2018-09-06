import React,{Component} from 'react';
import './index.css';
const TypeBtn = ({active,children})=>{
    return (
        <div className={"typeBtn"+(active?" active":"")}>
            {children}
        </div>
    )
}
export default TypeBtn;