import React, {Component} from 'react';
import $ from 'jquery';
import "../../../Assets/style/popup.css";

/**
 * 返回渲染的标牌组件
 */
/*<div id='popup1'><div id='popup-content'></div></div> <a href='#' id='popup-closer' class='ol-popup-closer'></a>*/
/*
export default () => (
    <div id='popup' className='ol-popup'>
        <div id='popup-content'></div>
    </div>
)*/
class Popup extends  Component{
    componentDidMount(){
        //监听船舶标牌点击事件
        $("#popup").on("click",".content_ship_tab>div",this.shipTab);
    }

    shipTab(){
        let mmsi = $(this).parent().attr("data_MMSI");
        $(".content_ship_tab>div").removeClass("content_ship_tab_active");
        $(this).addClass("content_ship_tab_active");
        $(".content_ship_tab_content>div").removeClass("content_ship_tab_content_active");
        $("#"+$(this).attr("data-type")).addClass("content_ship_tab_content_active");
    }
    render(){
        return (
            <div id='popup' className='ol-popup'>
                <div id='popup-content'></div>
            </div>
        )
    }
}
export default Popup;
