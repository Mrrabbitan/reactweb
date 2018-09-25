import React, { Component } from 'react';
import ImportCompanyTenChartForPie from '../charts/ImportCompanyTenChartForPie';
import ExportCompanyTenChartForPie from '../charts/ExportCompanyTenChartForPie';
import './index.css';

class RelateCompany extends Component {
    handlePageChanged = () => {

    }
    render() {
        return (
            <div className="rcp_box">
                <div className="rcp_chart_box">
                    <div className="rcp_chart_1">
                        <ImportCompanyTenChartForPie />
                    </div>
                    <div className="rcp_chart_2">
                        <ExportCompanyTenChartForPie />
                    </div>
                </div>
            </div>
        )
    }
}
export default RelateCompany;