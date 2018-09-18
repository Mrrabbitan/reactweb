import React from 'react';
import './index.css';
import Range from './Range';


const JourneyInfo = () => { 
    return (
        <div className="journeyInfo_box">
            <div className="ji_startAndArrive">
                <div className="ji_saa_left">
                    <div className="ji_saa_port">上海港</div>
                    <div>
                        <span className="ji_saa_icon_box">ATD</span>
                        <span className="ji_saa_time">2018-08-21 08:51:02</span>
                    </div>
                </div>
                <div className="ji_saa_center">
                    <div>在途</div>
                    <div></div>
                </div>
                <div className="ji_saa_right">
                    <div className="ji_saa_port">上海港</div>
                    <div>
                        <span className="ji_saa_icon_box">ETD</span>
                        <span className="ji_saa_time">2018-08-21 08:51:02</span>
                    </div>
                </div>
            </div>
            <div className="ji_dist">
                <div className="ji_dist_left"><span>已航行</span><span>8954nm</span></div>
                <div className="ji_dist_center">
                    {/* 进度条 */}
                    <Range per={70}/>
                </div>
                <div className="ji_dist_right"><span>总距离</span><span>23950nm</span></div>
            </div>
        </div>
    )
}
export default JourneyInfo;