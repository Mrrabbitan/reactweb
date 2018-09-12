import React from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import './index.css' 

const historyship =(props)=>{

    return(
        <div id='historyship_box'>

            <ModuleTitle title='历史船舶流量' type='2'/>
            <div className='historyship_box_content'>

                <div id="history_ship_flow">
                
                </div>
            </div>
        </div>
    )
}

export default historyship;