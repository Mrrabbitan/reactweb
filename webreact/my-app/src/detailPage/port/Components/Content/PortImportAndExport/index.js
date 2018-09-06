import React, {Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle'
import TableBox from '../PublicComponent/TableBox'
import TabComponent from '../PublicComponent/TabComponent'
import PageEasy from '../PublicComponent/PageEasy';
import server from '../../../../../axios/portAndBerthServer';
import PortImportEchart from '../Echarts/PortImportEchart'
import PortExportEchart from '../Echarts/PortExportEchart'
import '../../../style/page.css';
import './index.css';

class PortImportAndExport extends Component {
    constructor() {
        super();
        this.tabFunForPortFlow = this.tabFunForPortFlow.bind(this);
        this.state = {
            module:1,
        }
    }

    componentWillMount() {

    }
    tabFunForPortFlow(n){
        this.setState({module:Number(n)});
    }
    render() {
        let portImportAndExportComponent;
        if(this.state.module==1){//货物
            portImportAndExportComponent = (
                <div className="piaec_cargo">
                    <div className="piaec_cargo_import">
                        <PortImportEchart/>
                    </div>
                    <div className="piaec_cargo_export">
                        <PortExportEchart/>
                    </div>
                </div>
            )
        }else if(this.state.module==2){//国家
            portImportAndExportComponent = (
                <div className="piaec_country">
                    <table>
                        <thead>
                        <tr>
                            <td rowSpan="2">国家</td>
                            <td colSpan="3">进口</td>
                            <td colSpan="3">出口</td>
                        </tr>
                        <tr>
                            <td>货物</td>
                            <td>航次</td>
                            <td>货量</td>
                            <td>货物</td>
                            <td>航次</td>
                            <td>货量</td>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2</td>
                                <td>2</td>
                                <td>2</td>
                                <td>2</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }else if(this.state.module==3){//港口
            portImportAndExportComponent = (
                <div className="piaec_country">
                    111
                </div>
            )
        }else if(this.state.module==4){//公司
            portImportAndExportComponent = (
                <div className="piaec_country">
                    111
                </div>
            )
        }else if(this.state.module==5){//航线
            portImportAndExportComponent = (
                <div className="piaec_country">
                    111
                </div>
            )
        }
        return (
            <div id="piae_box">
                <ModuleTitle title="港口进出口" type="2"/>
                <div className="portImportAndExport_box">
                    <TabComponent
                        tabName={["货物","国家","港口","公司","航线"]}
                        thisClick={this.tabFunForPortFlow}
                        active={1}
                        name={"portImportAndExport"}
                    />
                    {portImportAndExportComponent}
                </div>
            </div>
        )
    }
}

export default PortImportAndExport;