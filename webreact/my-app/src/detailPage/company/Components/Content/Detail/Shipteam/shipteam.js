import React from 'react';
import ModuleTitle from '../../PublicComponent/ModuleTitle/index'
import '../index.css'
import Companyownteam from '../../Shipteamcomponents/Companyownteam/companyown';
import Managementteam from '../../Shipteamcomponents/Managementteam/managementteam';
import Runningteam from '../../Shipteamcomponents/RunningTeam/runningteam';
import Sighupteam from '../../Shipteamcomponents/Sighupteam/sighupteam';
import $ from 'jquery'

class shipteam extends React.Component{
    constructor(){
        super();
        this.state={
            Changetab:1,
        }
    }

   changestate(e,Changetab){
       $('.ship_table_title>span').removeClass('active');
        $(e.currentTarget).addClass('active');
        this.setState({Changetab});
   }

render(){
   let changshiptabstate;
    if(this.state.Changetab===1){
        changshiptabstate=(
            <div className="shipteam_table_content">
                <Companyownteam/>
            </div>
        )
    }else if(this.state.Changetab===2){
        changshiptabstate=(
            <div className="management_table_content">
                <Managementteam/>
            </div>
        )
    }else if(this.state.Changetab===3){
        changshiptabstate=(
            <div className="Running_table_content">
                <Runningteam/>
            </div>
        )
    }else if(this.state.Changetab===4){
        changshiptabstate=(
            <div className="sighup_table_content">
                <Sighupteam/>
            </div>
        )
    }

    return(
        <div id="shipteam_box">
            <ModuleTitle title="船队" type="2"/>
            <div className="shipteam_table">
                <div className="ship_table_title">
                    <span className="active" onClick={(e)=>this.changestate(e,1)}>公司所有船队</span>
                    <span onClick={(e)=>this.changestate(e,2)}>管理船队</span>
                    <span onClick={(e)=>this.changestate(e,3)}>经营船队</span>
                    <span onClick={(e)=>this.changestate(e,4)}>注册船队</span>
                </div>
                {changshiptabstate}
            </div>
        </div>

    )

}

}
export default shipteam