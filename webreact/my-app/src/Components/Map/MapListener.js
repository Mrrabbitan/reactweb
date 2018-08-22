import $ from 'jquery';
//添加自定义组件
import simpleFeature from '../../Components/Basic/Map/Geometry/SimpleFeature';
import htmlTemplate from '../../Components/Basic/Map/Popup/HtmlTemplate';
import toolMap from '../../Components/Basic/Map/Other/ToolMap';
import  portAndBerthServer from '../../axios/portAndBerthServer';
import  mapEvent from "../../Components/Basic/Tool/event/MapEvent";
import Straitserver from '../../axios/straitserver';
import simplePolygon from '../../Components/Basic/Map/Geometry/simplePolygon'
import lineHtmlTemplate from '../../Components/Basic/Map/Geometry/LineHtmlTemplate';
import simpleLine from '../../Components/Basic/Map/Geometry/SimpleLine';
import shipDataLayer from './ShipDataLayer';
import simpleLayer from '../../Components/Basic/Map/Layer/SimpleLayer';
import seaareaServer from '../../axios/seaareaServer';
import GPS from '../Basic/Map/Other/geotrans';
import dischargeServer from '../../axios/dischargeServer';
import dischargetemplate from '../../Components/Basic/Map/Geometry/dischargetemplate'

class MapListener{
    constructor(state){
        this.mapObj = state;
        state.map.on('click', (this.clickSouth.bind(this)));
        state.map.on('moveend', (this.moveEnd.bind(this)));
        state.map.addControl(mapEvent.MousePosition());
        this.loadAllPort();
        this.loadStrait();
        this.loadRelation();
        this.shipDataLayer =  new shipDataLayer(state.map,state.straitsource);
        this.berthLayer = null;
        this.loadSeaArea();
        this.loadDischarge();
        this.clickSouth = null;
    }

    /***
     * 将全球港口的信息，添加到地图
     */
    loadAllPort(){
        var self = this;
        //加载全球港口数据
        portAndBerthServer.loadAllPort({},function(data){
            //"portid":10003,"portname":"Funafuti","country":"Tuvalu","latitudedecimal":-8.516666412,"longitudedecimal":179.216666666,"countrycode":"TUV"}
           
            data.data.data.forEach((item)=>{
                var disInfo = htmlTemplate.createIndexTemplate1(item);
                var coord = toolMap.transform(item.longitudedecimal,item.latitudedecimal);
                simpleFeature.createAndAddPortPointFeature(self.mapObj.portSource, "shipleavingport", disInfo, coord,item.portid);
            });
        });
    }
    /***
     * 加载全球海峡数据
     */
    loadStrait(){
        var self = this;
        //加载全球海峡数据
        Straitserver.loadallstrait({},function(data){
            data.data.forEach((item)=>{/* 循环取数据 */
                var lonlat = item.centPos;
                var lonlatdes = lonlat.substring(lonlat.indexOf("(")+1,lonlat.indexOf(")"));
                var lonlatfin=lonlatdes.split("\s");
                var lonlatfinins = lonlatfin[0].split(" ");
                /* var disInfo = htmlTemplate.createIndexTemplate1(item); */
                
                var area=item.regionText.split('|');
                var arr=[];
                area.forEach((item)=>{
                    var areaan = item.split(',');
                    var coord=toolMap.transform(areaan[0],areaan[1]);
                    arr.push(coord);
                    
                })
              
                simplePolygon.createAndAddMap(self.mapObj.straitsource,50,arr,'indexStrait');
               
            })
        })
    }
/* 
增加海区内容,将原始数据保存在public的json文件夹下，用于脚手架编译的访问

*/
        loadSeaArea(){
        let self = this;
        seaareaServer.loadAllSeaarea({},function(data){
            data.forEach((item)=>{
                let disInfo = htmlTemplate.createIndexTemplate1(item.name);
                let seaarea=item.multiGeometry;
                let border = seaarea.multiGeometry;
                let outlineborder = border[0].outerBoundaryIs[0].coordinates;
                let arr=[];
                let seaareaborder=outlineborder.split(',');
                for (var i=0;i<seaareaborder.length;i++){
                    var arrcode=[seaareaborder[i],seaareaborder[++i]];
                    var seaoutlinespot=GPS.gcj_encrypt(arrcode[0],arrcode[1])
                    var coord=toolMap.transform(seaoutlinespot[0],seaoutlinespot[1]);
                    arr.push(coord);
                }
              /*   console.log(outlineborder); */
                simplePolygon.createAndAddMap1(self.mapObj.seaareaSource, 50, arr,'indexSeaArea',disInfo);
            })
        })
    }

/* 

增加排放区内容,将原始数据保存在public的json文件夹下，用于脚手架编译后访问

*/
loadDischarge(){
    let self = this;
    dischargeServer.loadAlldisCharge({},function(data){
        data.forEach((item)=>{
            
            
            let area= item.area[0];
            let disarea = area.line;
            for(var i=0;i<disarea.length;){
                 let disInfo = htmlTemplate.createIndexTemplate1(item.name);
                let lon=disarea[i].lon;
                let lat=disarea[i].lat;
                var next = ++i;
                if(!disarea[next]){//判断最后为基数个点的时候，直接返回不用再加入点集内
                    return;
                } 
                let lon1=disarea[next].lon;
                let lat1=disarea[next].lat;
                let frompoint=toolMap.transform(lon,lat); 
                let topoint=toolMap.transform(lon1,lat1);
                 simpleLine.createAndAddSourceLine(disInfo,self.mapObj.dischargeSource,frompoint,topoint,'lineChoose','全球排放点内容');  
                
            }
        })
    })
}




