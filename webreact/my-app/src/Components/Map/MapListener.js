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
import seaareaServer from '../../axios/seaareaServer';
class MapListener{

    constructor(state){
        this.mapObj = state;
        state.map.on('click', (this.clickSouth.bind(this)));
        state.map.on('moveend', (this.moveEnd.bind(this)));
        state.map.addControl(mapEvent.MousePosition());
        this.loadAllPort();
        this.loadStrait();
        this.loadRelation();
        this.loadSeaArea();
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
                simpleFeature.createAndAddPointFeature(self.mapObj.portSource, "shipleavingport", disInfo, coord);
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
增加港区内容

*/
        loadSeaArea(){
        let self = this;
        seaareaServer.loadAllSeaarea({},function(data){
            data.data.forEach((item)=>{
                let seaarea=item.multiGeometry;
                let border = seaarea.multiGeometry;
                let outlineborder = border[0].outerBoundaryIs[0].coordinates;
                let arr=[];
                let seaareaborder=outlineborder.split(',');
                for (var i=0;i<seaareaborder.length;i++){
                    var arrcode=[seaareaborder[i],seaareaborder[++i]];
                    var coord=toolMap.transform(arrcode[0],arrcode[1]);
                    arr.push(coord);
                    
                }
                /* console.log(arr); */
                simplePolygon.createAndAddMap1(self.mapObj.seaareaSource, 50, arr,'indexSeaArea');
                
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
        var pixel = self.mapObj.map.getEventPixel(evt.originalEvent);
        var feature = self.mapObj.map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            if (layer == self.mapObj.portLayer) {
                //点击首页的港口图层
                self.portClick(feature, layer, self.mapObj.popupOverlay.getElement(), self.mapObj.popupOverlay);
                return "not todo";
            }
        })
        if (feature == null) {
            self.mapObj.popupOverlay.setPosition(undefined);
            $("#popup-content").html("");
        }
    }
    //出现弹窗
    portClick(feature, layer, element, popLayer) {
        $("#popup-content").html(feature.get('disInfo'));
        popLayer.setPosition(feature.getGeometry().getCoordinates());
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
}
export default MapListener;