import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/style/index.css';
import App from './App';
import registerServiceWorker from './Assets/js/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
