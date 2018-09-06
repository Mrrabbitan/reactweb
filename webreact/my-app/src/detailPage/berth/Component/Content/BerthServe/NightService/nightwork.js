import React,{Component} from "react";
import '../index.css'
import BtnTitle from '../../PublicComponent/BtnTitle/index';

class nightwork extends Component{

    render(){
        return(
            <div className="nightwork_box">
                <BtnTitle className="device_btn">夜间作业</BtnTitle>
                <div className="nightwork_picshow">
                    <div className="nightwork_enterberth">
                        <div className="nightwork_text">靠泊</div>
                        <div className="outCilcle_nightwork">
                            <div className="inLineCircle_nightwork">支持</div>
                        </div>
                    </div>
                    <div className="nightwork_exitberth">
                        <div className="nightwork_text">离泊</div>
                        <div className="outCilcle_nightwork">
                            <div className="inLineCircle_nightwork">支持</div>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}
export default nightwork;