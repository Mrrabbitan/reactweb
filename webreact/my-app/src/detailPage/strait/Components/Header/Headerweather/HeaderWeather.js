import React from 'react';
import './index.css'


const HeaderWeather =(props)=>{
   
        return (
            <div id="hw_box">
                <span className="hw_title">今日天气</span>
                <div className="hw_icon"><img src='img/weather/sunny_cloud.png'/></div>
                <div className="hw_temp"><span>15</span>℃<span>～</span><span>22</span>℃</div>
                <div className="hw_info_box">
                    <span className="hw_line"></span>
                    <div className="hw_info">
                        <span className="he_info_k">风向</span>
                        <span className="he_info_v">偏北风</span>
                    </div>
                    <span className="hw_line"></span>
                    <div className="hw_info">
                        <span className="he_info_k">风速</span>
                        <span className="he_info_v">1.2m/s</span>
                    </div>
                    <span className="hw_line"></span>
                    <div className="hw_info">
                        <span className="he_info_k">相对湿度</span>
                        <span className="he_info_v">78.9g/kg</span>
                    </div>
                    <span className="hw_line"></span>
                    <div className="hw_info">
                        <span className="he_info_k">气压</span>
                        <span className="he_info_v">102125.08pa</span>
                    </div>
                    <span className="hw_line"></span>
                    <div className="hw_info">
                        <span className="he_info_k">云雨</span>
                        <span className="he_info_v">0.44mm</span>
                    </div>
                </div>
            </div>
        )
    
}
export default HeaderWeather;