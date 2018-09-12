import React from 'react';
import HeaderTitle from '../../Components/Header/Headertitle/HeaderTitle';
import HeaderWeather from '../../Components/Header/Headerweather/HeaderWeather';
import "./index.css"

const header =(props)=>{
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

export default header;