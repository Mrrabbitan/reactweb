import React from 'react';
import ReactDOM from 'react-dom';
import './homePage/Style/index.css';
import App from './homePage/App';
import registerServiceWorker from './Assets/js/registerServiceWorker';
import {Provider} from "react-redux";
import store from './homePage/Store/store';
ReactDOM.render(
    <Provider store={store}>
        <App/>{/* 封装好的方法将store的props传给子组件，虽然看不到，但是封装在probvider的方法中了 */}
    </Provider>
    , document.getElementById('root'));



registerServiceWorker();/* 用于上线后的环境调试 


service worker是在后台运行的一个线程，可以用来处理离线缓存、消息推送、后台自动更新等任务。registerServiceWorker就是为react项目注册了一个service worker，用来做资源的缓存，这样你下次访问时，就可以更快的获取资源。而且因为资源被缓存，所以即使在离线的情况下也可以访问应用（此时使用的资源是之前缓存的资源）。注意，registerServiceWorker注册的service worker 只在生产环境中生效（process.env.NODE_ENV === 'production'）*/
