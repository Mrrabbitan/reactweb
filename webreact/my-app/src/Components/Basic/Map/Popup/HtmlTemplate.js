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
    createIndexTemplate1(data) {
       /* var lonlat = data.mt_pos.split('/');
        var port_english_name_space = data.country_english_name;
        var country_english_name = port_english_name_space.replace(/(^\s*)|(\s*$)/g, "");
        return this.template1(country_english_name, data.name, data.port_chaname, lonlat[0], lonlat[1], data.country);*/
       return "<div>TODO</div>";
    }
}

export default new HtmlTemplate();