import React, {Component} from 'react';
import ModuleTitle from '../PublicComponent/ModuleTitle';
import TableBox from '../PublicComponent/TableBox';
import TabComponent from '../PublicComponent/TabComponent';
import PageEasy from '../PublicComponent/PageEasy';
import server from '../../../../../axios/portAndBerthServer';
import PortImportEchart from '../Echarts/PortImportEchart';
import PortExportEchart from '../Echarts/PortExportEchart';
import TableSpecial from '../PublicComponent/TableSpecial';
import '../../../style/page.css';
import './index.css';

class PortImportAndExport extends Component {
    constructor() {
        super();
        this.tabFunForPortFlow = this.tabFunForPortFlow.bind(this);
        this.state = {
            dataForCountry:{
                exportCount:[],
                importCount:[]
            }
        }
        this.staticData = {
            module:1,
            fileNameEmptyArriveCountry:{"volume":0,"arrive_country":"","type":"","voyage":0},
            fileNameEmptyStartCountry:{"volume":0,"start_country":"","type":"","voyage":0}
        }
    }


    componentWillMount() {

    }
    getPortGoodsCountOfCountryServer(){
        server.getPortGoodsCountOfCountry({id:this.props.portId},(data)=>{
            if(data){
                this.getPortGoodsCountOfCountryData(data,"country")
            }
        })
    }
    getPortGoodsCountOfPortServer(){
        server.getPortGoodsCountOfPort({id:this.props.portId},(data)=>{
            if(data){
                this.getPortGoodsCountOfCountryData(data,"port")
            }
        })
    }
    getPortGoodsCountOfCountryData(data,type){
        let dataForCountry = {
            type,
            name:null,
            exportCount:[],
            importCount:[]
        };
        if(data.exportCount.length==0){
            dataForCountry.name = data.importCount[0].start_country?data.importCount[0].start_country:data.importCount[0].arrive_port;
            for(let i=0;i<data.importCount.length;i++){
                dataForCountry.exportCount.push({...this.staticData.fileNameEmptyArriveCountry});
                dataForCountry.importCount.push(data.importCount[i]);
            }
        }else{
            dataForCountry.name = data.exportCount[0].arrive_country?data.exportCount[0].arrive_country:data.importCount[0].start_port;
            for(let i=0;i<data.exportCount.length;i++){
                dataForCountry.importCount.push({...this.staticData.fileNameEmptyStartCountry});
                dataForCountry.exportCount.push(data.exportCount[i]);
            }
        }
        this.setState({dataForCountry});

    }
    tabFunForPortFlow(n){
        this.staticData.module = Number(n);
        if(n==2){
            //进出口国家数据请求
            this.getPortGoodsCountOfCountryServer();
        }
        if(n==3){
            //进出口港口数据请求
            this.getPortGoodsCountOfPortServer();
        }
    }
    render() {
        let portImportAndExportComponent;
        let mo = this.staticData.module;
        if(mo==1){//货物
            console.log("货物")
            portImportAndExportComponent = (
                <div className="piaec_cargo">
                    <div className="piaec_cargo_import">
                        <PortImportEchart portId={this.props.portId}/>
                    </div>
                    <div className="piaec_cargo_export">
                        <PortExportEchart portId={this.props.portId}/>
                    </div>
                </div>
            )
        }else if(mo==2){//国家
            portImportAndExportComponent = (
                <div className="piaec_country">
                    <TableSpecial data={this.state.dataForCountry}/>
                </div>
            )
        }else if(mo==3){//港口
            portImportAndExportComponent = (
                <div className="piaec_country">
                    <TableSpecial data={this.state.dataForCountry}/>
                </div>
            )
        }else if(mo==4){//公司
            portImportAndExportComponent = (
                <div className="piaec_country">
                    111
                </div>
            )
        }else if(mo==5){//航线
            portImportAndExportComponent = (
                <div className="piaec_country">
                    111
                </div>
            )
        }
        console.log("render")
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







