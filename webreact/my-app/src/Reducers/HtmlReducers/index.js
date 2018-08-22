import {combineReducers} from "redux";
import map from "./Map.js";
import menuLeft from "./MenuLeft";
import dataLayer from './DataLayer';

export default combineReducers({
    map,
    menuLeft,
    dataLayer
});