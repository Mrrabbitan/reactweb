import React from "react";
import Content from './Content'
import Header from './Header'
class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}
export default App;