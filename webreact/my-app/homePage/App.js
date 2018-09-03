/* 
*app.js为总组件将页面内所有的容器整合到该大容器内
*/

import React,{Component} from 'react';
import Header from './Containers/Header/index';
import Content from './Containers/Content/index';

import './Style/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*头部*/}
                <Header/>
                {/*海图内容*/}
                <Content/>
            </div>
        );
    }
}

export default App;
