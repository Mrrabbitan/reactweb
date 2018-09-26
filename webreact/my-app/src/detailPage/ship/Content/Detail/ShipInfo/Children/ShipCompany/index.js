import React, { Component} from 'react';
import ShipCompanyUi from './CompanyUi';
import H2Title from '.'
import './index.css';

class ShipCompany extends Component {
    render() { 
        return (
            <div className="sc_box">
                <H2Title></H2Title>
                <ShipCompanyUi />
            </div>
        )
    }
}

export default ShipCompany;