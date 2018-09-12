import React from 'react'
import ModuleTitle from '../../../Components/Content/PublicComponent/ModuleTitle/index';
import './index.css'


const tempship =(props)=>{
    return(
        <div className='tempship_box'>
            <ModuleTitle title='当前船舶' type='2'/>
            <div className="tempship_form_content">
                
            </div>
        </div>
    )
}

export default tempship;
