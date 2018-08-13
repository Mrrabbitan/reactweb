import React from 'react';
import './index.css';
import $ from 'jquery';
import httpServer from '../../../servers';
import ol from 'openlayers';
import PortController from '../../../Containers/Content/Map/port';


export default class SearchInput extends React.Component{
    constructor(){
        super();
        this.SearchClickAn = this.SearchClickAn.bind(this);/* 应将bind加入constructor中提升浏览器性能 */
    }

    componentDidMount(){
        
    }

    SearchClickAn(e){
        let $this =$(e.target); 
        var usersinput = this.refs.usersinput.value;
        let self = this;
        httpServer.app1({},function(data){
            self.searchportnow(data)
        })
    }

    searchportnow(data){
        let datalen= data.data.length;
        for(let i=0; i<datalen; i++){
            let datade=data.data;
            let lonlat=datade[i].mt_pos;
            let split=lonlat.split("/");
            let coord = ol.proj.transform([ parseFloat(split[0]), parseFloat(split[1]) ], 'EPSG:4326', 'EPSG:3857');
            PortController.ChooseAIS(coord);/* 增加迁移动画 */

            var port_english_name_space = datade[i].country_english_name;
        var port_english_name_space2 = port_english_name_space.replace(/(^\s*)|(\s*$)/g, ""); //remove all the space————————————————————————————————————————————
        
        var disInfo = "<div id='linedetail' style='color:white;height:55px;width:200px;margin:0px;padding:0px;'>" +
            "<div style='height:25px;width:200px;background:#153895;position:absolute;left:0px;top:0px;text-align:center;color:white;line-height:25px;font-size:16px;'>"
            + "<img style='height:25px;width:45px;position:absolute;left:0px;' src='"+ process.env.PUBLIC_URL + "countrypic/" + port_english_name_space2 + ".jpg'/>"
            + "港口标牌" + "</div>" +
            //详情的内容——————————————{process.env.PUBLIC_URL + '/countrypic/'}
            "<div id='jbxx' style='height:230px;width:200px;background:#3362ce;position:absolute;left:0px;top:25px;display:block;font-size:15px;'>" +
            "<div style='height:180px;width:200px;background:#3362ce'>" +
            "<div style='height:22px;width:200px;float:left;overflow:hidden;text-align:left;margin-left:10px;'>" + "中文名:" + datade[i].port_chaname + "</div>" +
            "<div style='height:22px;width:200px;float:left;overflow:hidden;text-align:left;margin-left:10px;'>" + "英文名:" + datade[i].name + "</div>" +
            "<div style='height:22px;width:200px;float:left;text-align:left;margin-left:10px;'>" + "经度:" + lonlat[0] + "</div>" +
            "<div style='height:22px;width:200px;float:left;text-align:left;margin-left:10px;'>" + "纬度:" + lonlat[1] + "</div>" +
            "<div style='height:22px;width:200px;float:left;text-align:left;margin-left:10px;'>" + "国家代码:" + datade[i].country + "</div>" +
            "<br>" +
            "<div id='portdetailan' style='height:80px;width:285px;float:left;text-align:left;margin-left:10px;line-height:22px;'>" + "</div>" +
            "<button style='margin-left:15px;'><a  href='" +  + "/weball/portPage.html?mmsi=" + datade[i].name + "'>详情页面</a></button>" +
            "<button style='margin-left:15px;'><a  href='" +  + "/weball/netDetail.html?name=" + datade[i].name + "'>港口网络</a></button>" + "<br>" + "<br>"
            + "</div>"
            + "</div>"
            + "</div>";    

        var popupElement = document.getElementById('popup2');
	    var popupLayer = new ol.Overlay({
		    element : popupElement,
		    positioning : 'bottom-center'
	        }); //需要将港口信息加入弹框中
        window.seamap.addOverlay(popupLayer);
        
        var layer = PortController.portLayer;
       /*  popupLayer.setPosition(feature.getGeometry().getCoordinates()); */
       var feature = PortController.portLayer.getSource().getFeatures()/* 获取该图层的featrue */
         PortController.portClick(feature[i], layer, popupLayer.getElement(), popupLayer);  
           console.log(feature[i]);
           
        
        





        }
        

    }



    render(){
        return (
            <div className="serachInput_box">
                <input id="searchportbyname" type="text" placeholder="请输入港口名称" ref="usersinput"/>
                <span className="searchInput_icon" onClick={this.SearchClickAn}></span>
                {/* 在render方法中使用Function.prototype.bind会在每次组件渲染时创建一个新的函数，可能会影响性能 */}
            </div>
        )
    }
}