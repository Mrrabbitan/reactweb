
import {createStore,applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

export default createStore(reducers,applyMiddleware(createLogger()));