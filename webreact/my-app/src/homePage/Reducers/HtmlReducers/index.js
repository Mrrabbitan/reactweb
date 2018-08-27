import {combineReducers} from "redux";
import map from "./Map.js";
import menuLeft from "./MenuLeft";
import dataLayer from './DataLayer';
import topDataAnalysis from './TopDataAnalysis'

export default combineReducers({
    map,
    menuLeft,
    dataLayer,
    topDataAnalysis
});