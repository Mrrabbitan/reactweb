import * as popupEvent from "./PopupEvent";
/***
 * 弹出框的html模板
 */
class HtmlTemplate {

    /***
     * c创建弹出框HTML模板
     * @param country_english_name  国家名称（英文）
     * @param port_english_name  港口名称（英文）
     * @param port_chaname   港口名称(中文)
     * @param lon  经度
     * @param lat  纬度
     * @param country  国家代码
     * @returns {string}
     */
    template1(country_english_name, port_english_name, port_chaname, lon, lat, country) {
        let src = process.env.PUBLIC_URL + "countrypic/" + country_english_name + ".jpg";
        /*let disInfo = `<div id='linedetail' style='color:white;height:55px;width:200px;margin:0px;padding:0px;'>
        <div style='height:25px;width:200px;background:#153895;position:absolute;left:0px;top:0px;text-align:center;color:white;line-height:25px;font-size:16px;'>
         <img style='height:25px;width:45px;position:absolute;left:0px;' src='${src}'/>
         港口标牌  </div>
        <div id='jbxx' style='height:230px;width:200px;background:#3362ce;position:absolute;left:0px;top:25px;display:block;font-size:15px;'>
        <div style='height:180px;width:200px;background:#3362ce'>
        <div style='height:22px;width:200px;float:left;overflow:hidden;text-align:left;margin-left:10px;'>  中文名:  ${port_chaname}  </div>
        <div style='height:22px;width:200px;float:left;overflow:hidden;text-align:left;margin-left:10px;'>  英文名:  ${port_english_name}  </div>
        <div style='height:22px;width:200px;float:left;text-align:left;margin-left:10px;'>  经度:  ${lon}  </div>
        <div style='height:22px;width:200px;float:left;text-align:left;margin-left:10px;'>  纬度:  ${lat}  </div>
        <div style='height:22px;width:200px;float:left;text-align:left;margin-left:10px;'>  国家代码:  ${country}  </div>
        <br>
        <div id='portdetailan' style='height:80px;width:285px;float:left;text-align:left;margin-left:10px;line-height:22px;'>  </div>
        <button style='margin-left:15px;'>详情页面</button>
        <button style='margin-left:15px;'>港口网络</button>  <br>  <br>
         </div>
         </div>
         </div>`;*/
        let disInfo = `<div>
                            中文名:  ${port_chaname} 
                        </div>`
        return disInfo;
    }

    /***
     * 首页港口标牌HTML模板
     * @param data
     * @returns {string}
     */
    createIndexPortTemplate(item) {
        let latitudeDecimal = item.latitudeDecimal ? item.latitudeDecimal : item.latitudedecimal
        let disInfo = `<div>
                            <div class="content_title">港口标牌</div>
                            <div class="content_bottom">
                                <div class="content_content">
                                    <div class=""><span class="titleText">中文名：</span><span class="contectText">${item.portname}</span></div>
                                    <div><span  class="titleText">英文名：</span><span class="contectText">${item.portname}</span></div>
                                    <div><span class="titleText">经度：</span><span class="contectText">${item.longitudedecimal}</span></div>
                                    <div><span class="titleText">纬度：</span><span class="contectText">${latitudeDecimal}</span></div>
                                    <div><span class="titleText">国家代码：</span><span class="contectText">${item.countrycode}</span></div>
                                    <div><span class="titleText">在港船舶：</span><span class="contectText"></span></div>
                                    <div><span class="titleText">在进港船舶：</span><span class="contectText"></span></div>
                                    <div><span class="titleText">在离港船舶：</span><span class="contectText"></span></div>
                                    <div class="content_buttom">
                                            <div>港口详情</div>
                                            <div>港口网络</div>
                                    </div>
                                </div>
                            </div>
                       </div>`
        return disInfo;
    }

