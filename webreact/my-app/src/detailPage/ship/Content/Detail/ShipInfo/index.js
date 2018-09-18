import React, { Component } from 'react';
import ModuleTitleBox from '../../../Components/ModuleTitleBox';
import TabComponent from '../../../Components/Detail/TabComponent';
import {
    BasicInfoDetail,
    ShipCompany,
    CarryCargo,
    ShipDevices,
    InspectionCertificate,
    SisterShip
} from './Children';
import { connect } from 'react-redux';
import './index.css';


class ShipInfo extends Component { 
    state = {
        //当前模块
        thisModule:1
    }
    //标签切换
    tabClick = (n) => { 
        this.setState({
            thisModule: Number(n)
        })
    }
    shouldComponentUpdate(nextProps) { 
        if (nextProps.shipInfo) {
            return true;
        }
        return false;
    }
    //模块渲染
    renderComponent() { 
        const { thisModule } = this.state;
        switch (thisModule) {
            case 1:
                return <BasicInfoDetail data={this.props.shipInfo}/>
            case 2:
                return <ShipCompany />
            case 3:
                return <CarryCargo />
            case 4:
                return <ShipDevices />
            case 5:
                return <InspectionCertificate />
            case 6:
                return <SisterShip/>
            default:
                return null
        }
    }
    render() { 
        return (
            <ModuleTitleBox type="2" title="船舶资料">
                <TabComponent
                    tabName={["基本资料", "船舶公司", "载货", "船舶设备", "检验证书", "姐妹船"]}
                    active={1}
                    thisClick={this.tabClick}
                    name="shipInfoDetail"
                />
                {this.renderComponent()}
            </ModuleTitleBox>
        )
    }
}

export default connect(
    (state) => { 
        return {
            shipInfo: state.shipInfo
        }
    }
)(ShipInfo);
