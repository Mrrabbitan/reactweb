import React from 'react';
import ModuleTitle from '../../../Components/ModuleTitleBox';
import TabComponent from '../../../Components/Detail/TabComponent';
import {  CargoForImpAndExp, CountryForImpAndExp, PortForImpAndExp, CompanyForImpAndExp, LaneForImpAndExp } from './children';
import './index.css'

class ExportAndInGoods extends React.Component {
    state = {
        module:1
    }
    tabFunForPortFlow = (n) => { 
        this.setState({module:n})
    }
    getChildren = () => { 
        let n = parseInt(this.state.module);    
        switch (n) { 
            case 1:
                return <CargoForImpAndExp {...this.props}/>;
            case 2:
                return <CountryForImpAndExp  {...this.props}/>;
            case 3:
                return <PortForImpAndExp  {...this.props}/>;
            case 4:
                return <CompanyForImpAndExp  {...this.props}/>;
            case 5:
                return <LaneForImpAndExp  {...this.props}/>;
            default:
                return null;
        }
    }
    render() {
        return (
            <div id='exportAndIn_box'>
                <ModuleTitle type="2" title="进出口货物">
                    <div className="exportAndin_content">
                        <TabComponent
                            tabName={["货物", "国家", "港口", "公司", "航线"]}
                            thisClick={this.tabFunForPortFlow}
                            active={1}
                            name={"portImportAndExport"}
                        />
                        <div className="exportAndIn_tab_box">
                            {this.getChildren()}
                        </div>
                    </div>
                </ModuleTitle>

            </div>
        )
    }
}

export default ExportAndInGoods;