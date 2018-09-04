import React from 'react';
import ReactDOM from 'react-dom';
import App from './detailPage/port/App';
import {Provider} from "react-redux";
import store from './detailPage/port/store';
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
