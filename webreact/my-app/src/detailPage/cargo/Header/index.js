import React,{Component} from 'react';
import HeaderTitle from '../Components/Header/HeaderTitle';
import './index.css'


class Header extends Component{
    render(){
        return (
            <div id="header">
                <div className="wrap">
                    <div className="header_box">
                        <HeaderTitle>xx货</HeaderTitle>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;