import React from 'react';
import ReactDOM from 'react-dom';
import App from './detailPage/berth/App'
import store from "./detailPage/berth/store/store";
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>    
, document.getElementById('root'));
