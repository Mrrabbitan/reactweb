import React from 'react';
import ReactDOM from 'react-dom';
import App from './detailPage/portarea/App';
import store from './detailPage/portarea/store/store';
import { Provider } from 'react-redux';
import './detailPage/portarea/style/index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
