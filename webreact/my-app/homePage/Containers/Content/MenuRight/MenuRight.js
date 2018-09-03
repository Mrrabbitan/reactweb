import React,{Component} from 'react'
import TopDataAnalysis from './MenuRightTop/TopDataAnalysis';
import BottomEchartBox from './MenuRightBottom/BottomEchartBox';
import './index.css'



class MenuRight extends Component{
    render(){
        return (
            <div id="contentright">
                <TopDataAnalysis/>
                <BottomEchartBox type="1"/>
            </div>
        )
    }
}
export default MenuRight;