import React,{Component} from 'react'
import TopDataAnalysis from './MenuRightTop/topdataanalysis';
import BottomEchart from './MenuRightBottom/bottomechart';



class MenuRight extends Component{
    render(){
        return (
            <div id="contentright">
                <TopDataAnalysis/>
                <BottomEchart/>
            </div>
        )
    }
}
export default MenuRight;