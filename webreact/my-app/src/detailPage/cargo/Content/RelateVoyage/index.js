import React, { Fragment,Component } from 'react';
import ModuleTitleBox from '../../Components/ModuleTitleBox';
import TabComponent from '../../Components/Detail/TabComponent';
import { 
    RelateVoyageCount, RelatePort, RelateCountry, RelateCompany
} from './children'
import { connect } from 'react-redux';
import './index.css'

class RelateVoyage extends Component {
    state = {
        thisModule:1
    }
    tabClick = (n) => { 
        this.setState({
            thisModule:Number(n)
        })
    }
    renderComponent() { 
        let { thisModule } = this.state;
        switch (thisModule) { 
            case 1:
                return <RelateVoyageCount {...this.props}/>;
            case 2:
                return <RelatePort {...this.props}/>;
            case 3:
                return <RelateCountry {...this.props}/>;
            case 4:
                return <RelateCompany {...this.props}/>;
            default:
                return null;
        }
    }
    render() { 
        return (
            <Fragment>
                <ModuleTitleBox type="2" title="关联航次">
                    <TabComponent
                        tabName={["关联航次", "关联港口", "关联国家", "关联航运公司"]}
                        active={1}
                        thisClick={this.tabClick}
                        name="relateVoyage"
                    />
                    {
                        this.renderComponent()
                    }
                </ModuleTitleBox>
            </Fragment>
        )
    }
}

export default connect(
    state => {
        return {
            cargoType:state.cargoType
        }
    }
)(RelateVoyage);