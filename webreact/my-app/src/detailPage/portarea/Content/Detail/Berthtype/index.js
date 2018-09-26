import React from 'react';
import ModuleTitle from '../../../Components/ModuleTitleBox';
import './index.css'

class Berthtype extends React.Component{
    render(){
           return(
               <div id="Berthtype_box">
                    <ModuleTitle type='2' title='泊位分类'></ModuleTitle>
                    <div className="berthtype_content">
                        
                    </div>
               </div>
           )
    }
}

export default Berthtype;
