class Server {
    constructor() {
        this.IP = "http://192.168.11.202:9072/";
        //http请求地址
        //殷朝宇
       /*  this.portAddress = "http://192.168.11.134:9072/"; */
        //张攀凯
        /*  this.portAddress = "http://192.168.11.202:7075/"; */
        //服务器
         /* this.portAddress = "http://192.168.11.142:7075/"; */
        //张方宇
        this.portAddress = "http://192.168.11.198:9072/";
        //地图地址
        this.webAddress = "http://192.168.11.140:2010";
        //ws_Mosaic地址
        this.mosaicAddress = this.webAddress + "/geoserver/ws_Mosaic/wms";

        this.portAddress = "http://192.168.11.134:9072/";
    }
    getUrlParms(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)
        return unescape(r[2]);
        return null;
    }
    

}

export default new Server();