    /***
     * 创建首页海峡标牌
     * @param item
     * @returns {string}
     */
    createIndexStraitTemplate(item) {
        let disInfo = `<div>
                            <div class="content_title">${item.cnName}</div>
                            <div class="content_bottom">
                                <div class="content_content">
                                       <div><span class="titleText">总流量</span></div>
                                       <div><span class="contectText" id="straitTotalFlow">7777777777船次</span></div>
                                       <div><span class="titleText">货运总量</span></div>
                                       <div><span class="contectText" id="straitGoodsFlow">88888888888吨</span></div>
                                </div>
                                <div class="content_content_line"></div>
                                <div class="content_echarts_title">
                                    <div>主要经过国家货运量</div>
                                    <div class="content_echarts_title_a">更多详情>></div>
                                </div>
                                <div class="content_echarts" id="straitEcharts"></div>
                            </div>
                       </div>`
        return disInfo;
    }

    createIndexTemplate1(name) {
        /* alert('1231231') */
       /* var lonlat = data.mt_pos.split('/');
        var port_english_name_space = data.country_english_name;
        var country_english_name = port_english_name_space.replace(/(^\s*)|(\s*$)/g, "");
        return this.template1(country_english_name, data.name, data.port_chaname, lonlat[0], lonlat[1], data.country);*/
        let disInfo = `<div>
                    海区名称:  ${name} 
                    </div>`
        return disInfo;
    }

    /**
     * 创建船舶的标牌
     * @param name
     * @returns {string}
     */
    createIndexShipTemplate(item) {
        let disInfo = `<div>
                            <div class="content_title">船名</div>
                            <div class="content_bottom">
                                <div class="content_ship_tab" data_MMSI="${item.I}">
                                    <div id="content_ship_tab_jiben" data-type="content_ship_tab_content_jiben"  class="content_ship_tab_active">基本信息</div>
                                    <div id="content_ship_tab_xiangqing" data-type="content_ship_tab_content_xiangxi">详细信息</div>
                                    <div id="content_ship_tab_zuijin" data-type="content_ship_tab_content_zuijin">最近停靠</div>
                                    <div id="content_ship_tab_guiji" data-type="content_ship_tab_content_guiji">轨迹</div>
                                </div>
                                <div class="content_ship_tab_content">
                                    <div id="content_ship_tab_content_jiben"  class="content_ship_tab_content_active">
                                    基本信息
                                    </div>
                                    <div id="content_ship_tab_content_xiangxi">
                                    详细信息
                                    </div>
                                    <div id="content_ship_tab_content_zuijin">
                                    最近停靠
                                    </div>
                                    <div id="content_ship_tab_content_guiji">
                                    轨迹
                                    </div>
                                </div>
                            </div>  
                       </div>`
        return disInfo;
    }

    /***
     * 生成泊位的标牌
     * @param data
     * @returns {string}
     */
    createBerthDisInfo(data) {
        let disInfo = `<div>
                            <div class="content_title">---港口---泊位</div>
                            <div class="content_bottom">
                                <div class="content_content_heng">
                                       <div>
                                            <div class="content_content_heng_title">泊位类型</div>
                                            <div class="content_content_heng_text">111</div>
                                       </div>
                                       <div>
                                            <div class="content_content_heng_title">长度</div>
                                            <div class="content_content_heng_text">111</div>
                                       </div>
                                       <div>
                                            <div class="content_content_heng_title">宽度</div>
                                            <div class="content_content_heng_text">111</div>
                                       </div>
                                       <div>
                                            <div class="content_content_heng_title">最大吃水</div>
                                            <div class="content_content_heng_text">111</div>
                                       </div>
                                </div>
                                <div class="content_content_emptyLine"></div>
                                <div class="content_content">
                                    <div class=""><span class="titleText">最大靠泊能力：</span><span class="contectText">5亿吨</span></div>
                                    <div class=""><span class="titleText">年通过能力：</span><span class="contectText">6吨</span></div>
                                    <div class=""><span class="titleText">装卸能力：</span><span class="contectText">5亿吨</span></div>
                                    <div class=""><span class="titleText">平均装卸时长：</span><span class="contectText">3小时</span></div>
                                    <div class=""><span class="titleText">中心点：</span><span class="contectText">111/22</span></div>
                                    <div class=""><span class="titleText">停靠最大吨位：</span><span class="contectText">2吨</span></div>
                                </div>
                                <div class="content_botton_link">
                                    <div></div>
                                    <div class="content_botton_link_a">更多详情>></div>
                                </div>
                            </div>  
                       </div>`
        return disInfo;
     }


}

export default new HtmlTemplate();