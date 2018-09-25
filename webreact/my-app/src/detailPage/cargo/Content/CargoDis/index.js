import React, { Fragment,Component } from 'react';
import ModuleTitleBox from '../../Components/ModuleTitleBox';
import CargoDisChartForGraph from './CargoDisChartForGraph';
import './index.css'

class CargoDis extends Component {
    render() { 
        return (
            <Fragment>
                <ModuleTitleBox type="2" title="货物全球分布">
                    <div className="cd_box">
                        <CargoDisChartForGraph/>
                    </div>
                </ModuleTitleBox>
            </Fragment>
        )
    }
}

export default CargoDis;