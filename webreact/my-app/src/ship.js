import React from 'react';
import ReactDOM from 'react-dom';
import App from './detailPage/ship/App';
import store from './detailPage/ship/store/store';
import { Provider } from 'react-redux';
import './detailPage/ship/style/index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
