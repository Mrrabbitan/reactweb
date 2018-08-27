import React, {Component} from 'react';
import EchartTopTitle from '../../EchartTopTitle/EchartTopTitle';
import "./index.css"
import ReactEcharts from 'echarts-for-react';
import portAndBerthService from '../../../../../../axios/portAndBerthServer';
import shipAndBerth from '../../../../../../Assets/js/shipAndBerth';
import {getOption1, getOption2} from './option';


class PortEchart extends Component {
    constructor() {
        super();
        this.state = {
            dataNameEcharts1: [],
            dataValueEcharts1: [],
            dataNameEcharts2: [],
            dataValueEcharts2: []
        }
    }

    componentWillMount() {
        let self = this;
        portAndBerthService.getPortbelongContenent({}, function (data) {
            let dataArr1 = data.data.continentPort;//大洲
            let dataArr2 = data.data.majorEconomies;//经济体
            if (dataArr1) {
                self.doDataContinentPort(dataArr1);
            }
            if (dataArr2) {
                self.doDataMajorEconomies(dataArr2);
            }
        })
    }

    //各大洲数据处理
    doDataContinentPort(data) {
        let dataNameEcharts1 = [];
        let dataValueEcharts1 = [];
        data.map((item, index)=> {
            if (item.continent_name) {
                dataNameEcharts1.push(item.continent_name);
                dataValueEcharts1.push(item.count);
            }
        });
        this.setState({dataNameEcharts1, dataValueEcharts1});
    }

    //经济体分布数据处理
    doDataMajorEconomies(data) {
        let dataNameEcharts2 = [];
        let dataValueEcharts2 = [];
        data.map((item, index)=> {
            if (item.country) {
                dataNameEcharts2.push(shipAndBerth.tenCountryTranslate(item.country));
                dataValueEcharts2.push(item.count);
            }
        });
        this.setState({dataNameEcharts2, dataValueEcharts2});
        console.log(dataNameEcharts2)
    }

    render() {
        return (
            <div id="poe_box">
                <div className="poe_echart_1 echart_border">
                    <EchartTopTitle title="各大洲港口分布"/>
                    <div className="poe_echart_1_box">
                        <ReactEcharts
                            option={getOption1(this.state.dataNameEcharts1, this.state.dataValueEcharts1)}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts1'
                        />
                    </div>
                </div>
                <div className="poe_echart_2 echart_border">
                    <EchartTopTitle title="主要经济体港口"/>
                    <div className="poe_echart_2_box">
                        <ReactEcharts
                            option={getOption2(this.state.dataNameEcharts2, this.state.dataValueEcharts2)}
                            style={{height: '100%', width: '100%'}}
                            className='react_for_echarts2'
                        />
                    </div>
                </div>
            </div>
        )

    }
}


export default PortEchart;