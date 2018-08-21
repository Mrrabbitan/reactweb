import React,{Component} from 'react';
import "./index.css"
import TopEchart from '../../../../Components/Content/MenuRight/rightbottom/topechart';
import MidEchart from '../../../../Components/Content/MenuRight/rightbottom/midechart';
import BottomEchart1 from '../../../../Components/Content/MenuRight/rightbottom/bottomechart';


class BottomEchart extends Component{
    render(){
        return(
        <div>
            <TopEchart/>
            <MidEchart/>
            <BottomEchart1/>

        </div>
        )

    }
}

export default BottomEchart;