/* 监听传递到的state参数，其中html与http均为一个对象，可再createStore内针对不同的对象进行扩展
*
*监听state变化 实时更新保存数据。
将保存是数据作为全局对象导出就可以了
*/

import {createStore,combineReducers,applyMiddleware} from 'redux';
import html from '../Reducers/HtmlReducers';
import http from '../Reducers/HttpReducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';


export default  createStore(combineReducers({
    html,
    http
}), applyMiddleware(thunk,createLogger()))