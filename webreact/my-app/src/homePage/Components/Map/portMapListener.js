import React,{Component} from 'react';
import $ from 'jquery';

class portmaplistener {
    constructor(state){
        this.portMapObj=state;
    }


     /**
     * 显示 钢运网络图层
     */
    showAllLayer(){
        this.portMapObj.portlayer_show.setVisible(true);
        // this.portMapObj.mapObj.layer_custom_dayan.setVisible(false);
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
      * 隐藏 航运网络图层
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
     }

    

}

export default portmaplistener