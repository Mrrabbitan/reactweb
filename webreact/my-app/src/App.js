import React,{Component} from 'react';
import Header from './Containers/Header/index';
import Content from './Containers/Content/index';

import './Assets/style/App.css';

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
