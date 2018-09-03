import React,{Component} from 'react';
import $ from 'jquery';
import './style/index.css';
import Header from './Containers/Header';
import Content from './Containers/Content/Content'

class App extends Component{
    constructor(){
        super();
    }
    //页面元素加载前
    componentWillMount(){

    }
    //页面元素加载完成之后
    componentDidMount(){

    }
    render(){
        return (
            <div id="body">
                <Header/>
                <div className="wrap">
                    <Content/>
                </div>
            </div>
        )
    }
}
export default App;