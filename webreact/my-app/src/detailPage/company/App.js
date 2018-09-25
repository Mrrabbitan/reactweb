import React, { Component } from 'react';
import Header from './Header/index';
import Content from './Content/content';

class App extends Component { 
    render() { 
        return (
            <div id="body">
                <Header/>
                <Content/>
            </div> 
        )
    }
}
export default App;