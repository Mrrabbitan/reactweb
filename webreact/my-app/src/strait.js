import React from 'react';
import ReactDOM from 'react-dom';
import App from './detailPage/strait/App';
import {Provider} from "react-redux";
import store from './detailPage/strait/store/store';
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
