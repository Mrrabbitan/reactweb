import React, { Component } from 'react';
import TableSpecial from '../../../../Components/Detail/TableSpecial';
import server from '../../../../../../axios/portAreaServer';
import '../index.css'

class CountryForImpAndExp extends Component {
    state = {
        data:[]
    }
    componentDidMount() { 
        this.getGoodsStatisticsByCountryServer();
    }
    //数据请求
    getGoodsStatisticsByCountryServer() { 
        server.getGoodsStatisticsByCountry({ terminalId: this.props.portAreaId, year: this.props.year }, (data) => { 
            if (data) { 
                this.getGoodsStatisticsByCountryData(data);
            }
        });
    }
    //数据处理
    getGoodsStatisticsByCountryData(data) {
        let newData = [];
        for (let i = 0; i < data.exit.length;i++) {
            for (let j = 0; j < data.import.length; j++) {
                if (data.exit[i].type == data.import[j].type) {
                    newData.push({
                        country: data.exit[i].country_cn_name,
                        exit: data.exit[i].original_load,
                        import: data.import[i].original_load,
                        type: data.exit[i].type,
                        exitVoyage: data.exit[i].voyage,
                        importVoyage: data.import[i].voyage
                    })
                    break;
                }
            }
        }
        this.setState({
            data: newData
        })
    }
    render() {
        const data = this.state.data;
        return (
            <div className="ctfiae_box">
                <TableSpecial
                    name="国家"
                    fileName={["country", "type", "importVoyage", "import", "type", "exitVoyage", "exit"]}
                    data={data}
                />
            </div>
        )
    }
}

export default CountryForImpAndExp;