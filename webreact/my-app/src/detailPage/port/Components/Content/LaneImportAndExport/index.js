import React,{Component} from 'react';
import ModuleTitle from '../../../Components/Content/PublicComponent/ModuleTitle'
import LaneImportAndExportEchart from '../Echarts/LaneImportAndExportEchart';
import server from '../../../../../axios/portAndBerthServer';
import './index.css';

class LaneImportAndExport extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    componentWillMount(){
    }
    render(){
        return (
            <div id="laneImportAndExport">
                <ModuleTitle title="进出口航线" type="2"/>
                <div className="laneImportAndExport_box">
                    <LaneImportAndExportEchart/>
                </div>
            </div>
        )
    }
}
export default LaneImportAndExport;