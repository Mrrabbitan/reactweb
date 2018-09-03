import React,{Component} from 'react';
import './index.css'


class HeaderWeather extends Component{
    render(){
        return (
            <div id="hw_box">
                <span className="hw_title">今日天气</span>
                <div className="hw_icon"><img src="" alt="weather"/></div>
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
                        <span className="he_info_v">102125.08kpa</span>
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
}
export default HeaderWeather;