import axios from "axios";
import sever from "../Config/globaldefine";

const portAndBerthService = {
 /***
     * 加载全球主要港口
     * @param params
     * @param callback
     */
    loadInportentPort: function(params, callback) {
        /*setTimeout(function(){
            var a = {data:[{"country":"CN","grid_pos":"121.37180328369139,31.551622958913143|121.32167816162108,31.479623233453637|121.4919662475586,31.218086583475127|121.8174362182617,31.303195078289704|121.79752349853514,31.40874013690849|121.55101776123047,31.572685550720422|121.43291473388672,31.615965936476073|121.37386322021484,31.55513372117204|121.37180328369139,31.551622958913143","mt_pos":"121.601/31.381445","country_english_name":"China","name":"shanghai","port_id":"12982","scale":"very large","country_chinese_name":"中国","port_chaname":"上海港","type":"port","port_continent":"亚洲"},{"country":"AR","grid_pos":"-60.02655029296875,-33.45869064331055|-60.037193298339844,-33.45457077026367|-60.059165954589844,-33.444786071777344|-60.06019592285156,-33.444271087646484|-60.06019592285156,-33.44358444213867|-60.058135986328125,-33.44306945800781|-60.05779266357422,-33.44306945800781|-60.026206970214844,-33.45817565917969|-60.02586364746094,-33.45834732055664|-60.02586364746094,-33.458518981933594|-60.026206970214844,-33.45869064331055|-60.02655029296875,-33.45869064331055","mt_pos":"-59.99561/-33.480315","country_english_name":"Argentina","name":"ramallo","port_id":"11682","scale":"small","country_chinese_name":"阿根廷","port_chaname":"拉马约","type":"port","port_continent":"南美洲"}]}
            callback(a);
        },300)*/
        axios
            .get(sever.portAddress + "shiptail/service/portInfo/getImportentPort", params)
            .then(function(res) {
                callback(res.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    /***     * 加载全球港口
     * @param params
     * @param callback
     */
    loadAllPort: function(params, callback) {
        /*setTimeout(function(){
            var a = {data:[{"country":"CN","grid_pos":"121.37180328369139,31.551622958913143|121.32167816162108,31.479623233453637|121.4919662475586,31.218086583475127|121.8174362182617,31.303195078289704|121.79752349853514,31.40874013690849|121.55101776123047,31.572685550720422|121.43291473388672,31.615965936476073|121.37386322021484,31.55513372117204|121.37180328369139,31.551622958913143","mt_pos":"121.601/31.381445","country_english_name":"China","name":"shanghai","port_id":"12982","scale":"very large","country_chinese_name":"中国","port_chaname":"上海港","type":"port","port_continent":"亚洲"},{"country":"AR","grid_pos":"-60.02655029296875,-33.45869064331055|-60.037193298339844,-33.45457077026367|-60.059165954589844,-33.444786071777344|-60.06019592285156,-33.444271087646484|-60.06019592285156,-33.44358444213867|-60.058135986328125,-33.44306945800781|-60.05779266357422,-33.44306945800781|-60.026206970214844,-33.45817565917969|-60.02586364746094,-33.45834732055664|-60.02586364746094,-33.458518981933594|-60.026206970214844,-33.45869064331055|-60.02655029296875,-33.45869064331055","mt_pos":"-59.99561/-33.480315","country_english_name":"Argentina","name":"ramallo","port_id":"11682","scale":"small","country_chinese_name":"阿根廷","port_chaname":"拉马约","type":"port","port_continent":"南美洲"}]}
            callback(a);
        },300)*/
       axios
        .get(sever.portAddress + "shiptail/service/portInfo/getAllPort", params)
        .then(function(res) {           
          callback(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    /**
     * 全球实时船舶统计
     * @param params
     * @param callback
     * @author zhangxc
     */
    getRealtimeShipStatistics: function(params, callback) {
        /*setTimeout(function(){
            var a = {"data":{"richSapacity":{"HXP":6874952.0,"QTC":657622.0,"GZC":26712.0,"QTGHC":14565.0,"YL":3.5745016E7,"YHQ":1469284.0,"JZXC":2796918.0,"PTHC":2521783.0,"LCC":29871.0,"SHC":4.2967748E7},"richShip":{"HXP":212.0,"QTC":21.0,"GZC":3.0,"QTGHC":2.0,"YL":344.0,"YHQ":37.0,"JZXC":55.0,"PTHC":227.0,"LCC":4.0,"SHC":541.0},"workShip":{"YHQ":1474,"HXP":3865,"YL":4208,"QTYT":24,"SHC":9256,"PTHC":5562,"JZXC":4547,"LCC":488,"GZC":1643,"QTGHC":227,"OTHER":173946,"ALL":205240,"UpdateTime":1533792725426}},"status":10000}
            callback(a);
        },300)*/
        axios.get(sever.portAddress + "/shiptail/service/shipInfo/getRealtimeShipStatistics", {params})
            .then(function(res) {
                callback(res.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },

    /**
     * 加载港口关系网络
     * @param params
     * @param callback
     * @author zhangxc
     */
    loadStraitRelation: function(callback) {
        /*setTimeout(function(){
            var a = {"data":{"richSapacity":{"HXP":6874952.0,"QTC":657622.0,"GZC":26712.0,"QTGHC":14565.0,"YL":3.5745016E7,"YHQ":1469284.0,"JZXC":2796918.0,"PTHC":2521783.0,"LCC":29871.0,"SHC":4.2967748E7},"richShip":{"HXP":212.0,"QTC":21.0,"GZC":3.0,"QTGHC":2.0,"YL":344.0,"YHQ":37.0,"JZXC":55.0,"PTHC":227.0,"LCC":4.0,"SHC":541.0},"workShip":{"YHQ":1474,"HXP":3865,"YL":4208,"QTYT":24,"SHC":9256,"PTHC":5562,"JZXC":4547,"LCC":488,"GZC":1643,"QTGHC":227,"OTHER":173946,"ALL":205240,"UpdateTime":1533792725426}},"status":10000}
            callback(a);
        },300)*/
        axios.get(sever.portAddress + "/shiptail/service/portInfo/getStraitRelation")
            .then(function(res) {
                callback(res.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    
    getBerthByPortId: function(params, callback) {
        axios.get(sever.portAddress + "/shiptail/service/berthInfo/getBerthByPortId", {params})
            .then(function(res) {
                callback(res.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    /**
     * 港口图表请求
     */
    getPortbelongContenent: function(params,callback){
        setTimeout(function(){
            var a = {"data":{"continentPort":[{"count":956},{"continent_name":"欧洲","count":1840},{"continent_name":"北美洲","count":971},{"continent_name":"南美洲","count":456},{"continent_name":"亚洲","count":1488},{"continent_name":"大洋洲","count":286},{"continent_name":"非洲","count":412}],"portStatus":null,"majorEconomies":null},"status":10000}
             callback(a);
        },300)
        /*axios.get(sever.portAddress + "shiptail/service/portInfo/getContinentPortDistribution",{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log(error);
        });*/
    },
    /**
     * 泊位图表请求
     */
    getWholeWorldBerth(params,callback){
        // setTimeout(function(){
        //  var a = {"berthDistribution":[[{"country":"乌克兰"},{"count":26,"name":"集装箱"},{"count":80,"name":"化学品"},{"count":7,"name":"lpg"},{"count":1241,"name":"石油"},{"count":1443,"name":"干散货"}],[{"country":"伊拉克"},{"count":5,"name":"其他"},{"count":11,"name":"化学品"},{"count":2,"name":"lpg"},{"count":6,"name":"集装箱"},{"count":1245,"name":"干散货"},{"count":1254,"name":"石油"}],[{"country":"加拿大"},{"count":1326,"name":"石油"},{"count":245,"name":"化学品"},{"count":1,"name":"lng"},{"count":64,"name":"集装箱"},{"count":1816,"name":"干散货"}],[{"country":"印度"},{"count":20,"name":"lpg"},{"count":62,"name":"集装箱"},{"count":1476,"name":"干散货"},{"count":1297,"name":"石油"},{"count":182,"name":"化学品"},{"count":5,"name":"lng"}],[{"country":"墨西哥"},{"count":111,"name":"化学品"},{"count":1260,"name":"石油"},{"count":50,"name":"集装箱"},{"count":3,"name":"lng"},{"count":1340,"name":"干散货"},{"count":6,"name":"lpg"}],[{"country":"澳大利亚"},{"count":1552,"name":"干散货"},{"count":69,"name":"集装箱"},{"count":1306,"name":"石油"},{"count":10,"name":"lpg"},{"count":10,"name":"lng"},{"count":171,"name":"化学品"}],[{"country":"爱尔兰"},{"count":60,"name":"化学品"},{"count":2,"name":"lpg"},{"count":1244,"name":"石油"},{"count":1288,"name":"干散货"},{"count":11,"name":"集装箱"}],[{"country":"爱沙尼亚"},{"count":1,"name":"lpg"},{"count":9,"name":"集装箱"},{"count":39,"name":"化学品"},{"count":1340,"name":"干散货"},{"count":1231,"name":"石油"}],[{"country":"科威特"},{"count":1,"name":"lng"},{"count":8,"name":"集装箱"},{"count":2,"name":"lpg"},{"count":10,"name":"化学品"},{"count":2,"name":"其他"},{"count":1259,"name":"干散货"},{"count":1251,"name":"石油"}],[{"country":"美国"},{"count":520,"name":"集装箱"},{"count":1209,"name":"化学品"},{"count":4,"name":"lng"},{"count":46,"name":"lpg"},{"count":2091,"name":"石油"},{"count":2941,"name":"干散货"}]],"berthCount":[{"count":14217,"name":"化学品","useCount":0},{"count":5118,"name":"集装箱","useCount":0},{"count":19813,"name":"干散货","useCount":0},{"count":749,"name":"lpg","useCount":0},{"count":36,"name":"其他","useCount":0},{"count":7375,"name":"石油","useCount":0},{"count":181,"name":"lng","useCount":0}]}
        //      callback(a);
        //  },300)
       axios.get(sever.portAddress + "portInfo/getWholeWorldBerth",{params})
        // axios.get(sever.portAddress + "shiptail/service/portInfo/getWholeWorldBerth",{params})
            .then(function(res){
                callback(res.data);
                console.log(res)
            })
            .catch(function(error){
                console.log(error);
            })
    },
    /*港区图表*/
    getPortDistribution(params,callback){
        /*setTimeout(function(){
            var a = [[{"country":"中国"},{"count":85,"facility_type":"Both"},{"count":473,"facility_type":"Tanker"},{"count":1028,"facility_type":"Dry Cargo"}],[{"country":"法国"},{"count":218,"facility_type":"Dry Cargo"},{"count":89,"facility_type":"Tanker"},{"count":32,"facility_type":"Both"}],[{"country":"挪威"},{"count":300,"facility_type":"Dry Cargo"},{"count":92,"facility_type":"Tanker"},{"count":52,"facility_type":"Both"}],[{"country":"美国"},{"count":209,"facility_type":"Both"},{"count":1053,"facility_type":"Dry Cargo"},{"count":709,"facility_type":"Tanker"}],[{"country":"日本"},{"count":705,"facility_type":"Dry Cargo"},{"count":321,"facility_type":"Tanker"},{"count":93,"facility_type":"Both"}],[{"country":"加拿大"},{"count":312,"facility_type":"Dry Cargo"},{"count":118,"facility_type":"Tanker"},{"count":51,"facility_type":"Both"}],[{"country":"德国"},{"count":286,"facility_type":"Dry Cargo"},{"count":83,"facility_type":"Tanker"},{"count":29,"facility_type":"Both"}],[{"country":"印度尼西亚"},{"count":184,"facility_type":"Dry Cargo"},{"count":211,"facility_type":"Tanker"},{"count":35,"facility_type":"Both"}],[{"country":"英国"},{"count":391,"facility_type":"Dry Cargo"},{"count":172,"facility_type":"Tanker"},{"count":43,"facility_type":"Both"}],[{"country":"意大利"},{"count":28,"facility_type":"Both"},{"count":229,"facility_type":"Dry Cargo"},{"count":117,"facility_type":"Tanker"}]];
            callback(a);
        },300);*/
        axios.get(sever.portAddress + "portInfo/getPortDistribution",{params})
         .then(function(res){
         callback(res.data);
             console.log(res)
         })
         .catch(function(error){
         console.log(error);
         });
    },
    /**
     * 港口基本信息
     * */
    selectBasicInfo(params,callback){
        /*setTimeout(function(){
         var a = [[{"country":"中国"},{"count":85,"facility_type":"Both"},{"count":473,"facility_type":"Tanker"},{"count":1028,"facility_type":"Dry Cargo"}],[{"country":"法国"},{"count":218,"facility_type":"Dry Cargo"},{"count":89,"facility_type":"Tanker"},{"count":32,"facility_type":"Both"}],[{"country":"挪威"},{"count":300,"facility_type":"Dry Cargo"},{"count":92,"facility_type":"Tanker"},{"count":52,"facility_type":"Both"}],[{"country":"美国"},{"count":209,"facility_type":"Both"},{"count":1053,"facility_type":"Dry Cargo"},{"count":709,"facility_type":"Tanker"}],[{"country":"日本"},{"count":705,"facility_type":"Dry Cargo"},{"count":321,"facility_type":"Tanker"},{"count":93,"facility_type":"Both"}],[{"country":"加拿大"},{"count":312,"facility_type":"Dry Cargo"},{"count":118,"facility_type":"Tanker"},{"count":51,"facility_type":"Both"}],[{"country":"德国"},{"count":286,"facility_type":"Dry Cargo"},{"count":83,"facility_type":"Tanker"},{"count":29,"facility_type":"Both"}],[{"country":"印度尼西亚"},{"count":184,"facility_type":"Dry Cargo"},{"count":211,"facility_type":"Tanker"},{"count":35,"facility_type":"Both"}],[{"country":"英国"},{"count":391,"facility_type":"Dry Cargo"},{"count":172,"facility_type":"Tanker"},{"count":43,"facility_type":"Both"}],[{"country":"意大利"},{"count":28,"facility_type":"Both"},{"count":229,"facility_type":"Dry Cargo"},{"count":117,"facility_type":"Tanker"}]];
         callback(a);
         },300);*/
        axios.get(sever.portAddress + "portInfo/selectBasicInfo/"+params.id)
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log(error);
            });
    },
    /**
     * 港口港区信息
     * */
    selectTerminalInfo(params,callback){
        /*setTimeout(function(){
         var a = [[{"country":"中国"},{"count":85,"facility_type":"Both"},{"count":473,"facility_type":"Tanker"},{"count":1028,"facility_type":"Dry Cargo"}],[{"country":"法国"},{"count":218,"facility_type":"Dry Cargo"},{"count":89,"facility_type":"Tanker"},{"count":32,"facility_type":"Both"}],[{"country":"挪威"},{"count":300,"facility_type":"Dry Cargo"},{"count":92,"facility_type":"Tanker"},{"count":52,"facility_type":"Both"}],[{"country":"美国"},{"count":209,"facility_type":"Both"},{"count":1053,"facility_type":"Dry Cargo"},{"count":709,"facility_type":"Tanker"}],[{"country":"日本"},{"count":705,"facility_type":"Dry Cargo"},{"count":321,"facility_type":"Tanker"},{"count":93,"facility_type":"Both"}],[{"country":"加拿大"},{"count":312,"facility_type":"Dry Cargo"},{"count":118,"facility_type":"Tanker"},{"count":51,"facility_type":"Both"}],[{"country":"德国"},{"count":286,"facility_type":"Dry Cargo"},{"count":83,"facility_type":"Tanker"},{"count":29,"facility_type":"Both"}],[{"country":"印度尼西亚"},{"count":184,"facility_type":"Dry Cargo"},{"count":211,"facility_type":"Tanker"},{"count":35,"facility_type":"Both"}],[{"country":"英国"},{"count":391,"facility_type":"Dry Cargo"},{"count":172,"facility_type":"Tanker"},{"count":43,"facility_type":"Both"}],[{"country":"意大利"},{"count":28,"facility_type":"Both"},{"count":229,"facility_type":"Dry Cargo"},{"count":117,"facility_type":"Tanker"}]];
         callback(a);
         },300);*/
        axios.get(sever.portAddress + "portInfo/selectTerminalInfo",{params})
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log(error);
            });
    },
    /**
     * 港口泊位分类
     * */
    selectBerthlGroup(params,callback){
        /*setTimeout(function(){
         var a = [[{"country":"中国"},{"count":85,"facility_type":"Both"},{"count":473,"facility_type":"Tanker"},{"count":1028,"facility_type":"Dry Cargo"}],[{"country":"法国"},{"count":218,"facility_type":"Dry Cargo"},{"count":89,"facility_type":"Tanker"},{"count":32,"facility_type":"Both"}],[{"country":"挪威"},{"count":300,"facility_type":"Dry Cargo"},{"count":92,"facility_type":"Tanker"},{"count":52,"facility_type":"Both"}],[{"country":"美国"},{"count":209,"facility_type":"Both"},{"count":1053,"facility_type":"Dry Cargo"},{"count":709,"facility_type":"Tanker"}],[{"country":"日本"},{"count":705,"facility_type":"Dry Cargo"},{"count":321,"facility_type":"Tanker"},{"count":93,"facility_type":"Both"}],[{"country":"加拿大"},{"count":312,"facility_type":"Dry Cargo"},{"count":118,"facility_type":"Tanker"},{"count":51,"facility_type":"Both"}],[{"country":"德国"},{"count":286,"facility_type":"Dry Cargo"},{"count":83,"facility_type":"Tanker"},{"count":29,"facility_type":"Both"}],[{"country":"印度尼西亚"},{"count":184,"facility_type":"Dry Cargo"},{"count":211,"facility_type":"Tanker"},{"count":35,"facility_type":"Both"}],[{"country":"英国"},{"count":391,"facility_type":"Dry Cargo"},{"count":172,"facility_type":"Tanker"},{"count":43,"facility_type":"Both"}],[{"country":"意大利"},{"count":28,"facility_type":"Both"},{"count":229,"facility_type":"Dry Cargo"},{"count":117,"facility_type":"Tanker"}]];
         callback(a);
         },300);*/
        axios.get(sever.portAddress + "portInfo/selectBerthlGroup",{params})
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log(error);
            });
    },
    /* *
     * 港口泊位类型统计
     * */
    selectBerthStatistics(params,callback){
        /*setTimeout(function(){
         var a = [[{"country":"中国"},{"count":85,"facility_type":"Both"},{"count":473,"facility_type":"Tanker"},{"count":1028,"facility_type":"Dry Cargo"}],[{"country":"法国"},{"count":218,"facility_type":"Dry Cargo"},{"count":89,"facility_type":"Tanker"},{"count":32,"facility_type":"Both"}],[{"country":"挪威"},{"count":300,"facility_type":"Dry Cargo"},{"count":92,"facility_type":"Tanker"},{"count":52,"facility_type":"Both"}],[{"country":"美国"},{"count":209,"facility_type":"Both"},{"count":1053,"facility_type":"Dry Cargo"},{"count":709,"facility_type":"Tanker"}],[{"country":"日本"},{"count":705,"facility_type":"Dry Cargo"},{"count":321,"facility_type":"Tanker"},{"count":93,"facility_type":"Both"}],[{"country":"加拿大"},{"count":312,"facility_type":"Dry Cargo"},{"count":118,"facility_type":"Tanker"},{"count":51,"facility_type":"Both"}],[{"country":"德国"},{"count":286,"facility_type":"Dry Cargo"},{"count":83,"facility_type":"Tanker"},{"count":29,"facility_type":"Both"}],[{"country":"印度尼西亚"},{"count":184,"facility_type":"Dry Cargo"},{"count":211,"facility_type":"Tanker"},{"count":35,"facility_type":"Both"}],[{"country":"英国"},{"count":391,"facility_type":"Dry Cargo"},{"count":172,"facility_type":"Tanker"},{"count":43,"facility_type":"Both"}],[{"country":"意大利"},{"count":28,"facility_type":"Both"},{"count":229,"facility_type":"Dry Cargo"},{"count":117,"facility_type":"Tanker"}]];
         callback(a);
         },300);*/
        axios.get(sever.portAddress + "portInfo/selectBerthStatistics/"+params.id)
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log(error);
            });
    },
    /**
     * 港口泊位类型统计
     * */
    selectShipStatus(params,callback){
        /*setTimeout(function(){
         var a = [[{"country":"中国"},{"count":85,"facility_type":"Both"},{"count":473,"facility_type":"Tanker"},{"count":1028,"facility_type":"Dry Cargo"}],[{"country":"法国"},{"count":218,"facility_type":"Dry Cargo"},{"count":89,"facility_type":"Tanker"},{"count":32,"facility_type":"Both"}],[{"country":"挪威"},{"count":300,"facility_type":"Dry Cargo"},{"count":92,"facility_type":"Tanker"},{"count":52,"facility_type":"Both"}],[{"country":"美国"},{"count":209,"facility_type":"Both"},{"count":1053,"facility_type":"Dry Cargo"},{"count":709,"facility_type":"Tanker"}],[{"country":"日本"},{"count":705,"facility_type":"Dry Cargo"},{"count":321,"facility_type":"Tanker"},{"count":93,"facility_type":"Both"}],[{"country":"加拿大"},{"count":312,"facility_type":"Dry Cargo"},{"count":118,"facility_type":"Tanker"},{"count":51,"facility_type":"Both"}],[{"country":"德国"},{"count":286,"facility_type":"Dry Cargo"},{"count":83,"facility_type":"Tanker"},{"count":29,"facility_type":"Both"}],[{"country":"印度尼西亚"},{"count":184,"facility_type":"Dry Cargo"},{"count":211,"facility_type":"Tanker"},{"count":35,"facility_type":"Both"}],[{"country":"英国"},{"count":391,"facility_type":"Dry Cargo"},{"count":172,"facility_type":"Tanker"},{"count":43,"facility_type":"Both"}],[{"country":"意大利"},{"count":28,"facility_type":"Both"},{"count":229,"facility_type":"Dry Cargo"},{"count":117,"facility_type":"Tanker"}]];
         callback(a);
         },300);*/
        axios.get(sever.portAddress + "portInfo/selectShipStatus",{params})
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log(error);
            });
    },

    /**
     * 港口每月服务时长统计
     * */
    getPortServiceTimeOfDay(params,callback){
        /*setTimeout(function(){
         var a = [[{"country":"中国"},{"count":85,"facility_type":"Both"},{"count":473,"facility_type":"Tanker"},{"count":1028,"facility_type":"Dry Cargo"}],[{"country":"法国"},{"count":218,"facility_type":"Dry Cargo"},{"count":89,"facility_type":"Tanker"},{"count":32,"facility_type":"Both"}],[{"country":"挪威"},{"count":300,"facility_type":"Dry Cargo"},{"count":92,"facility_type":"Tanker"},{"count":52,"facility_type":"Both"}],[{"country":"美国"},{"count":209,"facility_type":"Both"},{"count":1053,"facility_type":"Dry Cargo"},{"count":709,"facility_type":"Tanker"}],[{"country":"日本"},{"count":705,"facility_type":"Dry Cargo"},{"count":321,"facility_type":"Tanker"},{"count":93,"facility_type":"Both"}],[{"country":"加拿大"},{"count":312,"facility_type":"Dry Cargo"},{"count":118,"facility_type":"Tanker"},{"count":51,"facility_type":"Both"}],[{"country":"德国"},{"count":286,"facility_type":"Dry Cargo"},{"count":83,"facility_type":"Tanker"},{"count":29,"facility_type":"Both"}],[{"country":"印度尼西亚"},{"count":184,"facility_type":"Dry Cargo"},{"count":211,"facility_type":"Tanker"},{"count":35,"facility_type":"Both"}],[{"country":"英国"},{"count":391,"facility_type":"Dry Cargo"},{"count":172,"facility_type":"Tanker"},{"count":43,"facility_type":"Both"}],[{"country":"意大利"},{"count":28,"facility_type":"Both"},{"count":229,"facility_type":"Dry Cargo"},{"count":117,"facility_type":"Tanker"}]];
         callback(a);
         },300);*/
        axios.get(sever.portAddress + "portInfo/getPortServiceTimeOfDay",{params})
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log(error);
            });
    },
    /**
     * 港口每年服务时长统计
     * */
    getPortServiceTimeOfYear(params,callback){
        /*setTimeout(function(){
         var a = [[{"country":"中国"},{"count":85,"facility_type":"Both"},{"count":473,"facility_type":"Tanker"},{"count":1028,"facility_type":"Dry Cargo"}],[{"country":"法国"},{"count":218,"facility_type":"Dry Cargo"},{"count":89,"facility_type":"Tanker"},{"count":32,"facility_type":"Both"}],[{"country":"挪威"},{"count":300,"facility_type":"Dry Cargo"},{"count":92,"facility_type":"Tanker"},{"count":52,"facility_type":"Both"}],[{"country":"美国"},{"count":209,"facility_type":"Both"},{"count":1053,"facility_type":"Dry Cargo"},{"count":709,"facility_type":"Tanker"}],[{"country":"日本"},{"count":705,"facility_type":"Dry Cargo"},{"count":321,"facility_type":"Tanker"},{"count":93,"facility_type":"Both"}],[{"country":"加拿大"},{"count":312,"facility_type":"Dry Cargo"},{"count":118,"facility_type":"Tanker"},{"count":51,"facility_type":"Both"}],[{"country":"德国"},{"count":286,"facility_type":"Dry Cargo"},{"count":83,"facility_type":"Tanker"},{"count":29,"facility_type":"Both"}],[{"country":"印度尼西亚"},{"count":184,"facility_type":"Dry Cargo"},{"count":211,"facility_type":"Tanker"},{"count":35,"facility_type":"Both"}],[{"country":"英国"},{"count":391,"facility_type":"Dry Cargo"},{"count":172,"facility_type":"Tanker"},{"count":43,"facility_type":"Both"}],[{"country":"意大利"},{"count":28,"facility_type":"Both"},{"count":229,"facility_type":"Dry Cargo"},{"count":117,"facility_type":"Tanker"}]];
         callback(a);
         },300);*/
        axios.get(sever.portAddress + "portInfo/getPortServiceTimeOfYear",{params})
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log(error);
            });
    },

    /**
     * 港口停靠船舶统计
     * */
    getPortHistoryShip(params,callback){
        /*setTimeout(function(){
         var a = [[{"country":"中国"},{"count":85,"facility_type":"Both"},{"count":473,"facility_type":"Tanker"},{"count":1028,"facility_type":"Dry Cargo"}],[{"country":"法国"},{"count":218,"facility_type":"Dry Cargo"},{"count":89,"facility_type":"Tanker"},{"count":32,"facility_type":"Both"}],[{"country":"挪威"},{"count":300,"facility_type":"Dry Cargo"},{"count":92,"facility_type":"Tanker"},{"count":52,"facility_type":"Both"}],[{"country":"美国"},{"count":209,"facility_type":"Both"},{"count":1053,"facility_type":"Dry Cargo"},{"count":709,"facility_type":"Tanker"}],[{"country":"日本"},{"count":705,"facility_type":"Dry Cargo"},{"count":321,"facility_type":"Tanker"},{"count":93,"facility_type":"Both"}],[{"country":"加拿大"},{"count":312,"facility_type":"Dry Cargo"},{"count":118,"facility_type":"Tanker"},{"count":51,"facility_type":"Both"}],[{"country":"德国"},{"count":286,"facility_type":"Dry Cargo"},{"count":83,"facility_type":"Tanker"},{"count":29,"facility_type":"Both"}],[{"country":"印度尼西亚"},{"count":184,"facility_type":"Dry Cargo"},{"count":211,"facility_type":"Tanker"},{"count":35,"facility_type":"Both"}],[{"country":"英国"},{"count":391,"facility_type":"Dry Cargo"},{"count":172,"facility_type":"Tanker"},{"count":43,"facility_type":"Both"}],[{"country":"意大利"},{"count":28,"facility_type":"Both"},{"count":229,"facility_type":"Dry Cargo"},{"count":117,"facility_type":"Tanker"}]];
         callback(a);
         },300);*/
        axios.get(sever.portAddress + "/portInfo/getPortHistoryShip",{params})
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log(error);
            });
    },
    /*
    * 港口详情设备数
    * */
    getPortFaclityStatistics(params,callback){
        /*setTimeout(function(){
         var a = [[{"country":"中国"},{"count":85,"facility_type":"Both"},{"count":473,"facility_type":"Tanker"},{"count":1028,"facility_type":"Dry Cargo"}],[{"country":"法国"},{"count":218,"facility_type":"Dry Cargo"},{"count":89,"facility_type":"Tanker"},{"count":32,"facility_type":"Both"}],[{"country":"挪威"},{"count":300,"facility_type":"Dry Cargo"},{"count":92,"facility_type":"Tanker"},{"count":52,"facility_type":"Both"}],[{"country":"美国"},{"count":209,"facility_type":"Both"},{"count":1053,"facility_type":"Dry Cargo"},{"count":709,"facility_type":"Tanker"}],[{"country":"日本"},{"count":705,"facility_type":"Dry Cargo"},{"count":321,"facility_type":"Tanker"},{"count":93,"facility_type":"Both"}],[{"country":"加拿大"},{"count":312,"facility_type":"Dry Cargo"},{"count":118,"facility_type":"Tanker"},{"count":51,"facility_type":"Both"}],[{"country":"德国"},{"count":286,"facility_type":"Dry Cargo"},{"count":83,"facility_type":"Tanker"},{"count":29,"facility_type":"Both"}],[{"country":"印度尼西亚"},{"count":184,"facility_type":"Dry Cargo"},{"count":211,"facility_type":"Tanker"},{"count":35,"facility_type":"Both"}],[{"country":"英国"},{"count":391,"facility_type":"Dry Cargo"},{"count":172,"facility_type":"Tanker"},{"count":43,"facility_type":"Both"}],[{"country":"意大利"},{"count":28,"facility_type":"Both"},{"count":229,"facility_type":"Dry Cargo"},{"count":117,"facility_type":"Tanker"}]];
         callback(a);
         },300);*/
        axios.get(sever.portAddress + "/portInfo/getPortFaclityStatistics/"+params.id)
            .then(function(res){
                callback(res.data);
            })
            .catch(function(error){
                console.log(error);
            });
    }

};

export default portAndBerthService;
