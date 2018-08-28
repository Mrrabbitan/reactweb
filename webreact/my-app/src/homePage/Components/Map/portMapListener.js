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
    }

     /**
      * 隐藏 航运网络图层
      */
     hideAllLayer(){
        this.portMapObj.portlayer_show.setVisible(false);
     }

    

}

export default portmaplistener