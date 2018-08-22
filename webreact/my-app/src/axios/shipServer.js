import axios from "axios";
import sever from "../Config/globaldefine";

const shipServer = {
    findByType: function(params, callback) {
        /*setTimeout(function(){
            var a = {data:[{"country":"CN","grid_pos":"121.37180328369139,31.551622958913143|121.32167816162108,31.479623233453637|121.4919662475586,31.218086583475127|121.8174362182617,31.303195078289704|121.79752349853514,31.40874013690849|121.55101776123047,31.572685550720422|121.43291473388672,31.615965936476073|121.37386322021484,31.55513372117204|121.37180328369139,31.551622958913143","mt_pos":"121.601/31.381445","country_english_name":"China","name":"shanghai","port_id":"12982","scale":"very large","country_chinese_name":"中国","port_chaname":"上海港","type":"port","port_continent":"亚洲"},{"country":"AR","grid_pos":"-60.02655029296875,-33.45869064331055|-60.037193298339844,-33.45457077026367|-60.059165954589844,-33.444786071777344|-60.06019592285156,-33.444271087646484|-60.06019592285156,-33.44358444213867|-60.058135986328125,-33.44306945800781|-60.05779266357422,-33.44306945800781|-60.026206970214844,-33.45817565917969|-60.02586364746094,-33.45834732055664|-60.02586364746094,-33.458518981933594|-60.026206970214844,-33.45869064331055|-60.02655029296875,-33.45869064331055","mt_pos":"-59.99561/-33.480315","country_english_name":"Argentina","name":"ramallo","port_id":"11682","scale":"small","country_chinese_name":"阿根廷","port_chaname":"拉马约","type":"port","port_continent":"南美洲"}]}
            callback(a);
        },300)*/
         axios
         .post(sever.IP + "shipInfo/findByType", params)
         .then(function(res) {
         callback(res.data);
         })
         .catch(function(error) {
         console.log(error);
         });
    },

};

export default shipServer;
