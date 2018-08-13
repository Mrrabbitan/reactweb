import axios from "axios";
import sever from "./globaldefine";

const httpServer = {
  app1: function(params, callback) {
        setTimeout(function(){
            var a = {data:[{"country":"CN","grid_pos":"121.37180328369139,31.551622958913143|121.32167816162108,31.479623233453637|121.4919662475586,31.218086583475127|121.8174362182617,31.303195078289704|121.79752349853514,31.40874013690849|121.55101776123047,31.572685550720422|121.43291473388672,31.615965936476073|121.37386322021484,31.55513372117204|121.37180328369139,31.551622958913143","mt_pos":"121.601/31.381445","country_english_name":"China","name":"shanghai","port_id":"12982","scale":"very large","country_chinese_name":"中国","port_chaname":"上海港","type":"port","port_continent":"亚洲"},{"country":"AR","grid_pos":"-60.02655029296875,-33.45869064331055|-60.037193298339844,-33.45457077026367|-60.059165954589844,-33.444786071777344|-60.06019592285156,-33.444271087646484|-60.06019592285156,-33.44358444213867|-60.058135986328125,-33.44306945800781|-60.05779266357422,-33.44306945800781|-60.026206970214844,-33.45817565917969|-60.02586364746094,-33.45834732055664|-60.02586364746094,-33.458518981933594|-60.026206970214844,-33.45869064331055|-60.02655029296875,-33.45869064331055","mt_pos":"-59.99561/-33.480315","country_english_name":"Argentina","name":"ramallo","port_id":"11682","scale":"small","country_chinese_name":"阿根廷","port_chaname":"拉马约","type":"port","port_continent":"南美洲"}]}
            callback(a);
        },300)   
      /* axios
      .get(sever.portAddress + "shiptail/service/berthInfo/getAll", params)
      .then(function(res) {
        callback(res);
      })
      .catch(function(error) {
        console.log(error);
      });   */
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
    }
};

export default httpServer;
