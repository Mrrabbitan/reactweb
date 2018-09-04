import React,{Component} from 'react';
import $ from 'jquery';
import portAndBerthServer from '../../../axios/portAndBerthServer';
import toolMap from '../../../Basic/Map/Other/ToolMap';
import lineHtmlTemplate from '../../../Basic/Map/Geometry/LineHtmlTemplate';
import simpleLine from '../../../Basic/Map/Geometry/SimpleLine';

class portmaplistener {
    constructor(state){
        this.portMapObj=state;
    }


     /**
     * 显示 航运网络图层 隐藏 原始图层
     */
    showAllLayer(){
        this.loadRelation()
        this.portMapObj.portlayer_show.setVisible(true);
        const pArr= Object.keys(this.portMapObj.mapObj).map(key=>({
            key,
            value:this.portMapObj.mapObj[key]
        }));
        const prArr = Object.keys(this.portMapObj).map(key=>({
            key,
            value:this.portMapObj[key]
        }));
        for(var i=0;i<pArr.length;i++){
            if(pArr[i].key.indexOf("layer")>=0 || pArr[i].key.indexOf("Layer")>=0){
                this.portMapObj.mapObj[pArr[i].key].setVisible(false);
            }
        }
        for(var j=0;j<prArr.length;j++){
            if(prArr[j].key.indexOf("layer")>=0 || prArr[j].key.indexOf("Layer")>=0){
                this.portMapObj[prArr[j].key].setVisible(true);
            }
        }
        
    }

     /**
      * 隐藏 航运网络图层 显示 原始图层
      */
     hideAllLayer(){
        this.portMapObj.portlayer_show.setVisible(false);
        const pArr= Object.keys(this.portMapObj.mapObj).map(key=>({
            key,
            value:this.portMapObj.mapObj[key]
        }));
        for(var i=0;i<pArr.length;i++){
            if(pArr[i].key.indexOf("layer")>=0 || pArr[i].key.indexOf("Layer")>=0){
                this.portMapObj.mapObj[pArr[i].key].setVisible(true);
            }
        }
        const prArr = Object.keys(this.portMapObj).map(key=>({
            key,
            value:this.portMapObj[key]
        }));
        for(var j=0;j<prArr.length;j++){
            if(prArr[j].key.indexOf("layer")>=0 || prArr[j].key.indexOf("Layer")>=0){
                this.portMapObj[prArr[j].key].setVisible(false);
            }
        }
     }
 /***
     * 加载港口之间的关系网络图
     */
    loadRelation() {
        let self = this;
        portAndBerthServer.loadStraitRelation(function (data) {
            //加载所有的港口
           /* data.portGird.map((item) => {
                var disInfo = lineHtmlTemplate.relationTemplate(item);
                var coord = toolMap.transform(item.longitudedecimal, item.latitudeDecimal);

                simpleFeature.createAndAddPointFeature(self.mapObj.relationSource, "shipleavingport", disInfo, coord);
            });*/
            //添加关系网络线
            data.relation.map((item) => {
                let disInfo = lineHtmlTemplate.relationTemplate(item);
                let fromPoint = toolMap.transform(item.startlog, item.startlat);
                let toPoint = toolMap.transform(item.endlog, item.endlat);
                simpleLine.createAndAddSourceLine(disInfo, self.portMapObj.relationSource, fromPoint, toPoint, "portline", "关系网络线");
            })
        });
    }
    

}

export default portmaplistener