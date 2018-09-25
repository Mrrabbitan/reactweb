import React, { Fragment,Component } from 'react';
import ModuleTitleBox from '../../Components/ModuleTitleBox';
import BasicInfoUi from './BasicInfoUi';
import './index.css'

class BasicInfo extends Component {
    render() { 
        return (
            <Fragment>
                <ModuleTitleBox type="2" title="基本信息">
                    <div className="bi_box">
                        <BasicInfoUi/>
                    </div>
                </ModuleTitleBox>
            </Fragment>
        )
    }
}

export default BasicInfo;