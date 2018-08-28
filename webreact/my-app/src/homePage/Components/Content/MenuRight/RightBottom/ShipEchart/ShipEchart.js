import React,{Component} from 'react';
import EchartTopTitle from '../../../../../Components/Content/MenuRight/EchartTopTitle/EchartTopTitle';
import "./index.css"


class ShipEchart extends Component{
    render(){
        return(
            <div id="se_box">
               {/* <div className="se_echart_1 echart_border">
                    <EchartTopTitle title="全球泊位概况"/>
                    <div className="se_echart_1_box">
                        <ReactEcharts
                            option={this.getOption()}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts1'
                        />
                    </div>
                </div>*/}
            </div>
        )

    }
}
export default ShipEchart;