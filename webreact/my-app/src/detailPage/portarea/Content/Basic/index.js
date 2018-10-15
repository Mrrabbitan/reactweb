import React from 'react';
import Map from '../../Components/Basic/Map'
import ModuleTitle from '../../Components/ModuleTitleBox';
import DeviceDisPlay from '../../Components/Basic/DeviceDisPlay';
import BasicInfo from './BasicInfo';
import server from '../../../../axios/portAreaServer';
import { connect } from 'react-redux';
import './index.css'

class Basic extends React.Component{
    state = {
        data: {}
    }
    componentDidMount() { 
        this.getPortTerminalDetailServer()
    }
    //港区基本信息请求
    getPortTerminalDetailServer() { 
        server.getPortTerminalDetail({ terminalId: this.props.terminalId }, (data) => { 
            console.log(data)
            if (data) { 
                this.getPortTerminalDetailData(data)
            }
        })
    }
    //港区基本信息请求数据处理
    getPortTerminalDetailData(data) { 
        this.setState({
            data
        })
    }
    render(){
        return(
            <div id='basic'>
            {/* 左侧海图内容 */}
                <Map/>
                {/* 右侧基本信息模块 */}
                <div className="basic_box">
                    <ModuleTitle title='基本信息' type='1'>
                        <div className="basic_container_box">
                            <BasicInfo {...this.state}/>
                            <DeviceDisPlay {...this.state}/>
                        </div>
                    </ModuleTitle>
                </div>
            </div>
        )
    }
}

export default connect(
    state => { 
        return {
            terminalId: state.portAreaId
        }
        
    }
)(Basic);