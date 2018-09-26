import React from 'react';
import HeaderTitle from '../Components/Header/HeaderTitle';
import './index.css'
import HeaderWeather from '../../strait/Components/Header/Headerweather/HeaderWeather';

class Header extends React.Component{
    render(){
        return(
            <div id="header">
                <div className="wrap">
                    <div className="header_box">
                        <HeaderTitle>shanghai港 港区</HeaderTitle>
                        <HeaderWeather></HeaderWeather>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;