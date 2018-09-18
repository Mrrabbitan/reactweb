import React,{Component} from 'react';
import HeaderTitle from '../Components/Header/HeaderTitle';
import HeaderWeather from '../Components/Header/HeaderWeather'
import './index.css'


class Header extends Component{
    render(){
        return (
            <div id="header">
                <div className="wrap">
                    <div className="header_box">
                        <HeaderTitle>xx船</HeaderTitle>
                        <HeaderWeather/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;