    /***
     * 加载港口之间的关系网络图
     */
        loadRelation(){
        let self = this;
        portAndBerthServer.loadStraitRelation(function(data){
            
            //加载所有的港口
            data.portGird.map((item) => {
                var disInfo = lineHtmlTemplate.relationTemplate(item);
                var coord = toolMap.transform(item.longitudedecimal, item.latitudeDecimal);
                
                simpleFeature.createAndAddPointFeature(self.mapObj.relationSource, "shipleavingport", disInfo, coord);
            });
            //添加关系网络线
            data.relation.map((item) =>{
               let disInfo = lineHtmlTemplate.relationTemplate(item);
               let fromPoint = toolMap.transform(item.startlog,item.startlat);
               let toPoint = toolMap.transform(item.endlog,item.endlat);
               
               simpleLine.createAndAddSourceLine(disInfo,self.mapObj.relationSource,fromPoint,toPoint,"portline","关系网络线");
            })
        });
    }


    /* 增加弹窗出现的基本内容 点击港口图标显示港口标牌——————————————————————————————————————————————————————————*/
    clickSouth(evt) {
        var self = this;
        var coordinate = evt.coordinate;/* 声明点击后的坐标 */
        self.clickSouth = coordinate;
        var pixel = self.mapObj.map.getEventPixel(evt.originalEvent);
        var feature = self.mapObj.map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            if (layer == self.mapObj.portLayer) {
                //点击首页的港口图层
                self.portClick(feature, layer, self.mapObj.popupOverlay.getElement(), self.mapObj.popupOverlay);
                return "not todo";
            }else if (layer == self.mapObj.seaareaLayer) {
                //点击首页的港口图层
                self.portClick1(feature, layer, self.mapObj.popupOverlay.getElement(), self.mapObj.popupOverlay);
                return "not todo";
            } 
        })
        if (feature == null) {
            self.mapObj.popupOverlay.setPosition(undefined);
            $("#popup-content").html("");
            $("#popup").removeClass('popup-seaarea');
        }
    }
    //出现弹窗
    portClick(feature, layer, element, popLayer) {
        var self = this;
        var portId=feature.get('portId');
        $("#popup-content").html(feature.get('disInfo'));
        popLayer.setPosition(feature.getGeometry().getCoordinates());
        $("#popup").removeClass('popup-seaarea');
        if(portId){
            var berthLayer=self.berthLayer;
            if(!berthLayer){
                berthLayer= simpleLayer.sourceLayer(self.mapObj.map,true);
                self.berthLayer=berthLayer;
            }
            //console.log(berthLayer);
            berthLayer[0].clear();
            portAndBerthServer.getBerthByPortId({portId},function(data){
               
                $.each(data.data,function(i,item){
                   
                    var region=item.regionMap;
                    var arr=[];
                    $.each(region,function(j,item2){
                        arr.push(toolMap.transform(item2.lon,item2.lat));
                    });
                    simplePolygon.createAndAddMap(berthLayer[0],48,arr);
                });
            })
        }
    };

    portClick1(feature, layer, element, popLayer) {
        $("#popup-content").html(feature.G.disinfo);
        $("#popup").addClass('popup-seaarea');
        popLayer.setPosition(this.clickSouth);
        
    };
    
    moveEnd(evt){
        var self = this;
        var newZoomLevel = self.mapObj.map.getView().getZoom();
        if(newZoomLevel > 6){
            self.mapObj.portLayer.setVisible(true);
        }else if(newZoomLevel < 6){
            self.mapObj.portLayer.setVisible(false);
        }
    }
    //数据图层画图操作
    getDataLayer(data){
        console.time("test");
        this.shipDataLayer.renderLayer(data);
        console.timeEnd("test")
    }

    clearCanvasLayer(){
        this.shipDataLayer.clearCanvasLayer();
    }
}
export default MapListener;