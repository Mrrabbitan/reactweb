import React from 'react';
import $ from 'jquery';
import "../../Assets/style/popup.css";

/**
 * 返回渲染的标牌组件
 */
/*<div id='popup1'><div id='popup-content'></div></div> <a href='#' id='popup-closer' class='ol-popup-closer'></a>*/
export default () => (
    <div id='popup' className='ol-popup'>
        <div id='popup-content'></div>
    </div>
)