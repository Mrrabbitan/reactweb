import React,{Component} from 'react';
import HeaderTitle from '../Components/Header/headertitle';
import './index.css'


class Header extends Component{
    state = {
        code:''
    }
    componentDidMount(){
        //获取地址栏code
        
    }
    render(){
        return (
            <div id="header">
                <div className="wrap">
                    <div className="header_box">
                       <HeaderTitle>远洋船舶公司</HeaderTitle>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;