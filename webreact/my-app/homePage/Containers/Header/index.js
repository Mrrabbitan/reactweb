import React,{Component} from 'react';
import LoginAndSignIn from '../../Components/Header/LoginAndSignIn/LoginAndSignIn';
import './index.css';


export default class Header extends Component{
    componentDidMount(){
        
    }


    render(){
        return (
            <div className="header_box">
                <div className="header_left">
                    <span className="ship_logo"></span>
                </div>
                <div className="header_right">
                    <LoginAndSignIn/>
                </div>
            </div>
        )
    }
}
