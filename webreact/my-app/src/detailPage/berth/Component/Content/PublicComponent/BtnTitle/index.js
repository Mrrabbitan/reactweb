import React from 'react';
import './index.css';

const BtnTitle = ({className,children}) =>{
    return (
        <div className={"btn_title"+" "+className}>{children}</div>
    )
}
export default BtnTitle;