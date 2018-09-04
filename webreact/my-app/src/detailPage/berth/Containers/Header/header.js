import React,{Component} from 'react';
import HeaderTitle from '../Component/Header/Headertitle/HeaderTitle';
import HeaderWeather from '../Component/Header/Headerweather/HeaderWeather';

class header extends Component{
    render(){
        return(
<div id="header">
                <div className="wrap">
                    <div className="header_box">
                        <HeaderTitle/>
                        <HeaderWeather/>
                    </div>
                </div>
            </div>

        )
    }
}

export default header;