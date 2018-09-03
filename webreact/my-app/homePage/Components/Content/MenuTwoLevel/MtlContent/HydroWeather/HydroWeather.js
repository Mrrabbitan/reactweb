import React,{Component} from 'react';
import './index.css'


class HydroWeather extends Component{
    render(){
        return (
            <div className="hw_box">
                <div className="hw_choice_ploy">
                    <div className="hw_choice_btn_box">
                        <span className="choice_btn choice_btn_active">气压</span>
                        <span className="choice_btn choice_btn_active">气温</span>
                        <span className="choice_btn choice_btn_active">海浪</span>
                        <span className="choice_btn choice_btn_active">海风</span>
                        <span className="choice_btn choice_btn_active">风场</span>
                        <span className="choice_btn">台风</span>
                        <span className="choice_btn choice_btn_active">潮汐</span>
                        <span className="choice_btn choice_btn_active">洋流</span>
                        <span className="choice_btn choice_btn_active">雾</span>
                        <span className="choice_btn">冰</span>
                        <span className="choice_btn">海区预报</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default HydroWeather;