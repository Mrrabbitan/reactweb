import React, { Fragment, Component } from 'react';
import ModuleTitleBox from '../../Components/ModuleTitleBox';
import CurrentWeekInfo from './CurrentWeekInfo';
import YearForWeekTrendChartForLine from './YearForWeekTrendChartForLine';
import server from '../../../../axios/cargoServer';
import './index.css'

class CargoArriveMonitor extends Component {
    state = {
        //全年趋势数据
        yearTrendData: [],
        yearTrendType:[]
    }
    componentDidMount() { 
        //全年趋势图请求
        this.getWeekTendServer();
    }
    //全年趋势图请求
    getWeekTendServer() {
        server.getWeekTend({ type: this.props.cargoType, year: this.props.year}, (data) => { 
            if (data) { 
                this.getWeekTendData(data);
            }
        })    
    }
    //全年趋势数据处理
    getWeekTendData(data) { 
        let len = data.exitTotal.length;
        let yearTrendType = getWeekType(len);
        let d1 = {
            name:"进口",
            type: 'line',
            
            data:[]
        }
        let d2 = {
            name: "出口",
            type: 'line',
            data: []
        }
        for (let i = 0; i < len;i++) { 
            d1.data.push(data.importTotal[i].volume)
            d2.data.push(data.exitTotal[i].volume)
        }
        this.setState({
            yearTrendData:[d1,d2],yearTrendType
        })
    }
    render() {
        const { yearTrendData, yearTrendType} = this.state;
        return (
            <Fragment>
                <ModuleTitleBox type="2" title="到港监测（周报）">
                    <div className="cam_box">
                        {/* 当前周情况 */}
                        <CurrentWeekInfo/>
                        {/* 全年周走势图 */}
                        <YearForWeekTrendChartForLine
                            data={yearTrendData}
                            type={yearTrendType}
                        />
                    </div>
                </ModuleTitleBox>
            </Fragment>
        )
    }
}
const getWeekType = (n) => {
    let type = [];
    for (var i = 0; i < Number(n);i++) { 
        type.push('第' + (i + 1) + '周');
    }
    return type;
}

export default CargoArriveMonitor;