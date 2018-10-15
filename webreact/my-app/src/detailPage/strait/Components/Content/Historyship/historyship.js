import React from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import './index.css' 
import HistoryshipflowEchart from '../Echarts/HistoryshipflowEchart/historyshipflowechart';
import HistorygoodsThroughputEchart
    from '../Echarts/HistorygoodsThroughputEchart/historygoodsthroughputechart';
import $ from 'jquery'

class historyship extends React.Component{
constructor(){
    super();
    this.state={
       tabServiceSta:1,    
    }
}
funcchange = (e,tabServiceSta) =>{
  $('.'+this.props.name+'tab>span').removeClass('active');
  $(e.currentTarget).addClass('active');
  
    this.setState({tabServiceSta});
}

render(){
    let historychangeintheindex;
 if(this.state.tabServiceSta===1){   
    historychangeintheindex=(<div>
        <div className="history_shipping_flow">
            <HistoryshipflowEchart/>
        </div>
    </div>)
    }else if(this.state.tabServiceSta===2){
        historychangeintheindex=(<div>
            <div className="history_shipping_flow1">
                <HistorygoodsThroughputEchart/>
            </div>
        </div>)
    }
    return(
        <div id='historyship_box'>

            <ModuleTitle title='历史船舶流量' type='2'/>
            <div className='historyship_box_content'>
                <div id="history_ship_flow" className={this.props.name+"tab"}>
                    <span className="active" onClick={(e)=>this.funcchange(e,1)}//传两个参数的方式
                    >历史船舶流量</span>
                    <span onClick={(e)=>this.funcchange(e,2)}>历史货物吞吐量</span>
                    <div className="historyflow_block">
                        {historychangeintheindex}
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default historyship;