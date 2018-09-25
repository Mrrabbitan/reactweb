import React from 'react';
import ReactDOM from 'react-dom';
import App from './detailPage/cargo/App';
import store from './detailPage/cargo/store/store';
import { Provider } from 'react-redux';
import './detailPage/cargo/style/index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
