import React,{Component} from 'react';
import $ from 'jquery';
import './index.css';
import WeatherHead from './weatherHead';
import BerthBasic from './berthBasic';
import globaldefine from '../../Config/globaldefine';
import OdHistory from './BerthUsingTable';

class App extends Component{
    constructor(){
        super();
        this.state={
            odTableData:null
        }
    }
    //页面元素加载前
    componentWillMount(){

       // this.props.data
    }
    //页面元素加载完成之后
    componentDidMount(){
        
    }
    render(){
       // this.props.data
        return (
            <div id="body">
                 <WeatherHead/> 
                 <BerthBasic/> 
                 <div id='od'>
                     <div id='odCountByShipType'></div>
                     <div id='odCountByMonth'></div>
                     <div>
                         <OdHistory data={this.state.odTableData}/>
                     </div>
                 </div>
            </div>
        )
    }
}
export default App;