import axios from 'axios';
import sever from "../Config/globaldefine";
const berthDetail={
    getBerthByBerthId:function(params, callback){
        axios.get(sever.portAddress+'/shiptail/service/berthInfo/getBerthByBerthId',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log("error");
        })
    },
    getBerthUsingInfoByBerthId:function(params, callback){
        axios.get(sever.portAddress+'/shiptail/service/mongo/getBerthUsingInfo',{params})
        .then(function(res){
            callback(res.data);
        })
        .catch(function(error){
            console.log("error");
        })
    }

    

}

export default berthDetail;