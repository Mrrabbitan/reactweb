import React, { Component } from 'react';
import TableSpecial from '../../../../Components/Detail/TableSpecial';
import server from '../../../../../../axios/portAreaServer';

class CompanyForImpAndExp extends Component {
    state = {
        data:[]
    }
    componentDidMount() { 
        this.getGoodsStatisticsByCompanyServer();
    }
    getGoodsStatisticsByCompanyServer() { 
        server.getGoodsStatisticsByCompany({ terminalId: this.props.portAreaId, year: this.props.year }, (data) => { 
            if (data) {
                this.getGoodsStatisticsByCompanyData(data);
                console.log(data)
            }
        })
    }
    getGoodsStatisticsByCompanyData(data) { 
        let newData = [];
        for (let i = 0; i < data.exit.length; i++) {
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
            <div>
                <TableSpecial
                    name="国家"
                    fileName={["country", "type", "importVoyage", "import", "type", "exitVoyage", "exit"]}
                    data={data}
                />
            </div>
        )
    }
}

export default CompanyForImpAndExp;