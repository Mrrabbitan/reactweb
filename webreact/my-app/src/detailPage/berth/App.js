import React,{Component} from 'react';
import Header from './Containers/Header/header';
import Content from './Containers/Content/content';
import './style/index.css'

class App extends Component{
    constructor(){
        super();
        this.state={
            
        }
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