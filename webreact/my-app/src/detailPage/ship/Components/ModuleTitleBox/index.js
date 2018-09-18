import React from 'react';
import './index.css'

const ModuleTitleBox = ({ title, type ,children}) => {
    
    return (
        <div className="module_box">
            <div className={'mt_box' + ' mt_box_' + type}>
                {title}
            </div>
            <div className="module_content_box">
                {children}
            </div>
        </div>
        
    )
}
export default ModuleTitleBox;